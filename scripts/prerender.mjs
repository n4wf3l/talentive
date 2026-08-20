/**
 * Prerender the SPA to static HTML per route.
 *
 * Runs after `vite build`. Boots a local static server for dist/, drives a
 * headless Chromium (via Puppeteer) through each known route, waits for the
 * SPA to settle, then writes the fully-rendered HTML back to disk.
 *
 * Why: LLM crawlers (GPTBot, PerplexityBot, ClaudeBot) do not execute JS as of
 * 2026, and Googlebot renders SPA content in a deferred second wave. Serving
 * real HTML per route gets us cited in AI Overviews and speeds indexing.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';
import sirv from 'sirv';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// Must match the Vite `base` — GH Pages serves the site under /talentive/.
const BASE = '/talentive/';

const ROUTES = [
  '/',
  '/services',
  '/find-employee',
  '/find-job',
  '/about',
  '/contact',
  '/privacy',
];

const PORT = 5175;

async function startServer() {
  const handler = sirv(DIST, {
    single: true, // SPA fallback → serves index.html for unknown paths
    dev: false,
    etag: false,
  });
  const server = http.createServer((req, res) => {
    // Strip the base prefix so sirv sees the request as /services etc.
    if (req.url && req.url.startsWith(BASE)) {
      req.url = req.url.slice(BASE.length - 1) || '/';
    }
    handler(req, res);
  });
  await new Promise((resolve) => server.listen(PORT, resolve));
  return server;
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });

  const consoleErrors = [];
  page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`console.error: ${msg.text()}`);
  });

  // Skip splash + onboarding overlays so we capture the real content.
  await page.evaluateOnNewDocument(() => {
    try {
      sessionStorage.setItem('talentive_splash_seen', '1');
      localStorage.setItem('talentive_onboarding_done', '1');
      localStorage.setItem('talentive-lang', 'nl');
    } catch {
      /* storage unavailable — non-fatal */
    }
  });

  const url = `http://localhost:${PORT}${BASE}${route === '/' ? '' : route.replace(/^\//, '')}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });

  // Wait for the React root to have real content (not just splash / empty div).
  try {
    await page.waitForFunction(
      () => {
        const root = document.getElementById('root');
        if (!root || root.children.length === 0) return false;
        // Skip splash by requiring at least one <main> element rendered.
        return !!root.querySelector('main');
      },
      { timeout: 20_000 },
    );
  } catch (err) {
    // Capture what the DOM looks like to help debugging.
    const snapshot = await page.evaluate(() => {
      const root = document.getElementById('root');
      const allDivs = Array.from(document.querySelectorAll('div')).map((d) => d.id).filter(Boolean);
      return {
        rootChildren: root ? root.children.length : -1,
        rootText: root ? root.innerText.slice(0, 200) : '',
        bodyHtmlStart: document.body ? document.body.innerHTML.slice(0, 300) : '(no body)',
        divIds: allDivs.slice(0, 5),
        url: location.href,
        readyState: document.readyState,
      };
    });
    throw new Error(
      `${err.message}\n  url: ${snapshot.url}\n  readyState: ${snapshot.readyState}\n  root.children: ${snapshot.rootChildren}\n  divIds: [${snapshot.divIds.join(', ')}]\n  body start: ${snapshot.bodyHtmlStart}\n  console: ${consoleErrors.join(' | ') || '(none)'}`,
    );
  }

  // Give async effects (useSEO writing to <head>, JSON-LD injection) time to flush,
  // and let any pending network (fonts, images) settle.
  await new Promise((r) => setTimeout(r, 500));

  const html = await page.content();
  await page.close();
  return html;
}

function targetFor(route) {
  return route === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, route.replace(/^\//, ''), 'index.html');
}

async function writeRouteHtml(route, html) {
  const target = targetFor(route);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html, 'utf8');
  return target;
}

async function main() {
  console.log('[prerender] booting static server for dist/…');
  const server = await startServer();
  console.log(`[prerender] serving at http://localhost:${PORT}${BASE}`);

  console.log('[prerender] launching headless Chromium…');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Two-phase strategy: collect every route's HTML FIRST while the server is
  // still serving the untouched vite-built dist/index.html. Only after all
  // routes have been rendered do we write to disk. Otherwise the second route
  // hits an SPA fallback that returns the (already prerendered) home HTML,
  // which React can't recover from cleanly.
  const results = new Map();
  let ok = 0;
  let fail = 0;
  try {
    for (const route of ROUTES) {
      const label = route === '/' ? '/' : route;
      try {
        const html = await renderRoute(browser, route);
        results.set(route, html);
        const size = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1);
        console.log(`[prerender] ${label.padEnd(16)} rendered (${size} kB)`);
        ok++;
      } catch (err) {
        console.error(`[prerender] ${label.padEnd(16)} FAILED: ${err.message}`);
        fail++;
      }
    }

    // Now flush every collected result to disk.
    for (const [route, html] of results) {
      const out = await writeRouteHtml(route, html);
      console.log(`[prerender] wrote ${path.relative(ROOT, out)}`);
    }

    // Duplicate the home page to 404.html so the SPA fallback still works on GH Pages
    // for direct hits to unknown paths (deep links after cache misses).
    if (results.has('/')) {
      await fs.writeFile(path.join(DIST, '404.html'), results.get('/'), 'utf8');
      console.log('[prerender] wrote 404.html (copy of /)');
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] done — ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error('[prerender] fatal:', err);
  process.exit(1);
});

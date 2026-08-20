import { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  LOCALES,
  absoluteUrl,
} from '../seo/seoConfig';

interface UseSEOArgs {
  /** Route path without basename, e.g. "/services". Use "/" for home. */
  path: string;
  /** i18n key for the page title. */
  titleKey: string;
  /** i18n key for the meta description. */
  descriptionKey: string;
  /** Optional absolute URL for og:image / twitter:image. */
  image?: string;
  /** Optional JSON-LD blocks scoped to this page (removed on unmount). */
  jsonLd?: object | object[];
}

const PAGE_JSONLD_ATTR = 'data-seo-page';

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const key = extra?.hreflang ? `${rel}[hreflang="${extra.hreflang}"]` : `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(key);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (extra?.hreflang) el.setAttribute('hreflang', extra.hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  if (extra) {
    for (const [k, v] of Object.entries(extra)) el.setAttribute(k, v);
  }
}

export function useSEO({ path, titleKey, descriptionKey, image, jsonLd }: UseSEOArgs) {
  const { t, language } = useTranslation();

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    const url = absoluteUrl(path);
    const ogImage = image ?? DEFAULT_OG_IMAGE;
    const locale = LOCALES[language];

    document.title = title;
    document.documentElement.lang = locale.htmlLang;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');

    // Canonical
    upsertLink('canonical', url);

    // hreflang alternates — same URL serves all languages (client-toggle SPA).
    // x-default points to the same canonical URL.
    for (const lang of Object.keys(LOCALES) as Array<keyof typeof LOCALES>) {
      upsertLink('alternate', url, { hreflang: LOCALES[lang].htmlLang });
    }
    upsertLink('alternate', url, { hreflang: 'x-default' });

    // Open Graph
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', url);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', title);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', locale.ogLocale);

    // Twitter — only card type is needed; twitter:* auto-fills from og:* when absent.
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

    // Per-page JSON-LD — replace any previous page-scoped blocks.
    document.head
      .querySelectorAll(`script[${PAGE_JSONLD_ATTR}]`)
      .forEach((n) => n.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const block of blocks) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute(PAGE_JSONLD_ATTR, '');
        script.text = JSON.stringify(block);
        document.head.appendChild(script);
      }
    }

    return () => {
      document.head
        .querySelectorAll(`script[${PAGE_JSONLD_ATTR}]`)
        .forEach((n) => n.remove());
    };
  }, [t, language, path, titleKey, descriptionKey, image, jsonLd]);
}

/** Convenience: build a BreadcrumbList JSON-LD given ordered [name, path] pairs. */
export function buildBreadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

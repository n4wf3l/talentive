import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    // Compresses PNG/JPG/SVG at build time (in-place, no code changes needed).
    // Hero PNGs go from 2-3 MB down to ~200-500 KB, huge LCP win.
    ViteImageOptimizer({
      png: { quality: 78, compressionLevel: 9, adaptiveFiltering: true },
      jpeg: { quality: 78, mozjpeg: true },
      jpg: { quality: 78, mozjpeg: true },
      webp: { quality: 78, effort: 5 },
      avif: { quality: 60, effort: 5 },
      svg: {
        multipass: true,
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        ],
      },
      cache: true,
      cacheLocation: 'node_modules/.cache/vite-image-optimizer',
      logStats: true,
    }),
  ],
  // Site is served at the root of the custom domain (preview.talentivegroup.com
  // for now, talentivegroup.com later) via public/CNAME. GH Pages recognises the
  // CNAME file and redirects n4wf3l.github.io/talentive/* → the custom domain.
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    cssMinify: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 800,
  },
});

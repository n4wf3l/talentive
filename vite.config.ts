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
  // GitHub Pages serves the site under /talentive/ (the repo name).
  // This must match the repo name exactly (case-sensitive on GH Pages).
  base: '/talentive/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    cssMinify: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 800,
  },
});

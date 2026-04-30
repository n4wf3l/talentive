import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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

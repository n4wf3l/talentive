import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// The prerender step writes real HTML per route (for crawlers / AI Overviews),
// then we re-mount React fresh on top with createRoot. Not full hydration —
// costs one client render, avoids all hydration-mismatch pitfalls when the
// SPA fallback serves the wrong route's prerendered content.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

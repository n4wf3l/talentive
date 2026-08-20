import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FindEmployee from './pages/FindEmployee';
import FindJob from './pages/FindJob';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ui/ScrollToTop';
import SplashScreen, { shouldShowSplash } from './components/ui/SplashScreen';
import OnboardingOverlay, { shouldShowOnboarding } from './components/ui/OnboardingOverlay';

export default function App() {
  // Splash and onboarding start OFF so the initial React tree matches the
  // prerendered HTML (which has neither). An effect flips them on after mount
  // if the user should actually see them — avoids a hydration mismatch.
  const [showSplash, setShowSplash] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (shouldShowSplash()) setShowSplash(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Start onboarding after splash if first visit
    if (shouldShowOnboarding()) {
      // Small delay to let the page render
      setTimeout(() => setShowOnboarding(true), 600);
    }
  };

  return (
    <LanguageProvider>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {showOnboarding && <OnboardingOverlay onComplete={() => setShowOnboarding(false)} />}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find-employee" element={<FindEmployee />} />
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

import { useState } from 'react';
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
import CustomCursor from './components/ui/CustomCursor';

export default function App() {
  const [showSplash, setShowSplash] = useState(shouldShowSplash);
  const [showOnboarding, setShowOnboarding] = useState(false);

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
      <CustomCursor />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {showOnboarding && <OnboardingOverlay onComplete={() => setShowOnboarding(false)} />}
      <BrowserRouter>
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

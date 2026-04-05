import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Home from './pages/Home';
import FindEmployee from './pages/FindEmployee';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-employee" element={<FindEmployee />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

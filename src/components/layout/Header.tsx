import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import logo from '../../assets/images/logo.png';

const navItems = [
  { key: 'nav.home', href: '/', section: undefined },
  { key: 'nav.services', href: '/#services', section: 'services' },
  { key: 'nav.about', href: '/#about', section: 'about' },
  { key: 'nav.contact', href: '/#contact', section: 'contact' },
];

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<'visible' | 'hidden'>('visible');
  const location = useLocation();

  // On non-home pages, header is always visible with solid bg
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setHeaderState('visible');
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setHeaderState(window.scrollY > heroHeight ? 'hidden' : 'visible');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (section?: string) => {
    if (section && isHomePage) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On home hero: transparent header; elsewhere: solid
  const isTransparent = isHomePage && headerState === 'visible';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        headerState === 'hidden' && isHomePage
          ? 'header-hidden pointer-events-none'
          : 'header-visible'
      } ${
        isTransparent
          ? ''
          : 'bg-white/90 shadow-sm backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src={logo} alt="Talentive" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map(({ key, href, section }) => (
            <Link
              key={key}
              to={href}
              onClick={() => handleNavClick(section)}
              className={`text-sm font-medium transition-colors ${
                isTransparent
                  ? 'text-white/70 hover:text-white'
                  : 'text-gray-600 hover:text-primary-800'
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher variant={isTransparent ? 'dark' : 'light'} />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`rounded-lg p-2 transition-colors md:hidden ${
            isTransparent
              ? 'text-white/80 hover:bg-white/10 hover:text-white'
              : 'text-gray-600 hover:bg-gray-100 hover:text-primary-800'
          }`}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

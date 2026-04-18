import { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import logo from '../../assets/images/logo.png';

interface NavItem {
  key: string;
  href: string;
  icon: ReactNode;
}

const iconClass = 'h-4 w-4';

const navItems: NavItem[] = [
  {
    key: 'nav.home',
    href: '/',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    key: 'nav.services',
    href: '/services',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    key: 'nav.about',
    href: '/about',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    key: 'nav.contact',
    href: '/contact',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export { navItems };
export type { NavItem };

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<'visible' | 'hidden'>('visible');
  const location = useLocation();

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        headerState === 'hidden' && isHomePage
          ? 'header-hidden pointer-events-none'
          : 'header-visible'
      } ${
        isHomePage
          ? ''
          : 'bg-primary-900/95 backdrop-blur-md shadow-lg shadow-primary-950/20'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 sm:py-1.5 lg:px-8 lg:py-2">
        {/* Logo */}
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src={logo} alt="Talentive" className="h-16 w-auto sm:h-24 md:h-32 lg:h-36 brightness-0 invert" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex font-display" aria-label="Main navigation">
          {navItems.map(({ key, href, icon }) => {
            const isActive = location.pathname === href;
            return (
              <Link
                key={key}
                to={href}
                className={`group relative flex items-center gap-2 px-4 py-3 text-base font-bold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {/* Icon */}
                <span className={`transition-colors duration-300 ${isActive ? 'text-accent-400' : 'text-white/40 group-hover:text-accent-400'}`}>
                  {icon}
                </span>
                {/* Label */}
                {t(key)}
                {/* Purple underline that fills left-to-right on hover / stays on active */}
                <span
                  className={`pointer-events-none absolute bottom-0 left-2 right-2 h-[3px] rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-accent-500 origin-left transition-transform duration-500 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher variant="dark" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden"
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

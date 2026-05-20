import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER } from '../../constants';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import logo from '../../assets/images/talentive.png';

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
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setScrolled(window.scrollY > 8);

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 8);

      if (currentY <= 8) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show navbar when mobile menu is open
  const isHidden = hidden && !isMenuOpen;

  // Only paint the opaque bg when the navbar is actually visible — otherwise
  // the user sees a brief navy flash as the bg fades in while the navbar is
  // sliding up out of view on the first scroll-down.
  const showOpaque = (!isHomePage || scrolled) && !isHidden;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        showOpaque
          ? 'bg-primary-900/95 backdrop-blur-md shadow-lg shadow-primary-950/20'
          : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 [@media(max-height:500px)]:py-1.5">
        {/* Logo */}
        <Link to="/" className="transition-opacity hover:opacity-80">
          <img src={logo} alt="Talentive" className="h-8 w-auto sm:h-9 md:h-10" />
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

        {/* Desktop right — phone pill + language switcher */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Phone number pill (matches the reference design) */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:border-accent-400/60 hover:bg-white/[0.04] hover:shadow-md hover:shadow-purple-600/20"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-accent-400/60 group-hover:text-accent-400">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </span>
            <span>{PHONE_NUMBER}</span>
          </a>
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

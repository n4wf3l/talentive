import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../../assets/images/talentive.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavItem {
  key: string;
  href: string;
  descNl: string;
  descFr: string;
  descEn: string;
  icon: ReactNode;
}

const mobileNavItems: MobileNavItem[] = [
  {
    key: 'nav.home',
    href: '/',
    descNl: 'Terug naar de startpagina',
    descFr: 'Retour à la page d\'accueil',
    descEn: 'Back to the homepage',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    key: 'nav.services',
    href: '/services',
    descNl: 'Ontdek wat wij aanbieden',
    descFr: 'Découvrez ce que nous offrons',
    descEn: 'Discover what we offer',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    key: 'nav.about',
    href: '/about',
    descNl: 'Leer ons team kennen',
    descFr: 'Apprenez à connaître notre équipe',
    descEn: 'Get to know our team',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    descNl: 'Neem contact met ons op',
    descFr: 'Prenez contact avec nous',
    descEn: 'Get in touch with us',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, language } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getDesc = (item: MobileNavItem) => {
    if (language === 'fr') return item.descFr;
    if (language === 'en') return item.descEn;
    return item.descNl;
  };

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-primary-900/70 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-sm overflow-hidden shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(180deg, #0a1a3a 0%, #0f2b5b 50%, #132e5e 100%)',
        }}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-5 py-4 sm:px-7 sm:py-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={onClose}>
              <img
                src={logo}
                alt="Talentive"
                className="h-8 w-auto sm:h-9"
              />
            </Link>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white hover:rotate-90"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Decorative line — mauve */}
          <div className="mt-3 h-px bg-gradient-to-r from-purple-500/50 via-purple-400/15 to-transparent" />

          {/* Nav items */}
          <div className="mt-3 flex flex-col gap-1.5">
            {mobileNavItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={onClose}
                  className={`menu-item-stagger ${isOpen ? 'menu-open' : ''} group relative flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/15 via-purple-500/8 to-transparent ring-1 ring-purple-400/20'
                      : 'hover:bg-white/[0.06] hover:translate-x-1'
                  }`}
                  style={{ animationDelay: `${150 + index * 80}ms` }}
                >
                  {/* Active left bar — gradient mauve */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-b from-purple-400 to-purple-600 opacity-100 shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                        : 'bg-transparent opacity-0'
                    }`}
                  />

                  {/* Icon — mauve gradient when active */}
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-purple-500/30 to-purple-600/20 text-purple-300 ring-1 ring-purple-400/30'
                        : 'bg-white/[0.06] text-white/40 group-hover:bg-purple-500/15 group-hover:text-purple-300'
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Text */}
                  <div className="flex min-w-0 flex-col gap-0">
                    <span
                      className={`text-[15px] font-semibold leading-tight tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {t(item.key)}
                    </span>
                    <span
                      className={`mt-0.5 text-[11px] leading-snug transition-colors duration-300 ${
                        isActive ? 'text-white/40' : 'text-white/25 group-hover:text-white/35'
                      }`}
                    >
                      {getDesc(item)}
                    </span>
                  </div>

                  {/* Arrow — mauve */}
                  <svg
                    className={`ml-auto mt-2 h-4 w-4 flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'text-purple-400 translate-x-0' : 'text-white/20 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-purple-300'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Bottom section */}
          <div className="mt-auto pt-3">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            <div className="mt-3 rounded-2xl bg-white/[0.04] p-3">
              <LanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>
      </nav>
    </>,
    document.body,
  );
}

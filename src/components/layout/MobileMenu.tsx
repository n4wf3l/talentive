import { useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../../assets/images/logo.png';

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

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-primary-900/70 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(180deg, #0a1a3a 0%, #0f2b5b 50%, #132e5e 100%)',
        }}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-6 py-6 sm:px-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={onClose}>
              <img src={logo} alt="Talentive" className="h-20 w-auto brightness-0 invert" />
            </Link>
            <button
              onClick={onClose}
              className="rounded-xl p-2.5 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white hover:rotate-90"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Decorative line */}
          <div className="mt-5 h-px bg-gradient-to-r from-accent-500/40 via-accent-400/10 to-transparent" />

          {/* Nav items */}
          <div className="mt-6 flex flex-col gap-2">
            {mobileNavItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={onClose}
                  className={`menu-item-stagger ${isOpen ? 'menu-open' : ''} group relative flex items-start gap-4 rounded-2xl px-4 py-4 transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10'
                      : 'hover:bg-white/[0.06] hover:translate-x-1'
                  }`}
                  style={{ animationDelay: `${150 + index * 80}ms` }}
                >
                  {/* Active left bar */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300 ${
                      isActive ? 'bg-accent-400 opacity-100' : 'bg-transparent opacity-0'
                    }`}
                  />

                  {/* Icon */}
                  <span
                    className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-accent-500/20 text-accent-400'
                        : 'bg-white/[0.06] text-white/40 group-hover:bg-accent-500/15 group-hover:text-accent-400'
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Text */}
                  <div className="flex flex-col gap-0.5">
                    <span
                      className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {t(item.key)}
                    </span>
                    <span
                      className={`text-xs leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-white/40' : 'text-white/25 group-hover:text-white/35'
                      }`}
                    >
                      {getDesc(item)}
                    </span>
                  </div>

                  {/* Arrow */}
                  <svg
                    className={`ml-auto mt-2.5 h-4 w-4 flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'text-accent-400 translate-x-0' : 'text-white/20 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
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

          {/* Decorative divider */}
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Bottom section */}
          <div className="mt-auto pb-6 pt-6">
            <div className="rounded-2xl bg-white/[0.04] p-4">
              <LanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

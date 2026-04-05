import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { key: 'nav.home', href: '/', section: undefined },
  { key: 'nav.services', href: '/#services', section: 'services' },
  { key: 'nav.about', href: '/#about', section: 'about' },
  { key: 'nav.contact', href: '/#contact', section: 'contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

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

  const handleNavClick = (section?: string) => {
    onClose();
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
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
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-primary-800 shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-8 py-6">
          {/* Close */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-white">Talentive</span>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Decorative line */}
          <div className="mt-6 h-px bg-gradient-to-r from-accent-500/40 via-transparent to-transparent" />

          {/* Nav links with stagger */}
          <div className="mt-8 flex flex-col gap-1">
            {navItems.map(({ key, href, section }, index) => (
              <Link
                key={key}
                to={href}
                onClick={() => handleNavClick(section)}
                className={`menu-item-stagger ${isOpen ? 'menu-open' : ''} rounded-xl px-4 py-4 text-lg font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
                style={{ animationDelay: `${150 + index * 80}ms` }}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-auto pb-8">
            <div className="border-t border-white/10 pt-6">
              <LanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

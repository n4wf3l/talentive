import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import logo from '../../assets/images/logo.png';

const socials = [
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top row: logo + nav links + socials */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Talentive" className="h-10 w-auto brightness-0 invert sm:h-12" />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link to="/" className="transition-colors hover:text-white">
              {t('nav.home')}
            </Link>
            <Link to="/services" className="transition-colors hover:text-white">
              {t('nav.services')}
            </Link>
            <Link to="/about" className="transition-colors hover:text-white">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-accent-400/60 hover:bg-accent-400/10 hover:text-accent-400 hover:-translate-y-0.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/[0.06]" />

        {/* Bottom row: copyright + contact + legal */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">
          <p>{t('footer.rights')}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="transition-colors hover:text-white">
              {PHONE_NUMBER}
            </a>
            <span className="text-gray-700">·</span>
            <a href={`mailto:${INFO_EMAIL}`} className="transition-colors hover:text-white">
              {INFO_EMAIL}
            </a>
            <span className="text-gray-700">·</span>
            <Link to="/privacy" className="transition-colors hover:text-white">
              {t('footer.legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

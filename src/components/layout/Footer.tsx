import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import logo from '../../assets/images/footer-logo.png';

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
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white text-gray-700">
      {/* Subtle purple-dot pattern on the right */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-30 lg:block"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(124,58,237,0.18) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand + socials */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Talentive"
                width={220}
                height={88}
                className="-ml-3 h-[4.5rem] w-auto sm:-ml-4 sm:h-[5.5rem]"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              {t('footer.description')}
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 hover:-translate-y-0.5"
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

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-600">
              {t('footer.quickLinks')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {(['home', 'services', 'about', 'contact'] as const).map((s) => (
                <li key={s}>
                  <Link
                    to={s === 'home' ? '/' : `/${s}`}
                    className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary-800"
                  >
                    <span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-3" />
                    {t(`nav.${s}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-600">
              {t('footer.contactInfo')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary-800"
                >
                  <svg className="h-4 w-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${INFO_EMAIL}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary-800"
                >
                  <svg className="h-4 w-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                  {INFO_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t('contact.addressValue')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-5 text-xs text-gray-500 sm:flex-row">
          <p>{t('footer.rights')}</p>
          <Link to="/privacy" className="transition-colors hover:text-primary-800">
            {t('footer.legal')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

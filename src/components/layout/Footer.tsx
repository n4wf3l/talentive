import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  const { t } = useTranslation();

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-primary-900 text-white">
      {/* Top decorative curve */}
      <div className="absolute -top-px left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0,0 C480,40 960,40 1440,0 L1440,40 L0,40 Z" fill="#0a1d3d" />
        </svg>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary-400/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand column */}
            <div className="md:col-span-4">
              <Link to="/" className="inline-block">
                <img src={logo} alt="Talentive" className="h-10 w-auto brightness-0 invert" />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
                {t('footer.description')}
              </p>

              {/* Accent bar */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-secondary-400" />
                <div className="h-1 w-4 rounded-full bg-secondary-400/40" />
                <div className="h-1 w-2 rounded-full bg-secondary-400/20" />
              </div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 md:col-start-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary-400">
                {t('footer.quickLinks')}
              </h3>
              <ul className="mt-5 space-y-3.5">
                <li>
                  <Link
                    to="/"
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-secondary-400 transition-all duration-300 group-hover:w-4" />
                    {t('nav.home')}
                  </Link>
                </li>
                {(['services', 'about', 'contact'] as const).map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollTo(section)}
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-secondary-400 transition-all duration-300 group-hover:w-4" />
                      {t(`nav.${section}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary-400">
                {t('footer.contactInfo')}
              </h3>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${INFO_EMAIL}`}
                    className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                    {INFO_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t('contact.addressValue')}
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.06] py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-600">{t('footer.rights')}</p>
            <p className="text-xs text-gray-600">
              Crafted with care in Brussels
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

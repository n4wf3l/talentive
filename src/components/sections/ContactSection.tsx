import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: <PhoneIcon />,
      label: t('contact.phone'),
      value: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
    },
    {
      icon: <EmailIcon />,
      label: t('contact.email'),
      value: INFO_EMAIL,
      href: `mailto:${INFO_EMAIL}`,
    },
    {
      icon: <LocationIcon />,
      label: t('contact.address'),
      value: t('contact.addressValue'),
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {t('contact.subtitle')}
          </p>
        </AnimatedSection>

        {/* Contact cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {contactItems.map((item, index) => (
            <AnimatedSection key={item.label} animation="fade-up" delay={index * 120}>
              <div className="card-premium group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-100 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-lg font-semibold text-primary-800 transition-colors hover:text-accent-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-primary-800">{item.value}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Big CTA block ── */}
        <AnimatedSection animation="scale-in" delay={300}>
          <div className="relative mt-20 overflow-hidden rounded-3xl bg-primary-800 px-8 py-14 text-center shadow-xl shadow-primary-800/10 sm:px-16 sm:py-20">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover opacity-10"
              />
            </div>
            {/* Decorative shapes */}
            <div className="pointer-events-none absolute inset-0">
              <div className="float-slow absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.05]" />
              <div className="float-reverse absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/[0.08]" />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {t('contact.cta')}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-white/50 leading-relaxed">
                {t('contact.ctaDescription')}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link to="/find-employee">
                  <Button variant="primary" size="lg">
                    {t('hero.ctaEmployee')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import antwerpTower from '../../assets/images/antwerp-tower.png';

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
      subtitle: undefined as string | undefined,
      href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
    },
    {
      icon: <EmailIcon />,
      label: t('contact.email'),
      value: INFO_EMAIL,
      subtitle: undefined as string | undefined,
      href: `mailto:${INFO_EMAIL}`,
    },
    {
      icon: <LocationIcon />,
      label: t('contact.address'),
      value: t('contact.addressVenue'),
      subtitle: t('contact.addressValue'),
      href: 'https://maps.google.com/?q=Frankrijklei+5+Antwerpen',
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

        {/* Image left + Cards right */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          {/* Antwerp Tower image */}
          <AnimatedSection animation="slide-right">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/15">
              <img
                src={antwerpTower}
                alt="Antwerp Tower"
                className="h-full w-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-primary-950/10 to-transparent" />
              {/* Location badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    {t('contact.address')}
                  </p>
                  <p className="text-sm font-bold text-primary-800">
                    {t('contact.addressVenue')}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact cards stacked */}
          <div className="flex flex-col gap-5 lg:justify-center">
            {contactItems.map((item, index) => {
              const Inner = (
                <div className="card-premium group flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-100 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      {item.label}
                    </h3>
                    <p className="mt-1.5 text-lg font-semibold text-primary-800 transition-colors group-hover:text-accent-600 break-words">
                      {item.value}
                    </p>
                    {item.subtitle && (
                      <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
                    )}
                  </div>
                </div>
              );

              return (
                <AnimatedSection key={item.label} animation="fade-up" delay={index * 120}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

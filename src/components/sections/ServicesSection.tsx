import { useTranslation } from '../../i18n/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';
import SectionNavigator from '../ui/SectionNavigator';

function RecruitmentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function InterimIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ConsultingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CareerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    { icon: <RecruitmentIcon />, titleKey: 'services.recruitment.title', descKey: 'services.recruitment.description' },
    { icon: <InterimIcon />, titleKey: 'services.interim.title', descKey: 'services.interim.description' },
    { icon: <ConsultingIcon />, titleKey: 'services.consulting.title', descKey: 'services.consulting.description' },
    { icon: <CareerIcon />, titleKey: 'services.career.title', descKey: 'services.career.description' },
  ];

  return (
    <section id="services" className="relative bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {t('services.subtitle')}
          </p>
        </AnimatedSection>

        {/* Service cards grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.titleKey}
              animation="fade-up"
              delay={index * 120}
            >
              <div className="card-premium group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                {/* Top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-100 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-primary-800">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Section navigator arrow */}
      <div className="mt-20 flex justify-center">
        <SectionNavigator targetId="about" />
      </div>
    </section>
  );
}

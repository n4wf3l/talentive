import { useTranslation } from '../../i18n/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionNavigator from '../ui/SectionNavigator';

function TrustIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ProximityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function EfficiencyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    { value: parseInt(t('about.stats.years')), suffix: '+', label: t('about.stats.yearsLabel') },
    { value: parseInt(t('about.stats.clients')), suffix: '+', label: t('about.stats.clientsLabel') },
    { value: parseInt(t('about.stats.placements')), suffix: '+', label: t('about.stats.placementsLabel') },
    { value: parseInt(t('about.stats.satisfaction')), suffix: '%', label: t('about.stats.satisfactionLabel') },
  ];

  const values = [
    { icon: <TrustIcon />, titleKey: 'about.values.trust.title', descKey: 'about.values.trust.description' },
    { icon: <ProximityIcon />, titleKey: 'about.values.proximity.title', descKey: 'about.values.proximity.description' },
    { icon: <EfficiencyIcon />, titleKey: 'about.values.efficiency.title', descKey: 'about.values.efficiency.description' },
  ];

  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Stats bar ── */}
        <AnimatedSection animation="fade-up">
          <div className="rounded-3xl bg-primary-800 px-8 py-12 shadow-xl shadow-primary-800/10 sm:px-12">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-extrabold text-white sm:text-4xl">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Main content ── */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: text */}
          <div>
            <AnimatedSection animation="fade-up">
              <div className="accent-line mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                {t('about.title')}
              </h2>
              <p className="mt-2 text-lg font-medium text-accent-600">
                {t('about.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t('about.mission')}
              </p>
            </AnimatedSection>
          </div>

          {/* Right: values */}
          <div>
            <AnimatedSection animation="fade-up" delay={100}>
              <h3 className="text-xl font-bold text-primary-800 mb-8">
                {t('about.values.title')}
              </h3>
            </AnimatedSection>

            <div className="space-y-5">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.titleKey}
                  animation="slide-left"
                  delay={200 + index * 120}
                >
                  <div className="card-premium group flex gap-5 rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 transition-all duration-300 group-hover:bg-accent-200 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-800">{t(value.titleKey)}</h4>
                      <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                        {t(value.descKey)}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section navigator */}
      <div className="mt-20 flex justify-center">
        <SectionNavigator targetId="contact" />
      </div>
    </section>
  );
}

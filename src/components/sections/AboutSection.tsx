import { useTranslation } from '../../i18n/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';


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

  const values = [
    { icon: <TrustIcon />, titleKey: 'about.values.trust.title', descKey: 'about.values.trust.description' },
    { icon: <ProximityIcon />, titleKey: 'about.values.proximity.title', descKey: 'about.values.proximity.description' },
    { icon: <EfficiencyIcon />, titleKey: 'about.values.efficiency.title', descKey: 'about.values.efficiency.description' },
  ];

  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Top row: Text left + Image right ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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

          {/* Right: image */}
          <AnimatedSection animation="slide-left" delay={150}>
            <div className="relative">
              {/* Decorative accent behind image */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-500/10 via-transparent to-primary-800/10 blur-sm" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[440px]"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Values section below ── */}
        <div className="mt-24">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <div className="accent-line mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary-800 sm:text-3xl">
                {t('about.values.title')}
              </h3>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.titleKey}
                animation="fade-up"
                delay={100 + index * 120}
                className="h-full"
              >
                <div className="about-value-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all duration-500 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/8 hover:-translate-y-2">
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-50/0 via-accent-50/0 to-accent-100/0 transition-all duration-500 group-hover:from-accent-50/60 group-hover:via-accent-50/30 group-hover:to-accent-100/40" />

                  {/* Icon */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 text-accent-600 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-500/15 group-hover:from-accent-200 group-hover:to-accent-100">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h4 className="relative mt-5 text-lg font-bold text-primary-800">{t(value.titleKey)}</h4>

                  {/* Accent line under title */}
                  <div className="relative mx-auto mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent-500 to-accent-300 transition-all duration-500 group-hover:w-12" />

                  {/* Description */}
                  <p className="relative mt-4 line-clamp-3 min-h-[4.125rem] text-sm text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                    {t(value.descKey)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

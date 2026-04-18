import { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';

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

export default function About() {
  const { t, language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Over Ons | Talentive',
      fr: 'À Propos | Talentive',
      en: 'About Us | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  const values = [
    { icon: <TrustIcon />, titleKey: 'about.values.trust.title', descKey: 'about.values.trust.description' },
    { icon: <ProximityIcon />, titleKey: 'about.values.proximity.title', descKey: 'about.values.proximity.description' },
    { icon: <EfficiencyIcon />, titleKey: 'about.values.efficiency.title', descKey: 'about.values.efficiency.description' },
  ];

  return (
    <Layout>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.04]" />
          <div className="float-reverse absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent-500/[0.06] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('about.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About content */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Team image */}
          <AnimatedSection animation="fade-up">
            <div className="mb-16 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80&auto=format&fit=crop"
                alt="Professional team"
                className="h-[300px] w-full object-cover sm:h-[400px]"
              />
            </div>
          </AnimatedSection>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Text */}
            <div>
              <AnimatedSection animation="fade-up">
                <p className="text-gray-600 leading-relaxed">{t('about.description')}</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="mt-4 text-gray-600 leading-relaxed">{t('about.mission')}</p>
              </AnimatedSection>
            </div>

            {/* Values */}
            <div>
              <AnimatedSection animation="fade-up" delay={100}>
                <h3 className="text-xl font-bold text-primary-800 mb-8">{t('about.values.title')}</h3>
              </AnimatedSection>
              <div className="space-y-5">
                {values.map((value, index) => (
                  <AnimatedSection key={value.titleKey} animation="slide-left" delay={200 + index * 120}>
                    <div className="card-premium group flex gap-5 rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 transition-all duration-300 group-hover:bg-accent-200 group-hover:scale-110">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800">{t(value.titleKey)}</h4>
                        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{t(value.descKey)}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

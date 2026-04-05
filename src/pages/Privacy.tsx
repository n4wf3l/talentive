import { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Privacy() {
  const { t, language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Privacybeleid — Talentive',
      fr: 'Politique de Confidentialité — Talentive',
      en: 'Privacy Policy — Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  const sections = [
    { title: t('privacy.dataTitle'), content: t('privacy.dataContent') },
    { title: t('privacy.purposeTitle'), content: t('privacy.purposeContent') },
    { title: t('privacy.cookiesTitle'), content: t('privacy.cookiesContent') },
    { title: t('privacy.rightsTitle'), content: t('privacy.rightsContent') },
    { title: t('privacy.contactTitle'), content: t('privacy.contactContent') },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.04]" />
          <div className="float-reverse absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent-500/[0.06] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('privacy.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
              {t('privacy.subtitle')}
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <p className="text-sm font-medium text-gray-400">{t('privacy.lastUpdated')}</p>
            <p className="mt-6 text-gray-600 leading-relaxed">{t('privacy.intro')}</p>
          </AnimatedSection>

          <div className="mt-12 space-y-10">
            {sections.map((section, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-primary-800">{section.title}</h2>
                      <p className="mt-3 text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

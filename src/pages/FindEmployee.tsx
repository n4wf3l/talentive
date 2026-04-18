import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import JobSeekerForm from '../components/forms/JobSeekerForm';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function FindEmployee() {
  const { t, language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Ik werf aan | Talentive',
      fr: 'Je recrute | Talentive',
      en: 'I\'m hiring | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-accent-50/20 pt-20 pb-12 sm:pt-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-[0.04]"
          />
        </div>
        {/* Subtle decorative halos (no filter:blur to keep cursor visible in inputs) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-accent-100/15" />
          <div className="absolute -left-20 bottom-20 h-[300px] w-[300px] rounded-full bg-primary-100/10" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <AnimatedSection animation="fade-in">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary-800"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              {t('nav.home')}
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="accent-line mt-4 mb-3" />
            <h1 className="text-2xl font-bold tracking-tight text-primary-800 sm:text-3xl">
              {t('form.title')}
            </h1>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed sm:text-base">
              {t('form.subtitle')}
            </p>
          </AnimatedSection>

          {/* Form card */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-200/40 sm:p-6">
              <JobSeekerForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import JobSeekerForm from '../components/forms/JobSeekerForm';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function FindEmployee() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-50/20 pt-28 pb-20 sm:pt-36">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-accent-100/30 blur-3xl" />
          <div className="absolute -left-20 bottom-20 h-[300px] w-[300px] rounded-full bg-primary-100/20 blur-3xl" />
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
            <div className="accent-line mt-6 mb-6" />
            <h1 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
              {t('form.title')}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t('form.subtitle')}
            </p>
          </AnimatedSection>

          {/* Form card */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-200/40 sm:p-10">
              <JobSeekerForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { useSEO, buildBreadcrumbLd } from '../hooks/useSEO';
import Layout from '../components/layout/Layout';
import FindJobForm from '../components/forms/FindJobForm';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function FindJob() {
  const { t } = useTranslation();

  const jsonLd = useMemo(
    () =>
      buildBreadcrumbLd([
        { name: t('breadcrumb.home'), path: '/' },
        { name: t('breadcrumb.findJob'), path: '/find-job' },
      ]),
    [t],
  );

  useSEO({
    path: '/find-job',
    titleKey: 'meta.findJob.title',
    descriptionKey: 'meta.findJob.description',
    jsonLd,
  });

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-accent-50/20 pt-20 pb-12 sm:pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-[0.04]"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-accent-100/15" />
          <div className="absolute -left-20 bottom-20 h-[300px] w-[300px] rounded-full bg-primary-100/10" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
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

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="accent-line mt-4 mb-3" />
            <h1 className="text-2xl font-bold tracking-tight text-primary-800 sm:text-3xl">
              {t('findJob.title')}
            </h1>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed sm:text-base">
              {t('findJob.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-200/40 sm:p-6">
              <FindJobForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

import { useMemo } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { useSEO, buildBreadcrumbLd } from '../hooks/useSEO';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import BriefCTASection from '../components/sections/BriefCTASection';

export default function Home() {
  const { t } = useTranslation();

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbLd([{ name: t('breadcrumb.home'), path: '/' }]),
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [1, 2, 3, 4, 5, 6].map((i) => ({
          '@type': 'Question',
          name: t(`faq.q${i}`),
          acceptedAnswer: { '@type': 'Answer', text: t(`faq.a${i}`) },
        })),
      },
    ],
    [t],
  );

  useSEO({
    path: '/',
    titleKey: 'meta.home.title',
    descriptionKey: 'meta.home.description',
    jsonLd,
  });

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <BriefCTASection />
    </Layout>
  );
}

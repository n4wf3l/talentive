import { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  const { language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Talentive — Rekrutering & Uitzendwerk in België',
      fr: 'Talentive — Recrutement & Intérim en Belgique',
      en: 'Talentive — Recruitment & Staffing in Belgium',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}

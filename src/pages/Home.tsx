import { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import BriefCTASection from '../components/sections/BriefCTASection';

export default function Home() {
  const { language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Talentive | Vast, Contractueel & Payroll Personeel wereldwijd',
      fr: 'Talentive | Personnel Permanent, Contractuel & Payroll à l\'international',
      en: 'Talentive | Permanent, Contract & Payroll Staffing Worldwide',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

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

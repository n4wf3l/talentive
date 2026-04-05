import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import HiringModal from '../ui/HiringModal';

export default function BriefCTASection() {
  const { t } = useTranslation();
  const [isHiringOpen, setIsHiringOpen] = useState(false);

  return (
    <section className="relative bg-gray-50 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scale-in">
          <div className="relative overflow-hidden rounded-3xl bg-primary-950 px-8 py-14 text-center shadow-xl shadow-primary-800/10 sm:px-16 sm:py-20">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover opacity-70"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="hero-mesh absolute inset-0" />
            {/* Decorative shapes */}
            <div className="pointer-events-none absolute inset-0">
              <div className="float-slow absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.05]" />
              <div className="float-reverse absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/[0.08]" />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {t('contact.cta')}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-white/50 leading-relaxed">
                {t('contact.ctaDescription')}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="primary" size="lg" onClick={() => setIsHiringOpen(true)}>
                  {t('hero.ctaEmployee')}
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <HiringModal isOpen={isHiringOpen} onClose={() => setIsHiringOpen(false)} />
    </section>
  );
}

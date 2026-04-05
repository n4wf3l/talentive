import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ];

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {t('faq.subtitle')}
          </p>
        </AnimatedSection>

        {/* FAQ items */}
        <div className="mt-16 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
                <div
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-accent-200 bg-accent-50/30 shadow-lg shadow-accent-100/20'
                      : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                  >
                    <span
                      className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        isOpen ? 'text-accent-600' : 'text-primary-800'
                      }`}
                    >
                      {item.q}
                    </span>
                    <span className={`transition-colors duration-300 ${isOpen ? 'text-accent-600' : 'text-gray-400'}`}>
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed sm:px-8 sm:pb-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

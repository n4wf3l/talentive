import { useState, useCallback, type ReactNode } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';
import ServiceModal from '../ui/ServiceModal';

function PermanentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PayrollIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

interface ServiceDef {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
  image: string;
}

const serviceDefs: ServiceDef[] = [
  {
    icon: <PermanentIcon />,
    titleKey: 'services.permanent.title',
    descKey: 'services.permanent.description',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <ContractIcon />,
    titleKey: 'services.contract.title',
    descKey: 'services.contract.description',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <PayrollIcon />,
    titleKey: 'services.payroll.title',
    descKey: 'services.payroll.description',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop',
  },
];

function ServiceCard({
  icon,
  title,
  description,
  image,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-lg shadow-gray-200/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-800/10 hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-accent-600 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-primary-800 transition-colors duration-300 group-hover:text-accent-600">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{description}</p>
        <div className="mt-5 h-0.5 w-8 rounded-full bg-accent-500 transition-all duration-500 group-hover:w-16 group-hover:bg-accent-400" />
      </div>
    </button>
  );
}

export default function ServicesSection() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const selected = selectedIndex !== null ? serviceDefs[selectedIndex] : null;

  return (
    <section id="services" className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {t('services.subtitle')}
          </p>
        </AnimatedSection>

        {/* Grid of exactly 3 cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {serviceDefs.map((service, index) => (
            <AnimatedSection
              key={service.titleKey}
              animation="fade-up"
              delay={100 + index * 120}
            >
              <ServiceCard
                icon={service.icon}
                title={t(service.titleKey)}
                description={t(service.descKey)}
                image={service.image}
                onClick={() => setSelectedIndex(index)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ServiceModal
          isOpen={selectedIndex !== null}
          onClose={closeModal}
          icon={selected.icon}
          title={t(selected.titleKey)}
          description={t(selected.descKey)}
          image={selected.image}
        />
      )}
    </section>
  );
}

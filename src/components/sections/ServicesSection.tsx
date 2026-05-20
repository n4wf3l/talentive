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
      className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-white text-left shadow-lg shadow-gray-200/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-56 shrink-0 overflow-hidden sm:h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Icon badge — overlapping image and content border */}
      <div className="relative -mt-7 px-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-lg shadow-purple-600/30 ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-7 pt-4 pb-7">
        <h3 className="text-xl font-bold text-primary-800 transition-colors duration-300 group-hover:text-accent-600">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-[15px] leading-relaxed text-gray-500">
          {description}
        </p>

        {/* Arrow link — bottom right */}
        <div className="mt-5 flex items-center justify-end">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent-600 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-purple-600/30 group-hover:translate-x-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}

export default function ServicesSection() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setSelectedIndex(null), []);
  const goPrev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i === null ? null : (i - 1 + serviceDefs.length) % serviceDefs.length,
      ),
    [],
  );
  const goNext = useCallback(
    () =>
      setSelectedIndex((i) => (i === null ? null : (i + 1) % serviceDefs.length)),
    [],
  );

  const selected = selectedIndex !== null ? serviceDefs[selectedIndex] : null;

  return (
    <section id="services" className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              {t('services.eyebrow')}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
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
              className="h-full"
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
          onPrev={serviceDefs.length > 1 ? goPrev : undefined}
          onNext={serviceDefs.length > 1 ? goNext : undefined}
        />
      )}
    </section>
  );
}

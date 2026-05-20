import { useEffect, type ReactNode } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import servicesHeroBg from '../assets/images/services.png';

/* ─── Service icons ─── */
function PermanentIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ContractIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PayrollIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

/* ─── Process icons (5 steps) ─── */
function UnderstandIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function FindIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function EvaluateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  );
}

function OnboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

/* ─── Checkmark for bullets ─── */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* ─── Service card definition ─── */
interface ServiceDef {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
  bulletsKey: string;
  image: string;
}

const serviceDefs: ServiceDef[] = [
  {
    icon: <PermanentIcon />,
    titleKey: 'services.permanent.title',
    descKey: 'services.permanent.description',
    bulletsKey: 'services.permanent.bullets',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <ContractIcon />,
    titleKey: 'services.contract.title',
    descKey: 'services.contract.description',
    bulletsKey: 'services.contract.bullets',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <PayrollIcon />,
    titleKey: 'services.payroll.title',
    descKey: 'services.payroll.description',
    bulletsKey: 'services.payroll.bullets',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop',
  },
];

/* ─── Process steps ─── */
interface ProcessStep {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <UnderstandIcon />,
    titleKey: 'services.process.step1.title',
    descKey: 'services.process.step1.description',
  },
  {
    icon: <FindIcon />,
    titleKey: 'services.process.step2.title',
    descKey: 'services.process.step2.description',
  },
  {
    icon: <EvaluateIcon />,
    titleKey: 'services.process.step3.title',
    descKey: 'services.process.step3.description',
  },
  {
    icon: <OnboardIcon />,
    titleKey: 'services.process.step4.title',
    descKey: 'services.process.step4.description',
  },
  {
    icon: <SupportIcon />,
    titleKey: 'services.process.step5.title',
    descKey: 'services.process.step5.description',
  },
];

export default function Services() {
  const { t, language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Diensten | Internationale Staffing | Talentive',
      fr: 'Services | Staffing International | Talentive',
      en: 'Services | International Staffing | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  // Direct import of the translation files for the bullet arrays (avoiding string-only t())
  /* eslint-disable @typescript-eslint/no-require-imports */
  // We'll fetch bullets via a small registry below.

  // Title splitting
  const titleLead = t('services.heroTitleLead');
  const titleAccent = t('services.heroTitleAccent');

  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════════
          HERO — dark navy + city image on the right
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <img
            src={servicesHeroBg}
            alt=""
            className="h-full w-full object-cover opacity-50 lg:opacity-80"
          />
          <div className="absolute inset-0 bg-primary-950/60 lg:hidden" />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, #060e1f 0%, #060e1f 30%, rgba(6,14,31,0.85) 50%, rgba(6,14,31,0.3) 70%, rgba(6,14,31,0) 90%)',
            }}
            aria-hidden="true"
          />
        </div>
        <div className="hero-mesh absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="float-slow absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[0.04]" />
          <div className="float-reverse absolute -left-16 -bottom-16 h-[280px] w-[280px] rounded-full bg-accent-500/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pt-40 lg:pb-32">
          <div className="max-w-2xl lg:max-w-xl">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-400 to-purple-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
                  {t('services.heroEyebrow')}
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {titleLead}
                <br />
                <span className="text-gradient">{titleAccent}</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                {t('services.heroSubtitle')}
              </p>
            </AnimatedSection>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT WE DELIVER — 3 detailed service cards
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header — title left, subtitle right (matches reference) */}
          <AnimatedSection animation="fade-up">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                    {t('services.deliverEyebrow')}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                  {t('services.deliverTitle')}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {t('services.deliverSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* 3-card grid */}
          <div className="mt-14 grid gap-8 sm:gap-10 lg:grid-cols-3">
            {serviceDefs.map((service, index) => (
              <AnimatedSection
                key={service.titleKey}
                animation="fade-up"
                delay={100 + index * 120}
                className="h-full"
              >
                <ServiceDetailCard
                  icon={service.icon}
                  title={t(service.titleKey)}
                  description={t(service.descKey)}
                  image={service.image}
                  bulletsKey={service.bulletsKey}
                  learnMoreLabel={t('services.learnMore')}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR PROCESS — 5-step timeline
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                    {t('services.processEyebrow')}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                  {t('services.processTitle')}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {t('services.processSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* 5-step row */}
          <div className="relative mt-14">
            {/* Horizontal connector line (desktop) */}
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 lg:block" aria-hidden="true" />

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-6">
              {processSteps.map((step, index) => (
                <AnimatedSection
                  key={step.titleKey}
                  animation="fade-up"
                  delay={100 + index * 100}
                >
                  <div className="relative text-left lg:text-left">
                    {/* Icon badge */}
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-lg shadow-purple-600/30 ring-4 ring-white">
                      {step.icon}
                    </div>
                    {/* Step number */}
                    <p className="mt-5 text-sm font-extrabold tracking-wide text-purple-600">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    {/* Title */}
                    <h3 className="mt-1 text-lg font-bold text-primary-800">
                      {t(step.titleKey)}
                    </h3>
                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {t(step.descKey)}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ═══════════════════════════════════════════════════════
   ServiceDetailCard — image + icon badge + bullets + Learn more
   ═══════════════════════════════════════════════════════ */
function ServiceDetailCard({
  icon,
  title,
  description,
  image,
  bulletsKey,
  learnMoreLabel,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  bulletsKey: string;
  learnMoreLabel: string;
}) {
  // Pull the bullets from the active language translations directly
  const { language } = useTranslation();
  const bullets = readBulletsFromTranslations(language, bulletsKey);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-gray-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/15">
      {/* Image */}
      <div className="relative h-52 shrink-0 overflow-hidden sm:h-56">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Icon badge overlapping */}
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
        <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{description}</p>

        {/* Bullets */}
        <ul className="mt-5 space-y-2.5">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
              <span className="flex-shrink-0 text-purple-500">
                <CheckIcon />
              </span>
              <span className="leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-bold text-purple-600">{learnMoreLabel}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-purple-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent-600 group-hover:to-purple-600 group-hover:text-white group-hover:translate-x-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Helper to read the bullets array from a translation file ───
   We can't get arrays through t() (it returns strings), so we
   resolve the dotted path against the imported translation modules. */
import nlMessages from '../i18n/translations/nl';
import frMessages from '../i18n/translations/fr';
import enMessages from '../i18n/translations/en';

function readBulletsFromTranslations(lang: string, path: string): string[] {
  const dict =
    lang === 'fr' ? frMessages : lang === 'en' ? enMessages : nlMessages;
  const value = path
    .split('.')
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);
  return Array.isArray(value) ? (value as string[]) : [];
}

import { useEffect, type ReactNode } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import JobSeekerForm from '../components/forms/JobSeekerForm';
import AnimatedSection from '../components/ui/AnimatedSection';
import findEmployeeHeroBg from '../assets/images/find-employee.png';

function FastIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function VettedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ResultsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

interface Benefit {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
}

const benefits: Benefit[] = [
  {
    icon: <FastIcon />,
    titleKey: 'findEmployee.benefits.fast.title',
    descKey: 'findEmployee.benefits.fast.description',
  },
  {
    icon: <VettedIcon />,
    titleKey: 'findEmployee.benefits.vetted.title',
    descKey: 'findEmployee.benefits.vetted.description',
  },
  {
    icon: <ResultsIcon />,
    titleKey: 'findEmployee.benefits.results.title',
    descKey: 'findEmployee.benefits.results.description',
  },
];

export default function FindEmployee() {
  const { t, language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Ik werf aan | Talentive',
      fr: 'Je recrute | Talentive',
      en: 'I\'m hiring | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════════
          HERO — dark navy panel with image on the right
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-primary-950">
        {/* Background image, only really visible on the right (desktop) */}
        <div className="absolute inset-0">
          <img
            src={findEmployeeHeroBg}
            alt=""
            className="h-full w-full object-cover opacity-50 lg:opacity-80"
          />
          {/* Mobile: dark overlay on top of the image so the text stays readable */}
          <div className="absolute inset-0 bg-primary-950/60 lg:hidden" />
          {/* Desktop: gradient washing the left half to dark navy */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, #060e1f 0%, #060e1f 30%, rgba(6,14,31,0.85) 50%, rgba(6,14,31,0.3) 70%, rgba(6,14,31,0) 90%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Animated mesh */}
        <div className="hero-mesh absolute inset-0 opacity-50" />

        {/* Subtle floating shapes (desktop only) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="float-slow absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[0.04]" />
          <div className="float-reverse absolute -left-16 -bottom-16 h-[280px] w-[280px] rounded-full bg-accent-500/[0.04]" />
          <div className="pulse-soft absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-accent-400/40" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pt-40 lg:pb-32">
          <div className="max-w-2xl lg:max-w-xl">
            <AnimatedSection animation="fade-up">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-400 to-purple-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
                  {t('findEmployee.eyebrow')}
                </span>
              </div>

              {/* Title — "Tell us who" + gradient "you're hiring" */}
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('findEmployee.titleLead')}
                <br />
                <span className="text-gradient">{t('findEmployee.titleAccent')}</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                {t('findEmployee.subtitle')}
              </p>
            </AnimatedSection>
          </div>

          {/* Right column is intentionally empty — the image shows through here on desktop */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BODY — form on the left, "Why Talentive?" panel on the right
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* The form card overlaps the hero slightly on desktop */}
          <div className="grid gap-8 lg:-mt-24 lg:grid-cols-12 lg:items-start lg:gap-10">
            {/* ── LEFT: form card ── */}
            <AnimatedSection animation="fade-up" className="lg:col-span-8">
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-300/30 sm:p-8 lg:p-10">
                <JobSeekerForm />
              </div>
            </AnimatedSection>

            {/* ── RIGHT: Why Talentive? panel ── */}
            <AnimatedSection animation="fade-up" delay={150} className="lg:col-span-4">
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-300/30 sm:p-8 lg:sticky lg:top-28">
                {/* Title */}
                <h2 className="text-xl font-bold tracking-tight text-primary-800 sm:text-2xl">
                  {t('findEmployee.whyTitle')}
                </h2>
                <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />

                {/* Benefits list */}
                <ul className="mt-7 space-y-6">
                  {benefits.map((b) => (
                    <li key={b.titleKey} className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-50 to-purple-50 text-purple-600 ring-1 ring-purple-100">
                        {b.icon}
                      </div>
                      {/* Text */}
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-primary-800 sm:text-[15px]">
                          {t(b.titleKey)}
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-gray-500 sm:text-sm">
                          {t(b.descKey)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Trusted by — placeholder for client logos */}
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <p className="text-xs text-gray-400">
                    {t('findEmployee.trustedBy')}
                  </p>
                  {/* Empty space — client logos will go here once we have them */}
                  <div className="mt-4 flex h-12 items-center" aria-hidden="true" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

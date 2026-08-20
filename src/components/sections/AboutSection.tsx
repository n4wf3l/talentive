import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';

function ExpertiseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" y1="8" x2="12" y2="8" />
      <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </svg>
  );
}

function PlacementsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}

function TailoredIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.05 14.95L6.46 19.54a1.5 1.5 0 0 1-2.12 0L2.46 17.66a1.5 1.5 0 0 1 0-2.12L7.05 10.95" />
      <path d="M17.59 6.41a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-4.59 4.59" />
      <line x1="7" y1="11" x2="17" y2="11" />
    </svg>
  );
}

function ResultsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function TrustIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ProximityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function EfficiencyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function AboutSection() {
  const { t } = useTranslation();

  const values = [
    { icon: <TrustIcon />, titleKey: 'about.values.trust.title', descKey: 'about.values.trust.description' },
    { icon: <ProximityIcon />, titleKey: 'about.values.proximity.title', descKey: 'about.values.proximity.description' },
    { icon: <EfficiencyIcon />, titleKey: 'about.values.efficiency.title', descKey: 'about.values.efficiency.description' },
  ];

  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Top row: Text left + Image with overlay panel right ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: text */}
          <div>
            <AnimatedSection animation="fade-up">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                  {t('about.eyebrow')}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                {t('about.title')}
              </h2>
              <p className="mt-2 text-lg font-medium text-accent-600">
                {t('about.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t('about.mission')}
              </p>
            </AnimatedSection>

            {/* CTA — "Learn more about us" */}
            <AnimatedSection animation="fade-up" delay={300}>
              <Link
                to="/about"
                className="btn-hover mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-purple-200 bg-white px-5 py-3 text-sm font-bold text-primary-800 shadow-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md"
              >
                {t('about.eyebrow') === 'Over ons'
                  ? 'Meer over ons'
                  : t('about.eyebrow') === 'À propos'
                    ? 'En savoir plus'
                    : 'Learn more about us'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>

          {/* Right: image with overlay benefits panel */}
          <AnimatedSection animation="slide-left" delay={150}>
            <div className="relative">
              {/* Decorative accent behind image */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-500/10 via-purple-500/10 to-primary-800/10 blur-sm" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/15">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                  alt="Talentive recruiters collaborating with clients in Antwerp"
                  width={900}
                  height={600}
                  className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-950/60 via-primary-950/20 to-transparent" />
              </div>

              {/* Overlay benefits panel — bottom-right */}
              <div className="absolute bottom-5 right-5 w-[calc(100%-2.5rem)] max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-primary-900/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:bottom-7 sm:right-7 sm:p-6">
                {/* Decorative top gradient bar */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent-500 via-purple-500 to-accent-500" />

                <ul className="space-y-3.5">
                  {[
                    { icon: <ExpertiseIcon />, textKey: 'about.benefits.expertise' },
                    { icon: <PlacementsIcon />, textKey: 'about.benefits.placements' },
                    { icon: <TailoredIcon />, textKey: 'about.benefits.tailored' },
                    { icon: <ResultsIcon />, textKey: 'about.benefits.results' },
                  ].map((b) => (
                    <li key={b.textKey} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-600/30 to-purple-600/30 text-accent-300 ring-1 ring-white/10">
                        {b.icon}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-white/90">
                        {t(b.textKey)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Values section below ── */}
        <div className="mt-24">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <div className="accent-line mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary-800 sm:text-3xl">
                {t('about.values.title')}
              </h3>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.titleKey}
                animation="fade-up"
                delay={100 + index * 120}
                className="h-full"
              >
                <div className="about-value-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all duration-500 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-50/0 via-purple-50/0 to-purple-100/0 transition-all duration-500 group-hover:from-accent-50/60 group-hover:via-purple-50/30 group-hover:to-purple-100/40" />

                  {/* Icon — solid blue → purple gradient that's actually visible */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-lg shadow-purple-600/25 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-600/40 group-hover:from-accent-500 group-hover:to-purple-500">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h4 className="relative mt-5 text-lg font-bold text-primary-800">{t(value.titleKey)}</h4>

                  {/* Accent line under title */}
                  <div className="relative mx-auto mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 transition-all duration-500 group-hover:w-12" />

                  {/* Description */}
                  <p className="relative mt-4 line-clamp-3 min-h-[4.125rem] text-sm text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                    {t(value.descKey)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

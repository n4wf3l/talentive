import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import Button from '../ui/Button';
import SectionNavigator from '../ui/SectionNavigator';
import HiringModal from '../ui/HiringModal';
import FindJobModal from '../ui/FindJobModal';
import coverBg from '../../assets/images/home.png';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isHiringOpen, setIsHiringOpen] = useState(false);
  const [isFindJobOpen, setIsFindJobOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-[100svh] [@media(max-height:500px)]:min-h-[420px]"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 overflow-hidden bg-primary-950">
        <div
          className="hero-bg-animate absolute -inset-[2%] bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-70 lg:opacity-90"
          style={{
            backgroundImage: `url(${coverBg})`,
            backgroundPosition: 'center center',
          }}
          aria-hidden="true"
        />
        {/* Mobile/portrait readability overlay (unchanged) */}
        <div className="absolute inset-0 bg-primary-950/40 sm:hidden [@media(max-height:500px)]:block" />

        {/* DESKTOP ONLY: dark-to-transparent gradient that washes the
            left half so the image only really shows on the right. */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, #060e1f 0%, #060e1f 35%, rgba(6,14,31,0.85) 50%, rgba(6,14,31,0.35) 65%, rgba(6,14,31,0) 80%)',
          }}
          aria-hidden="true"
        />

        {/* DESKTOP ONLY: subtle diagonal purple accent line in the
            transition zone (matches the reference). */}
        <div
          className="pointer-events-none absolute inset-y-0 left-[55%] hidden w-[1px] lg:block"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(124,58,237,0.35) 35%, rgba(124,58,237,0.55) 55%, transparent 100%)',
            transform: 'skewX(-12deg)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Animated gradient mesh background (overlay) ── */}
      <div className="hero-mesh absolute inset-0 lg:opacity-60" />

      {/* ── Floating decorative shapes (desktop only) ── */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="float-slow absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />
        <div className="float-reverse absolute -bottom-16 -left-16 h-[350px] w-[350px] rounded-full bg-accent-500/[0.04]" />
        <div className="pulse-soft absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-accent-400/40" />
        <div className="spin-slow absolute left-[15%] top-[20%] h-[200px] w-[200px] rounded-full border border-white/[0.03]" />
        <div className="float-slow absolute left-1/3 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent-600/[0.06] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-0 [@media(max-height:500px)]:min-h-[420px] [@media(max-height:500px)]:py-8">
        {/*
          Mobile: centered single column (text-center, max-w-6xl, mx-auto).
          Desktop (lg+): 2-column grid → text on the left, image visible on the right.
        */}
        <div className="mx-auto w-full max-w-6xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* ─── Text column ─── */}
          <div className="text-center lg:text-left lg:max-w-xl">
            {/* Title */}
            <h1 className="hero-title-animate text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem] [@media(max-height:500px)]:!text-3xl">
              {t('hero.title').split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 0 ? (
                    line
                  ) : (
                    <span className="text-gradient">{line}</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle-animate mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-xl sm:text-white/70 lg:mx-0 lg:max-w-lg lg:text-base lg:text-white/60 xl:text-lg [@media(max-height:500px)]:mt-2 [@media(max-height:500px)]:!text-xs [@media(max-height:500px)]:text-white/80">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-animate mt-7 flex !flex-row flex-nowrap items-stretch justify-center gap-2 w-full max-w-md mx-auto px-4 sm:mt-10 sm:gap-4 sm:max-w-none sm:px-0 lg:mt-9 lg:justify-start lg:mx-0 lg:px-0 [@media(max-height:500px)]:mt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsHiringOpen(true)}
                data-onboarding="cta-employee"
                className="flex-1 min-w-0 sm:flex-none text-xs leading-tight sm:text-base !px-2.5 !py-3 sm:!px-8 sm:!py-4 !gap-1.5 sm:!gap-2"
              >
                <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="truncate min-w-0">{t('hero.ctaEmployee')}</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsFindJobOpen(true)}
                data-onboarding="cta-job"
                className="flex-1 min-w-0 sm:flex-none text-xs leading-tight sm:text-base !px-2.5 !py-3 sm:!px-8 sm:!py-4 !gap-1.5 sm:!gap-2"
              >
                <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span className="truncate min-w-0">{t('hero.ctaJob')}</span>
              </Button>
            </div>

          </div>

          {/* ─── Right column: empty on desktop, image just shows through ─── */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>

        {/* ── Scroll down indicator (desktop only) ── */}
        <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 sm:bottom-6 sm:block">
          <SectionNavigator targetId="services" />
        </div>
      </div>

      {/* ── Curved section divider ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,10 1080,10 1440,80 L1440,80 L0,80 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

      <HiringModal isOpen={isHiringOpen} onClose={() => setIsHiringOpen(false)} />
      <FindJobModal isOpen={isFindJobOpen} onClose={() => setIsFindJobOpen(false)} />
    </section>
  );
}

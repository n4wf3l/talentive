import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import Button from '../ui/Button';
import SectionNavigator from '../ui/SectionNavigator';
import HiringModal from '../ui/HiringModal';
import FindJobModal from '../ui/FindJobModal';
import coverBg from '../../assets/images/cover-bg.png';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isHiringOpen, setIsHiringOpen] = useState(false);
  const [isFindJobOpen, setIsFindJobOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-[100svh] [@media(max-height:500px)]:min-h-[420px]"
    >
      {/* ── Background image (recruitment / handshake) ── */}
      <div className="absolute inset-0 overflow-hidden bg-primary-950">
        <div
          className="hero-bg-animate absolute -inset-[2%] bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-70"
          style={{ backgroundImage: `url(${coverBg})` }}
          aria-hidden="true"
        />
        {/* Readability overlay (mobile portrait + landscape mobile) */}
        <div className="absolute inset-0 bg-primary-950/40 sm:hidden [@media(max-height:500px)]:block" />
      </div>
      {/* ── Animated gradient mesh background (overlay) ── */}
      <div className="hero-mesh absolute inset-0" />

      {/* ── Floating decorative shapes (desktop only) ── */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {/* Large circle - top right */}
        <div className="float-slow absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />
        {/* Medium circle - bottom left */}
        <div className="float-reverse absolute -bottom-16 -left-16 h-[350px] w-[350px] rounded-full bg-accent-500/[0.04]" />
        {/* Small bright dot */}
        <div className="pulse-soft absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-accent-400/40" />
        {/* Rotating ring */}
        <div className="spin-slow absolute left-[15%] top-[20%] h-[200px] w-[200px] rounded-full border border-white/[0.03]" />
        {/* Accent glow */}
        <div className="float-slow absolute left-1/3 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent-600/[0.06] blur-3xl" />
        {/* Subtle grid dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 [@media(max-height:500px)]:min-h-[420px] [@media(max-height:500px)]:py-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* Title */}
          <h1 className="hero-title-animate text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl [@media(max-height:500px)]:!text-3xl">
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
          <p className="hero-subtitle-animate mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-xl sm:text-white/70 [@media(max-height:500px)]:mt-2 [@media(max-height:500px)]:!text-xs [@media(max-height:500px)]:text-white/80">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons — always side-by-side, even on the smallest mobile */}
          <div className="hero-cta-animate mt-7 flex !flex-row flex-nowrap items-stretch justify-center gap-2 w-full max-w-md mx-auto px-4 sm:mt-10 sm:gap-4 sm:max-w-none sm:px-0 [@media(max-height:500px)]:mt-4">
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

          {/* Trust badges */}
          <div className="hero-cta-animate mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-10 [@media(max-height:500px)]:mt-4">
            {/* Global reach */}
            <div className="flex items-center gap-2 text-white/55">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                <svg className="h-4 w-4 text-accent-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              <span className="text-xs font-semibold tracking-wide sm:text-sm">
                {t('hero.badges.reach')}
              </span>
            </div>
            {/* Vetted talent */}
            <div className="flex items-center gap-2 text-white/55">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                <svg className="h-4 w-4 text-accent-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span className="text-xs font-semibold tracking-wide sm:text-sm">
                {t('hero.badges.vetted')}
              </span>
            </div>
            {/* Data security */}
            <div className="flex items-center gap-2 text-white/55">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                <svg className="h-4 w-4 text-accent-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <span className="text-xs font-semibold tracking-wide sm:text-sm">
                {t('hero.badges.security')}
              </span>
            </div>
          </div>
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

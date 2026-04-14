import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { FIND_JOB_URL } from '../../constants';
import Button from '../ui/Button';
import SectionNavigator from '../ui/SectionNavigator';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* ── Background image (recruitment / handshake) ── */}
      <div className="absolute inset-0 overflow-hidden bg-primary-950">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="hero-bg-animate h-full w-full object-cover opacity-70"
        />
      </div>
      {/* ── Animated gradient mesh background (overlay) ── */}
      <div className="hero-mesh absolute inset-0" />

      {/* ── Floating decorative shapes ── */}
      <div className="pointer-events-none absolute inset-0">
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
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <h1 className="hero-title-animate text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
          <p className="hero-subtitle-animate mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-animate mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/find-employee" data-onboarding="cta-employee">
              <Button variant="primary" size="lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {t('hero.ctaEmployee')}
              </Button>
            </Link>
            <span data-onboarding="cta-job">
              <Button
                variant="outline"
                size="lg"
                href={FIND_JOB_URL}
                external
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                {t('hero.ctaJob')}
              </Button>
            </span>
          </div>
        </div>

        {/* ── Scroll down indicator ── */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 sm:bottom-32">
          <SectionNavigator
            targetId="services"
            label={t('hero.scrollDown')}
            light
          />
        </div>
      </div>

      {/* ── Curved section divider ── */}
      <div className="absolute bottom-0 left-0 right-0">
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
    </section>
  );
}

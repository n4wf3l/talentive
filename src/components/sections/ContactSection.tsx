import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import HiringModal from '../ui/HiringModal';
import antwerpTower from '../../assets/images/antwerp-tower.png';

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useTranslation();
  const [isHiringOpen, setIsHiringOpen] = useState(false);

  return (
    <section id="contact" className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-primary-950 shadow-2xl shadow-primary-900/20">
            {/* Subtle crossed-lines / dots decoration on right (matches reference) */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block"
              aria-hidden="true"
            >
              {/* Faint dot grid */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, white 1.2px, transparent 1.2px)',
                  backgroundSize: '28px 28px',
                }}
              />
              {/* Top-right X mark */}
              <div className="absolute right-12 top-12 h-16 w-16 opacity-15">
                <span className="absolute inset-0 rotate-45 border-t border-white/30" />
                <span className="absolute inset-0 -rotate-45 border-t border-white/30" />
              </div>
              {/* Bottom-right X mark */}
              <div className="absolute right-20 bottom-16 h-12 w-12 opacity-10">
                <span className="absolute inset-0 rotate-45 border-t border-white/30" />
                <span className="absolute inset-0 -rotate-45 border-t border-white/30" />
              </div>
              {/* Mid-area X mark */}
              <div className="absolute right-1/3 top-1/2 h-10 w-10 -translate-y-1/2 opacity-10">
                <span className="absolute inset-0 rotate-45 border-t border-white/30" />
                <span className="absolute inset-0 -rotate-45 border-t border-white/30" />
              </div>
            </div>

            {/* Decorative glows */}
            <div className="pointer-events-none absolute -left-32 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-600/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-3xl" aria-hidden="true" />

            {/* 2-col layout */}
            <div className="relative grid lg:grid-cols-2 lg:items-stretch">
              {/* LEFT: Image with contact overlay card */}
              <div className="relative min-h-[360px] overflow-hidden sm:min-h-[420px] lg:min-h-[460px]">
                <img
                  src={antwerpTower}
                  alt="Antwerp Tower — Talentive HQ at Frankrijklei 5, Antwerpen"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient overlay for contrast — fades to right (where dark panel meets) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(6,14,31,0.45) 0%, rgba(6,14,31,0.55) 60%, rgba(6,14,31,0.95) 100%)',
                  }}
                />

                {/* Overlay contact card (centered on the image) */}
                <div className="relative z-10 flex h-full min-h-[360px] items-center justify-center p-6 sm:min-h-[420px] sm:p-10 lg:min-h-[460px]">
                  <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-primary-950/70 p-6 backdrop-blur-md sm:p-7">
                    <ul className="space-y-5">
                      {/* Address */}
                      <li className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-accent-300 ring-1 ring-white/10">
                          <LocationIcon />
                        </span>
                        <div className="text-sm leading-snug">
                          <p className="font-bold text-white">
                            {t('contact.addressVenue')}
                          </p>
                          <p className="mt-0.5 text-white/55">
                            {t('contact.addressValue')}
                          </p>
                        </div>
                      </li>

                      {/* Phone */}
                      <li>
                        <a
                          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                          className="group flex items-center gap-4 transition-opacity hover:opacity-90"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-accent-300 ring-1 ring-white/10 transition-colors group-hover:text-accent-200">
                            <PhoneIcon />
                          </span>
                          <span className="text-sm font-bold text-white">{PHONE_NUMBER}</span>
                        </a>
                      </li>

                      {/* Email */}
                      <li>
                        <a
                          href={`mailto:${INFO_EMAIL}`}
                          className="group flex items-center gap-4 transition-opacity hover:opacity-90"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-accent-300 ring-1 ring-white/10 transition-colors group-hover:text-accent-200">
                            <EmailIcon />
                          </span>
                          <span className="break-all text-sm font-bold text-white">
                            {INFO_EMAIL}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* RIGHT: Title + CTA */}
              <div className="relative flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                <div className="relative max-w-md">
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {t('contact.title')}
                  </h2>
                  <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-400 to-purple-400" />
                  <p className="mt-6 text-base leading-relaxed text-white/55 sm:text-lg">
                    {t('contact.subtitle')}
                  </p>

                  <div className="mt-9">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setIsHiringOpen(true)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {t('contact.getInTouch')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <HiringModal isOpen={isHiringOpen} onClose={() => setIsHiringOpen(false)} />
    </section>
  );
}

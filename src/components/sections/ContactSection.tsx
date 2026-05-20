import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../../constants';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import HiringModal from '../ui/HiringModal';

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
  const { t, language } = useTranslation();
  const [isHiringOpen, setIsHiringOpen] = useState(false);

  const eyebrowText =
    language === 'fr' ? 'Contact' : language === 'nl' ? 'Contact' : 'Contact';

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-24 sm:py-28">
      {/* Decorative dots pattern (right side) */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Decorative purple glow */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-600/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ── Left: title + subtitle ── */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-400 to-purple-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                {eyebrowText}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t('contact.title')}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              {t('contact.subtitle')}
            </p>
          </AnimatedSection>

          {/* ── Right: structured contact info + CTA ── */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="lg:pl-8">
              {/* Contact items */}
              <ul className="space-y-4">
                {/* Address */}
                <li>
                  <a
                    href="https://maps.google.com/?q=Frankrijklei+5+Antwerpen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl p-2 -ml-2 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-purple-500/15 text-accent-300 ring-1 ring-white/10 transition-all duration-300 group-hover:from-accent-500/30 group-hover:to-purple-500/30 group-hover:text-accent-200">
                      <LocationIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">
                        {t('contact.addressVenue')}
                      </p>
                      <p className="mt-0.5 text-sm text-white/45">
                        {t('contact.addressValue')}
                      </p>
                    </div>
                  </a>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="group flex items-start gap-4 rounded-xl p-2 -ml-2 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-purple-500/15 text-accent-300 ring-1 ring-white/10 transition-all duration-300 group-hover:from-accent-500/30 group-hover:to-purple-500/30 group-hover:text-accent-200">
                      <PhoneIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white">{PHONE_NUMBER}</p>
                      <p className="mt-0.5 text-sm text-white/45">
                        {language === 'fr'
                          ? 'Lun - Ven, 9h - 18h'
                          : language === 'nl'
                            ? 'Ma - Vr, 9u - 18u'
                            : 'Mon - Fri, 9am - 6pm'}
                      </p>
                    </div>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href={`mailto:${INFO_EMAIL}`}
                    className="group flex items-start gap-4 rounded-xl p-2 -ml-2 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-purple-500/15 text-accent-300 ring-1 ring-white/10 transition-all duration-300 group-hover:from-accent-500/30 group-hover:to-purple-500/30 group-hover:text-accent-200">
                      <EmailIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="break-all text-sm font-bold text-white">{INFO_EMAIL}</p>
                      <p className="mt-0.5 text-sm text-white/45">
                        {language === 'fr'
                          ? 'Réponse sous 24h'
                          : language === 'nl'
                            ? 'Antwoord binnen 24u'
                            : 'Reply within 24h'}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              {/* CTA button */}
              <div className="mt-8 flex">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsHiringOpen(true)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {t('hero.ctaEmployee')}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <HiringModal isOpen={isHiringOpen} onClose={() => setIsHiringOpen(false)} />
    </section>
  );
}

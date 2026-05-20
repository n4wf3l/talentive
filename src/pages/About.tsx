import { useEffect, useState, useCallback, type ReactNode } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import TeamMemberModal from '../components/ui/TeamMemberModal';
import aizazPhoto from '../assets/images/aizaz.png';
import fatimaPhoto from '../assets/images/fatima.png';
import ahrarPhoto from '../assets/images/ahrar.png';

/* ─── Why Talentive overlay panel icons ─── */
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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

/* ─── Why choose us cards icons ─── */
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── Bottom feature bar icons ─── */
function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* ─── Team-card icons (phone, whatsapp, email) ─── */
function PhoneIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function WhatsAppIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A12 12 0 0 0 3.06 19.34L2 22l2.74-1A12 12 0 1 0 20.52 3.48zM12 21a8.94 8.94 0 0 1-4.6-1.27l-.33-.2-2.71.71.73-2.64-.21-.34A9 9 0 1 1 12 21zm4.93-6.74c-.27-.13-1.6-.79-1.84-.88s-.43-.13-.61.13-.7.88-.86 1.06-.32.2-.59.07a7.43 7.43 0 0 1-2.18-1.35 8.2 8.2 0 0 1-1.51-1.88c-.16-.27 0-.42.12-.55s.27-.32.4-.48a1.86 1.86 0 0 0 .27-.45.5.5 0 0 0 0-.47c-.07-.13-.61-1.47-.83-2s-.45-.46-.61-.47h-.52a1 1 0 0 0-.73.34A3 3 0 0 0 6.5 9.6a5.27 5.27 0 0 0 1.11 2.81 12.06 12.06 0 0 0 4.62 4.07c.65.28 1.16.45 1.55.58a3.75 3.75 0 0 0 1.72.11 2.81 2.81 0 0 0 1.83-1.29 2.27 2.27 0 0 0 .16-1.29c-.07-.11-.25-.18-.52-.31z" />
    </svg>
  );
}
function EmailIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ─── Data ─── */

interface TeamMember {
  key: 'founder' | 'partner' | 'consultant';
  name: string;
  image: string;
  phone: string;
  whatsapp: string;
  email: string;
  languages: string[];
}

const teamMembers: TeamMember[] = [
  {
    key: 'founder',
    name: 'Aizaz Khan',
    image: aizazPhoto,
    phone: '+32 490 08 08 00',
    whatsapp: '+32 490 08 08 00',
    email: 'Aizaz@talentivegroup.be',
    languages: ['English', 'Dutch'],
  },
  {
    key: 'partner',
    name: 'Fatim Zahra El Maite',
    image: fatimaPhoto,
    phone: '+32 485 60 06 35',
    whatsapp: '+32 485 60 06 35',
    email: 'FatimZahra@talentivegroup.be',
    languages: ['English', 'French'],
  },
  {
    key: 'consultant',
    name: 'Ahrar Yousafzai',
    image: ahrarPhoto,
    phone: '+32 472 17 30 90',
    whatsapp: '+32 472 17 30 90',
    email: 'Ahrar@talentivegroup.be',
    languages: ['English', 'Dutch'],
  },
];

interface ChooseUsCard {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
}
const chooseUsCards: ChooseUsCard[] = [
  { icon: <ShieldIcon />, titleKey: 'about.chooseUs.cards.trustworthy.title', descKey: 'about.chooseUs.cards.trustworthy.description' },
  { icon: <HeartIcon />, titleKey: 'about.chooseUs.cards.responsive.title', descKey: 'about.chooseUs.cards.responsive.description' },
  { icon: <UsersIcon />, titleKey: 'about.chooseUs.cards.quality.title', descKey: 'about.chooseUs.cards.quality.description' },
  { icon: <StarIcon />, titleKey: 'about.chooseUs.cards.longterm.title', descKey: 'about.chooseUs.cards.longterm.description' },
];

interface Benefit {
  icon: ReactNode;
  textKey: string;
}
const benefits: Benefit[] = [
  { icon: <ExpertiseIcon />, textKey: 'about.benefits.expertise' },
  { icon: <PlacementsIcon />, textKey: 'about.benefits.placements' },
  { icon: <TailoredIcon />, textKey: 'about.benefits.tailored' },
  { icon: <ResultsIcon />, textKey: 'about.benefits.results' },
];

interface BottomFeature {
  icon: ReactNode;
  textKey: string;
}
const bottomFeatures: BottomFeature[] = [
  { icon: <GlobeIcon />, textKey: 'about.bottom.features.global' },
  { icon: <BriefcaseIcon />, textKey: 'about.bottom.features.industry' },
  { icon: <ChatIcon />, textKey: 'about.bottom.features.communication' },
  { icon: <TargetIcon />, textKey: 'about.bottom.features.clientFocused' },
];

/* ─── Page ─── */

export default function About() {
  const { t, language } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Over Ons | Talentive',
      fr: 'À Propos | Talentive',
      en: 'About Us | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  const closeMember = useCallback(() => setSelectedIndex(null), []);
  const goPrev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i === null ? null : (i - 1 + teamMembers.length) % teamMembers.length,
      ),
    [],
  );
  const goNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i + 1) % teamMembers.length)),
    [],
  );

  const selectedMember = selectedIndex !== null ? teamMembers[selectedIndex] : null;

  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════════
          HERO — dark navy + team image on the right
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80&auto=format&fit=crop"
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
                  {t('about.heroEyebrow')}
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('about.heroTitleLead')}
                <br />
                <span className="text-gradient">{t('about.heroTitleAccent')}</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                {t('about.heroSubtitle')}
              </p>
            </AnimatedSection>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY TALENTIVE — text left + image with benefits overlay right
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                    {t('about.whyEyebrow')}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                  {t('about.whyTitle')}
                </h2>
                <p className="mt-2 text-lg font-medium text-purple-600">
                  {t('about.whySubtitle')}
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="mt-6 text-gray-600 leading-relaxed">{t('about.description')}</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={150}>
                <p className="mt-4 text-gray-600 leading-relaxed">{t('about.mission')}</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <button
                  type="button"
                  className="btn-hover mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-purple-200 bg-white px-5 py-3 text-sm font-bold text-primary-800 shadow-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md"
                  onClick={() =>
                    document
                      .getElementById('team')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {t('about.learnMoreCta')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </AnimatedSection>
            </div>

            {/* Image with overlay benefits panel */}
            <AnimatedSection animation="slide-left" delay={150}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-500/10 via-purple-500/10 to-primary-800/10 blur-sm" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/15">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-950/60 via-primary-950/20 to-transparent" />
                </div>

                {/* Benefits glass panel */}
                <div className="absolute bottom-5 right-5 w-[calc(100%-2.5rem)] max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-primary-900/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:bottom-7 sm:right-7 sm:p-6">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent-500 via-purple-500 to-accent-500" />
                  <ul className="space-y-3.5">
                    {benefits.map((b) => (
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US — 4 small cards
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
              {t('about.chooseUs.title')}
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chooseUsCards.map((card, index) => (
              <AnimatedSection
                key={card.titleKey}
                animation="fade-up"
                delay={100 + index * 100}
                className="h-full"
              >
                <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-md shadow-purple-600/25">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-primary-800">{t(card.titleKey)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{t(card.descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MEET THE TEAM — 5 detailed cards with contacts
          ═══════════════════════════════════════════════════════ */}
      <section id="team" className="bg-gray-50 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                    {t('about.team.eyebrow')}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                  {t('about.team.titleLead')}{' '}
                  <span className="text-gradient">{t('about.team.titleAccent')}</span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                  {t('about.team.subtitle')}
                </p>
              </div>
              {/* View all button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(0)}
                className="btn-hover inline-flex shrink-0 items-center gap-2 rounded-xl border-2 border-purple-200 bg-white px-5 py-3 text-sm font-bold text-primary-800 shadow-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {t('about.team.viewAll')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </AnimatedSection>

          {/* Team cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.key}
                animation="fade-up"
                delay={100 + index * 90}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border-t-2 border-purple-200 bg-white text-left shadow-md shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/15"
                >
                  {/* Photo with Available badge */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-primary-800 shadow-sm backdrop-blur-sm">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                      </span>
                      {t('about.team.available')}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-600">
                      {t(`about.team.members.${member.key}.role`)}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-primary-800">{member.name}</h3>

                    {/* Contact rows */}
                    <ul className="mt-3 space-y-1.5 text-[12px] text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-500">
                          <PhoneIconSmall />
                        </span>
                        {member.phone}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">
                          <WhatsAppIconSmall />
                        </span>
                        {member.whatsapp}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-500">
                          <EmailIconSmall />
                        </span>
                        <span className="truncate">{member.email}</span>
                      </li>
                    </ul>

                    {/* Languages */}
                    <div className="mt-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                        {t('about.team.languages')}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {member.languages.map((lang) => (
                          <span
                            key={lang}
                            className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {/* ─── Bottom feature bar ─── */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-10 rounded-2xl bg-purple-50/70 px-6 py-5 sm:px-8">
              <div className="grid items-center gap-5 sm:grid-cols-5 sm:gap-6">
                {/* Title */}
                <div className="flex items-center gap-3 sm:col-span-1">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600 to-purple-600 text-white shadow-md shadow-purple-600/30">
                    <UsersIcon />
                  </div>
                  <p className="text-sm font-bold leading-tight text-purple-700 sm:text-[15px]">
                    {t('about.bottom.title')}
                  </p>
                </div>
                {/* 4 mini features */}
                {bottomFeatures.map((feature) => (
                  <div key={feature.textKey} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-purple-600 shadow-sm ring-1 ring-purple-100">
                      {feature.icon}
                    </span>
                    <span className="text-xs font-semibold leading-tight text-gray-700 sm:text-sm">
                      {t(feature.textKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal
          isOpen={selectedMember !== null}
          onClose={closeMember}
          name={selectedMember.name}
          role={t(`about.team.members.${selectedMember.key}.role`)}
          bio={t(`about.team.members.${selectedMember.key}.bio`)}
          image={selectedMember.image}
          phone={selectedMember.phone}
          whatsapp={selectedMember.whatsapp}
          email={selectedMember.email}
          languages={selectedMember.languages}
          onPrev={teamMembers.length > 1 ? goPrev : undefined}
          onNext={teamMembers.length > 1 ? goNext : undefined}
        />
      )}
    </Layout>
  );
}

import { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import AnimatedSection from '../components/ui/AnimatedSection';
import TeamMemberModal from '../components/ui/TeamMemberModal';
import aizazPhoto from '../assets/images/aizaz.png';
import fatimaPhoto from '../assets/images/fatima.png';
import ahrarPhoto from '../assets/images/ahrar.png';

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

interface TeamMember {
  key: 'founder' | 'partner' | 'consultant';
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    key: 'founder',
    name: 'Aizaz Khan',
    image: aizazPhoto,
  },
  {
    key: 'partner',
    name: 'Fatima Zzahra El Maite',
    image: fatimaPhoto,
  },
  {
    key: 'consultant',
    name: 'Ahrar Yousafzai',
    image: ahrarPhoto,
  },
];

export default function About() {
  const { t, language } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedMember = selectedIndex !== null ? teamMembers[selectedIndex] : null;
  const goPrev = () =>
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + teamMembers.length) % teamMembers.length,
    );
  const goNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % teamMembers.length));

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Over Ons | Talentive',
      fr: 'À Propos | Talentive',
      en: 'About Us | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  const values = [
    { icon: <TrustIcon />, titleKey: 'about.values.trust.title', descKey: 'about.values.trust.description' },
    { icon: <ProximityIcon />, titleKey: 'about.values.proximity.title', descKey: 'about.values.proximity.description' },
    { icon: <EfficiencyIcon />, titleKey: 'about.values.efficiency.title', descKey: 'about.values.efficiency.description' },
  ];

  return (
    <Layout>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-primary-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div className="hero-mesh absolute inset-0" />
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.04]" />
          <div className="float-reverse absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent-500/[0.06] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="accent-line mb-6" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('about.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About content */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <AnimatedSection animation="fade-up" className="text-center">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
              {t('about.values.title')}
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <AnimatedSection animation="fade-up">
                <p className="text-gray-600 leading-relaxed">{t('about.description')}</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="mt-4 text-gray-600 leading-relaxed">{t('about.mission')}</p>
              </AnimatedSection>
            </div>

            {/* Values */}
            <div className="space-y-5">
              {values.map((value, index) => (
                <AnimatedSection key={value.titleKey} animation="slide-left" delay={200 + index * 120}>
                  <div className="card-premium group flex gap-5 rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 transition-all duration-300 group-hover:bg-accent-200 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-800">{t(value.titleKey)}</h4>
                      <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{t(value.descKey)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* ── Meet the Team ── */}
          <div className="mt-24 sm:mt-32">
            <AnimatedSection animation="fade-up" className="text-center">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl lg:text-5xl">
                {t('about.team.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                {t('about.team.subtitle')}
              </p>
            </AnimatedSection>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
              {teamMembers.map((member, index) => (
                <AnimatedSection
                  key={member.key}
                  animation="fade-up"
                  delay={150 + index * 150}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative w-full overflow-hidden rounded-3xl bg-gray-50/50 text-left shadow-lg shadow-gray-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1.5"
                  >
                    {/* Photo */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Bottom gradient for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/20 to-transparent" />

                      {/* Read more pill (top-right) */}
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary-800 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
                        {t('about.team.readMore')}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>

                      {/* Name + role overlay (bottom) */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
                          {t(`about.team.members.${member.key}.role`)}
                        </p>
                        <h3 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">
                          {member.name}
                        </h3>
                        <div className="mt-3 h-0.5 w-10 rounded-full bg-accent-400 transition-all duration-500 group-hover:w-20" />
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedMember && (
        <TeamMemberModal
          isOpen={selectedMember !== null}
          onClose={() => setSelectedIndex(null)}
          name={selectedMember.name}
          role={t(`about.team.members.${selectedMember.key}.role`)}
          bio={t(`about.team.members.${selectedMember.key}.bio`)}
          image={selectedMember.image}
          onPrev={teamMembers.length > 1 ? goPrev : undefined}
          onNext={teamMembers.length > 1 ? goNext : undefined}
        />
      )}
    </Layout>
  );
}

import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { PHONE_NUMBER, INFO_EMAIL } from '../constants';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';

/* ── Validation messages ── */
const v = {
  required: { fr: 'Ce champ est obligatoire', nl: 'Dit veld is verplicht', en: 'This field is required' },
  invalidEmail: { fr: 'Veuillez entrer une adresse email valide', nl: 'Voer een geldig e-mailadres in', en: 'Please enter a valid email address' },
  tooShort: { fr: 'Ce champ est trop court (minimum 2 caractères)', nl: 'Dit veld is te kort (minimaal 2 tekens)', en: 'This field is too short (minimum 2 characters)' },
  messageTooShort: { fr: 'Votre message est trop court (minimum 10 caractères)', nl: 'Uw bericht is te kort (minimaal 10 tekens)', en: 'Your message is too short (minimum 10 characters)' },
} as const;

/* ── Icon components ── */
function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EmailFieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SubjectIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="14" y2="15" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactForm() {
  const { t, language } = useTranslation();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validate = (values: typeof form): FieldErrors => {
    const errs: FieldErrors = {};
    if (!values.name.trim()) errs.name = v.required[language];
    else if (values.name.trim().length < 2) errs.name = v.tooShort[language];

    if (!values.email.trim()) errs.email = v.required[language];
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = v.invalidEmail[language];

    if (!values.subject.trim()) errs.subject = v.required[language];
    else if (values.subject.trim().length < 2) errs.subject = v.tooShort[language];

    if (!values.message.trim()) errs.message = v.required[language];
    else if (values.message.trim().length < 10) errs.message = v.messageTooShort[language];

    return errs;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    // After a failed submit, re-validate live so errors clear as the user fixes them
    if (submitted) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allErrors = validate(form);
    setErrors(allErrors);
    setSubmitted(true);

    if (Object.keys(allErrors).length > 0) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  const inputBase =
    'w-full rounded-xl border bg-white/[0.06] pl-12 pr-5 py-3.5 text-white caret-white placeholder:text-white/30 transition-all duration-300 focus:bg-white/[0.1] focus:ring-2 focus:outline-none';
  const inputOk = 'border-white/10 focus:border-accent-400/50 focus:ring-accent-400/20';
  const inputErr = 'border-red-400/50 focus:border-red-400/50 focus:ring-red-400/20';

  if (sent) {
    return (
      <AnimatedSection animation="scale-in">
        <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-10 text-center backdrop-blur-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="mt-6 text-lg font-semibold text-green-300">{t('contactForm.success')}</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-white/60">{t('contactForm.name')}</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
              <PersonIcon />
            </span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
              placeholder={t('contactForm.placeholders.name')}
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-white/60">{t('contactForm.email')}</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
              <EmailFieldIcon />
            </span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
              placeholder={t('contactForm.placeholders.email')}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-white/60">{t('contactForm.subject')}</label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
            <SubjectIcon />
          </span>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            className={`${inputBase} ${errors.subject ? inputErr : inputOk}`}
            placeholder={t('contactForm.placeholders.subject')}
          />
        </div>
        {errors.subject && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-white/60">{t('contactForm.message')}</label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-4 text-white/30">
            <MessageIcon />
          </span>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className={`${inputBase} resize-none !pl-12 ${errors.message ? inputErr : inputOk}`}
            placeholder={t('contactForm.placeholders.message')}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-3">
        <Button type="submit" variant="primary" size="lg" disabled={sending} className="w-full sm:w-auto">
          {sending ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t('contactForm.sending')}
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {t('contactForm.submit')}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

export default function Contact() {
  const { t, language } = useTranslation();

  useEffect(() => {
    const titles: Record<string, string> = {
      nl: 'Contact | Talentive',
      fr: 'Contact | Talentive',
      en: 'Contact | Talentive',
    };
    document.title = titles[language] ?? titles.nl!;
  }, [language]);

  const contactItems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: t('contact.phone'),
      value: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
      color: 'from-accent-500/20 to-purple-500/20',
      iconBg: 'bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-lg shadow-purple-600/30',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: t('contact.email'),
      value: INFO_EMAIL,
      href: `mailto:${INFO_EMAIL}`,
      color: 'from-accent-500/20 to-purple-500/20',
      iconBg: 'bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-lg shadow-purple-600/30',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: t('contact.address'),
      value: t('contact.addressValue'),
      href: undefined,
      color: 'from-accent-500/20 to-purple-500/20',
      iconBg: 'bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 text-white shadow-lg shadow-purple-600/30',
    },
  ];

  return (
    <Layout>
      {/* ═══ IMMERSIVE DARK HERO + CONTENT SECTION ═══ */}
      <section className="relative min-h-screen overflow-hidden bg-primary-950">
        {/* Background: image + mesh overlay (slow fade-in + Ken Burns drift) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="contact-bg-animate h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 hero-mesh" />

        {/* Floating shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute -right-32 top-20 h-[500px] w-[500px] rounded-full border border-white/[0.03]" />
          <div className="float-reverse absolute -left-20 bottom-40 h-[350px] w-[350px] rounded-full bg-accent-500/[0.04]" />
          <div className="pulse-soft absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-accent-400/30" />
          <div className="spin-slow absolute right-[40%] bottom-[20%] h-[180px] w-[180px] rounded-full border border-white/[0.02]" />
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        {/* Content */}
        <div className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero header */}
            <AnimatedSection animation="fade-up" className="max-w-2xl">
              <div className="accent-line mb-6" />
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('contact.title')}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/45">
                {t('contact.subtitle')}
              </p>
            </AnimatedSection>

            {/* ── Contact cards | glass style on dark ── */}
            <div className="mt-16 grid gap-5 sm:grid-cols-3">
              {contactItems.map((item, index) => (
                <AnimatedSection key={item.label} animation="fade-up" delay={150 + index * 100}>
                  {item.href ? (
                    <a href={item.href} className="group block">
                      <div className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.color} p-7 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}>
                        {/* Glow on hover */}
                        <div className="absolute inset-0 bg-white/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative">
                          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                            {item.icon}
                          </div>
                          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                            {item.label}
                          </p>
                          <p className="mt-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent-300">
                            {item.value}
                          </p>
                          {/* Arrow */}
                          <svg className="absolute top-6 right-0 h-5 w-5 text-white/20 transition-all duration-300 group-hover:text-white/50 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.color} p-7 backdrop-blur-md`}>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>

            {/* ── Contact form | dark glass ── */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-20 grid gap-12 lg:grid-cols-5 lg:items-start">
                {/* Left: text + map placeholder */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {t('contact.cta')}
                  </h2>
                  <p className="mt-4 leading-relaxed text-white/40">
                    {t('contact.ctaDescription')}
                  </p>

                  {/* Decorative availability badge */}
                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                    </span>
                    <span className="text-sm font-medium text-white/60">
                      {language === 'fr' ? 'Disponible maintenant' : language === 'nl' ? 'Nu beschikbaar' : 'Available now'}
                    </span>
                  </div>

                  {/* Quick links */}
                  <div className="mt-10 space-y-4">
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                      className="group flex items-center gap-4 rounded-xl p-3 -ml-3 transition-all duration-300 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-white/50 transition-colors duration-300 group-hover:text-accent-400">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/80 group-hover:text-white">{PHONE_NUMBER}</p>
                        <p className="text-xs text-white/30">{language === 'fr' ? 'Lun - Ven, 9h - 18h' : language === 'nl' ? 'Ma - Vr, 9u - 18u' : 'Mon - Fri, 9am - 6pm'}</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${INFO_EMAIL}`}
                      className="group flex items-center gap-4 rounded-xl p-3 -ml-3 transition-all duration-300 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-white/50 transition-colors duration-300 group-hover:text-accent-400">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/80 group-hover:text-white">{INFO_EMAIL}</p>
                        <p className="text-xs text-white/30">{language === 'fr' ? 'Réponse sous 24h' : language === 'nl' ? 'Antwoord binnen 24u' : 'Reply within 24h'}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right: form */}
                <div className="lg:col-span-3">
                  <div className="rounded-3xl border border-white/[0.08] bg-primary-900/60 p-6 sm:p-10">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{t('contactForm.title')}</h3>
                    <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-accent-400" />
                    <div className="mt-8">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Bottom CTA ── */}
            <AnimatedSection animation="scale-in" delay={500}>
              <div className="relative mt-24 overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-r from-accent-600/20 via-accent-500/10 to-purple-600/20 px-8 py-14 text-center backdrop-blur-md sm:px-16 sm:py-20">
                <div className="pointer-events-none absolute inset-0">
                  <div className="float-slow absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.04]" />
                  <div className="float-reverse absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/[0.06]" />
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400/70">
                    {language === 'fr' ? 'Prêt à commencer ?' : language === 'nl' ? 'Klaar om te beginnen?' : 'Ready to get started?'}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {t('hero.ctaEmployee')}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-white/40 leading-relaxed">
                    {t('contact.ctaDescription')}
                  </p>
                  <div className="mt-10">
                    <Link to="/find-employee">
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
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

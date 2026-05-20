import { useEffect, useState, type ReactNode, type FormEvent } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';

/* ── Validation messages (inline, locale-aware) ── */
const v = {
  required: { fr: 'Ce champ est obligatoire', nl: 'Dit veld is verplicht', en: 'This field is required' },
  invalidEmail: { fr: 'Veuillez entrer une adresse email valide', nl: 'Voer een geldig e-mailadres in', en: 'Please enter a valid email address' },
  tooShort: { fr: 'Ce champ est trop court (minimum 2 caractères)', nl: 'Dit veld is te kort (minimaal 2 tekens)', en: 'This field is too short (minimum 2 characters)' },
  messageTooShort: { fr: 'Votre message est trop court (minimum 10 caractères)', nl: 'Uw bericht is te kort (minimaal 10 tekens)', en: 'Your message is too short (minimum 10 characters)' },
} as const;

/* ── Input icons ── */
function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EmailFieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SubjectIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="14" y2="15" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* ── Why Talentive benefits icons ── */
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

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
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

/* ── Light-themed contact form ── */
function ContactForm() {
  const { t, language } = useTranslation();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

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
    if (submitted) setErrors(validate(next));
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
    'w-full rounded-xl border bg-white pl-11 pr-4 py-3.5 text-sm text-primary-800 placeholder:text-gray-400 transition-all duration-200 focus:bg-white focus:ring-2 focus:outline-none';
  const inputOk = 'border-gray-200 hover:border-gray-300 focus:border-accent-400 focus:ring-accent-400/20';
  const inputErr = 'border-red-300 focus:border-red-400 focus:ring-red-400/15';

  const errorLine = (msg: string) => (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {msg}
    </p>
  );

  if (sent) {
    return (
      <AnimatedSection animation="scale-in">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="mt-5 text-base font-semibold text-green-800">{t('contactForm.success')}</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-800">
            {t('contactForm.name')} <span className="text-purple-500">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
          {errors.name && errorLine(errors.name)}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-800">
            {t('contactForm.email')} <span className="text-purple-500">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
          {errors.email && errorLine(errors.email)}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-primary-800">
          {t('contactForm.subject')} <span className="text-purple-500">*</span>
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
        {errors.subject && errorLine(errors.subject)}
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-primary-800">
          {t('contactForm.message')} <span className="text-purple-500">*</span>
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-4 text-gray-400">
            <MessageIcon />
          </span>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className={`${inputBase} resize-none !pl-11 ${errors.message ? inputErr : inputOk}`}
            placeholder={t('contactForm.placeholders.message')}
          />
        </div>
        {errors.message && errorLine(errors.message)}
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" disabled={sending} className="w-full">
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
        <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {language === 'fr'
            ? 'Vos informations restent confidentielles.'
            : language === 'nl'
              ? 'Uw informatie blijft vertrouwelijk.'
              : 'Your information stays confidential.'}
        </p>
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

  // Split the contact title to apply a gradient on the last word
  // ("Contactez-nous" / "Contacteer ons" / "Contact us")
  const fullTitle = t('contact.title');
  const lastSpace = fullTitle.lastIndexOf(' ');
  const titleLead = lastSpace > 0 ? fullTitle.slice(0, lastSpace) : '';
  const titleAccent = lastSpace > 0 ? fullTitle.slice(lastSpace + 1) : fullTitle;

  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════════
          HERO — dark navy with image on the right
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-primary-950">
        {/* Background image */}
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

        {/* Mesh + decorative shapes */}
        <div className="hero-mesh absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="float-slow absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[0.04]" />
          <div className="float-reverse absolute -left-16 -bottom-16 h-[280px] w-[280px] rounded-full bg-accent-500/[0.04]" />
          <div className="pulse-soft absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-accent-400/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pt-40 lg:pb-32">
          <div className="max-w-2xl lg:max-w-xl">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-400 to-purple-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
                  {t('contact.getInTouch')}
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {titleLead && (
                  <>
                    {titleLead}
                    <br />
                  </>
                )}
                <span className="text-gradient">{titleAccent}</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                {t('contact.subtitle')}
              </p>
            </AnimatedSection>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BODY — form on the left + Why Talentive panel on the right
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:-mt-24 lg:grid-cols-12 lg:items-start lg:gap-10">
            {/* LEFT: form card */}
            <AnimatedSection animation="fade-up" className="lg:col-span-8">
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-300/30 sm:p-8 lg:p-10">
                <h2 className="text-xl font-bold text-primary-800 sm:text-2xl">
                  {t('contactForm.title')}
                </h2>
                <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT: Why Talentive panel */}
            <AnimatedSection animation="fade-up" delay={150} className="lg:col-span-4">
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-300/30 sm:p-8 lg:sticky lg:top-28">
                <h2 className="text-xl font-bold tracking-tight text-primary-800 sm:text-2xl">
                  {t('findEmployee.whyTitle')}
                </h2>
                <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />

                <ul className="mt-7 space-y-6">
                  {benefits.map((b) => (
                    <li key={b.titleKey} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-50 to-purple-50 text-purple-600 ring-1 ring-purple-100">
                        {b.icon}
                      </div>
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

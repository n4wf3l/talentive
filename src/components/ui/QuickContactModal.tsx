import { useEffect, useState, useCallback, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { CONTACT_EMAIL } from '../../constants';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const close = useCallback(() => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setFocused(null);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, close]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Contact rapide de ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 800);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-950/85 backdrop-blur-xl animate-fade-in-overlay"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg animate-scale-in-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={t('quickContact.title')}
      >
        <div className="quick-contact-modal overflow-hidden rounded-t-3xl sm:rounded-3xl border border-white/[0.08] bg-primary-800/95 shadow-2xl shadow-black/40 backdrop-blur-xl">

          {/* Decorative top gradient bar */}
          <div className="quick-contact-gradient-bar h-1 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600" />

          {/* Header */}
          <div className="relative px-6 pt-6 pb-5 sm:px-8 sm:pt-7">
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 rounded-xl p-2 text-white/40 transition-all duration-300 hover:bg-white/10 hover:text-white hover:rotate-90 sm:top-6 sm:right-6"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Icon + title */}
            <div className="flex items-center gap-4">
              <div className="quick-contact-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-400 border border-accent-500/15">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{t('quickContact.title')}</h2>
                <p className="mt-0.5 text-sm text-white/40">{t('quickContact.subtitle')}</p>
              </div>
            </div>

            <div className="mt-5 h-px bg-gradient-to-r from-accent-500/30 via-white/[0.06] to-transparent" />
          </div>

          {/* Body */}
          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            {sent ? (
              <div className="quick-contact-success py-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 border border-green-500/20">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="quick-contact-check">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="mt-5 text-lg font-semibold text-green-300">{t('quickContact.success')}</p>
                <button
                  onClick={close}
                  className="mt-6 rounded-xl bg-white/10 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
                >
                  OK
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-2 space-y-4">
                {/* Name field */}
                <div className="quick-contact-field quick-contact-field-0">
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-white/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${focused === 'name' ? 'text-accent-400' : 'text-white/30'}`}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {t('quickContact.name')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="quick-contact-input w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-4 py-3.5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-accent-400/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-400/15 focus:outline-none"
                      placeholder={t('quickContact.placeholders.name')}
                    />
                    <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'name' ? 'text-accent-400' : 'text-white/20'}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Email field */}
                <div className="quick-contact-field quick-contact-field-1">
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-white/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${focused === 'email' ? 'text-accent-400' : 'text-white/30'}`}>
                      <circle cx="12" cy="12" r="4" />
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                    </svg>
                    {t('quickContact.email')}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="quick-contact-input w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-4 py-3.5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-accent-400/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-400/15 focus:outline-none"
                      placeholder={t('quickContact.placeholders.email')}
                    />
                    <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === 'email' ? 'text-accent-400' : 'text-white/20'}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div className="quick-contact-field quick-contact-field-2">
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-white/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${focused === 'message' ? 'text-accent-400' : 'text-white/30'}`}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {t('quickContact.message')}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={3}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="quick-contact-input w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-4 py-3.5 text-white placeholder:text-white/25 transition-all duration-300 focus:border-accent-400/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-400/15 focus:outline-none resize-none"
                      placeholder={t('quickContact.placeholders.message')}
                    />
                    <div className={`absolute left-3.5 top-4 transition-colors duration-300 ${focused === 'message' ? 'text-accent-400' : 'text-white/20'}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="quick-contact-field quick-contact-field-3 btn-hover group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent-600/35 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {sending ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t('quickContact.sending')}
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      {t('quickContact.send')}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

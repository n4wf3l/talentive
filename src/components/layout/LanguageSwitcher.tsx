import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation, type Language } from '../../i18n/LanguageContext';
import Toast from '../ui/Toast';

const languages: { code: Language; label: string; name: string }[] = [
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
];

const langToastMessages: Record<Language, string> = {
  nl: 'Taal gewijzigd naar Nederlands',
  fr: 'Langue changée en Français',
  en: 'Language changed to English',
};

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export default function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string } | null>(null);

  const close = useCallback(() => setIsOpen(false), []);

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

  const handleSelect = (code: Language) => {
    if (code !== language) {
      setLanguage(code);
      setToast({ message: langToastMessages[code] });
    }
    close();
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
          variant === 'light'
            ? 'text-gray-600 hover:bg-gray-100 hover:text-primary-800'
            : 'text-gray-300 hover:bg-white/10 hover:text-white'
        }`}
        aria-label="Change language"
        aria-haspopup="dialog"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {language.toUpperCase()}
        <svg
          className="h-3 w-3 opacity-50"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>

      {/* Full-page overlay, rendered via Portal to escape header stacking context */}
      {toast &&
        createPortal(
          <Toast
            message={toast.message}
            type="success"
            duration={2500}
            onClose={() => setToast(null)}
          />,
          document.body,
        )}

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-primary-900/80 backdrop-blur-md animate-fade-in-overlay"
              onClick={close}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-md px-6 animate-scale-in-overlay">
              {/* Close button */}
              <button
                onClick={close}
                className="absolute -top-16 right-6 rounded-full p-2 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white hover:rotate-90"
                aria-label="Close"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Title */}
              <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/50 animate-lang-title">
                Language
              </p>

              {/* Language options */}
              <div className="flex flex-col gap-4">
                {languages.map(({ code, label, name }, index) => {
                  const isActive = language === code;
                  return (
                    <button
                      key={code}
                      onClick={() => handleSelect(code)}
                      className={`animate-lang-item-${index} group relative flex items-center justify-between rounded-2xl border px-6 py-5 transition-all duration-300 ${
                        isActive
                          ? 'border-accent-500/40 bg-gradient-to-r from-accent-600/15 via-accent-500/10 to-transparent text-white lang-glow-active'
                          : 'border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/10 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`relative flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold tracking-wider transition-all duration-300 ${
                            isActive
                              ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/30'
                              : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110'
                          }`}
                        >
                          {label}
                        </span>
                        <div className="flex flex-col items-start gap-1">
                          <span className="text-lg font-medium">{name}</span>
                          {/* Animated underline on hover */}
                          <span
                            className={`h-0.5 rounded-full transition-all duration-500 origin-left ${
                              isActive
                                ? 'w-full bg-accent-500/50'
                                : 'w-0 bg-white/30 group-hover:w-full'
                            }`}
                          />
                        </div>
                      </div>
                      {/* Active indicator */}
                      <div
                        className={`flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/20">
                          <svg
                            className="h-4 w-4 text-accent-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      {/* Left accent bar for active item */}
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300 ${
                          isActive ? 'bg-accent-500 opacity-100' : 'bg-transparent opacity-0'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

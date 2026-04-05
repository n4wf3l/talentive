import { useState, useEffect, useCallback } from 'react';
import { useTranslation, type Language } from '../../i18n/LanguageContext';

const languages: { code: Language; label: string; name: string }[] = [
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'fr', label: 'FR', name: 'Francais' },
  { code: 'en', label: 'EN', name: 'English' },
];

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export default function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
    setLanguage(code);
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

      {/* Full-page overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-primary-900/70 backdrop-blur-md animate-fade-in-overlay"
            onClick={close}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-md px-6 animate-scale-in-overlay">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-16 right-6 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
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
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Language
            </p>

            {/* Language options */}
            <div className="flex flex-col gap-3">
              {languages.map(({ code, label, name }) => {
                const isActive = language === code;
                return (
                  <button
                    key={code}
                    onClick={() => handleSelect(code)}
                    className={`group flex items-center justify-between rounded-2xl border px-6 py-5 transition-all duration-200 ${
                      isActive
                        ? 'border-accent-500/40 bg-white/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold tracking-wider transition-colors ${
                          isActive
                            ? 'bg-accent-600 text-white'
                            : 'bg-white/10 text-white/60 group-hover:bg-white/15 group-hover:text-white/80'
                        }`}
                      >
                        {label}
                      </span>
                      <span className="text-lg font-medium">{name}</span>
                    </div>
                    {isActive && (
                      <svg
                        className="h-5 w-5 text-accent-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

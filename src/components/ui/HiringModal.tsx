import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import JobSeekerForm from '../forms/JobSeekerForm';

interface HiringModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HiringModal({ isOpen, onClose }: HiringModalProps) {
  const { t } = useTranslation();

  const close = useCallback(() => {
    onClose();
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
        className="relative z-10 w-full max-w-2xl animate-scale-in-overlay max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label={t('form.title')}
      >
        <div className="overflow-hidden rounded-t-3xl sm:rounded-3xl border border-white/[0.08] bg-white shadow-2xl shadow-black/40 flex flex-col max-h-[92vh]">

          {/* Decorative top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600 shrink-0" />

          {/* Header */}
          <div className="relative px-6 pt-6 pb-4 sm:px-8 sm:pt-7 shrink-0 border-b border-gray-100">
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 rounded-xl p-2 text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-700 hover:rotate-90 sm:top-6 sm:right-6"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Icon + title */}
            <div className="flex items-center gap-4 pr-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500/15 to-accent-600/5 text-accent-600 border border-accent-500/20 shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-primary-800 sm:text-xl">{t('form.title')}</h2>
                <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">{t('form.subtitle')}</p>
              </div>
            </div>
          </div>

          {/* Body (scrollable) */}
          <div className="scrollbar-light overflow-y-auto px-6 py-5 sm:px-8 sm:py-6 flex-1">
            <JobSeekerForm />
          </div>

          {/* Footer with full-page link */}
          <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-3 sm:px-8 shrink-0">
            <Link
              to="/find-employee"
              onClick={close}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800 transition-colors hover:text-accent-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              {t('form.viewFullPage')}
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

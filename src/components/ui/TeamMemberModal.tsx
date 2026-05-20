import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  bio: string;
  image: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  languages?: string[];
  onPrev?: () => void;
  onNext?: () => void;
}

export default function TeamMemberModal({
  isOpen,
  onClose,
  name,
  role,
  bio,
  image,
  phone,
  whatsapp,
  email,
  languages,
  onPrev,
  onNext,
}: TeamMemberModalProps) {
  const close = useCallback(() => onClose(), [onClose]);
  const [direction, setDirection] = useState<'prev' | 'next' | null>(null);

  const handlePrev = useCallback(() => {
    if (!onPrev) return;
    setDirection('prev');
    onPrev();
  }, [onPrev]);

  const handleNext = useCallback(() => {
    if (!onNext) return;
    setDirection('next');
    onNext();
  }, [onNext]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, close, handlePrev, handleNext]);

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
        className="relative z-10 w-full max-w-3xl animate-scale-in-overlay max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label={name}
      >
        {/* Prev arrow (outside card on desktop, overlay on mobile) */}
        {onPrev && (
          <button
            onClick={handlePrev}
            aria-label="Previous member"
            className="group absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-primary-800 shadow-lg transition-all duration-300 hover:bg-accent-500 hover:text-white hover:scale-110 sm:left-[-3.5rem] sm:p-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {onNext && (
          <button
            onClick={handleNext}
            aria-label="Next member"
            className="group absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-primary-800 shadow-lg transition-all duration-300 hover:bg-accent-500 hover:text-white hover:scale-110 sm:right-[-3.5rem] sm:p-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        <div className="overflow-hidden rounded-t-3xl sm:rounded-3xl border border-white/[0.08] bg-white shadow-2xl shadow-black/40 flex flex-col max-h-[92vh]">

          {/* Decorative top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600 shrink-0" />

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-30 rounded-xl bg-white/90 p-2 text-gray-500 shadow-md transition-all duration-300 hover:bg-white hover:text-gray-800 hover:rotate-90 sm:top-5 sm:right-5"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image + content */}
          <div className="scrollbar-light overflow-y-auto flex-1">
            <div
              key={name}
              className={`grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] ${
                direction === 'prev'
                  ? 'animate-team-slide-left'
                  : direction === 'next'
                    ? 'animate-team-slide-right'
                    : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-auto sm:min-h-[420px]">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-white/10" />
              </div>

              {/* Content */}
              <div className="px-6 py-6 sm:px-9 sm:py-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                  {role}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-primary-800 sm:text-3xl">
                  {name}
                </h2>
                <div className="mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-400" />
                <p className="mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-base">
                  {bio}
                </p>

                {/* Contact rows */}
                {(phone || whatsapp || email) && (
                  <ul className="mt-6 space-y-2.5">
                    {phone && (
                      <li>
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-purple-600"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 ring-1 ring-purple-100 transition-colors group-hover:bg-purple-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </span>
                          <span className="font-semibold">{phone}</span>
                        </a>
                      </li>
                    )}
                    {whatsapp && (
                      <li>
                        <a
                          href={`https://wa.me/${whatsapp.replace(/[^\d]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-green-600"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 ring-1 ring-green-100 transition-colors group-hover:bg-green-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.52 3.48A12 12 0 0 0 3.06 19.34L2 22l2.74-1A12 12 0 1 0 20.52 3.48zM12 21a8.94 8.94 0 0 1-4.6-1.27l-.33-.2-2.71.71.73-2.64-.21-.34A9 9 0 1 1 12 21zm4.93-6.74c-.27-.13-1.6-.79-1.84-.88s-.43-.13-.61.13-.7.88-.86 1.06-.32.2-.59.07a7.43 7.43 0 0 1-2.18-1.35 8.2 8.2 0 0 1-1.51-1.88c-.16-.27 0-.42.12-.55s.27-.32.4-.48a1.86 1.86 0 0 0 .27-.45.5.5 0 0 0 0-.47c-.07-.13-.61-1.47-.83-2s-.45-.46-.61-.47h-.52a1 1 0 0 0-.73.34A3 3 0 0 0 6.5 9.6a5.27 5.27 0 0 0 1.11 2.81 12.06 12.06 0 0 0 4.62 4.07c.65.28 1.16.45 1.55.58a3.75 3.75 0 0 0 1.72.11 2.81 2.81 0 0 0 1.83-1.29 2.27 2.27 0 0 0 .16-1.29c-.07-.11-.25-.18-.52-.31z" />
                            </svg>
                          </span>
                          <span className="font-semibold">{whatsapp}</span>
                        </a>
                      </li>
                    )}
                    {email && (
                      <li>
                        <a
                          href={`mailto:${email}`}
                          className="group flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-purple-600"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 ring-1 ring-purple-100 transition-colors group-hover:bg-purple-100">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="4" width="20" height="16" rx="2" />
                              <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                          </span>
                          <span className="break-all font-semibold">{email}</span>
                        </a>
                      </li>
                    )}
                  </ul>
                )}

                {/* Languages */}
                {languages && languages.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      Languages
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

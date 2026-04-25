import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  bio: string;
  image: string;
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

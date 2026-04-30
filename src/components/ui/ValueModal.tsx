import { useEffect, useCallback, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ValueModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon: ReactNode;
  title: string;
  description: string;
  details: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ValueModal({
  isOpen,
  onClose,
  icon,
  title,
  description,
  details,
  onPrev,
  onNext,
}: ValueModalProps) {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-950/85 backdrop-blur-md cursor-pointer animate-fade-in-overlay"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-2xl animate-scale-in-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute -top-12 right-0 z-20 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white sm:-top-14"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Prev arrow */}
        {onPrev && (
          <button
            onClick={handlePrev}
            aria-label="Previous"
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
            aria-label="Next"
            className="group absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-primary-800 shadow-lg transition-all duration-300 hover:bg-accent-500 hover:text-white hover:scale-110 sm:right-[-3.5rem] sm:p-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Card — mauve/blue gradient */}
        <div
          key={title}
          className={`overflow-hidden rounded-3xl shadow-2xl ${
            direction === 'prev'
              ? 'animate-team-slide-left'
              : direction === 'next'
                ? 'animate-team-slide-right'
                : ''
          }`}
        >
          {/* Header strip with gradient + icon */}
          <div className="relative overflow-hidden bg-gradient-to-br from-accent-600 via-accent-600 to-purple-600 px-8 pt-10 pb-12 sm:px-10">
            {/* Decorative shapes */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -left-12 -bottom-16 h-40 w-40 rounded-full bg-white/[0.06] blur-2xl" />

            <div className="relative flex items-start gap-5">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm ring-1 ring-white/20">
                {icon}
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Talentive
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="bg-white p-8 sm:p-10">
            <p className="text-base font-semibold text-primary-800 leading-relaxed sm:text-lg">
              {description}
            </p>
            <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-500 to-purple-500" />
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

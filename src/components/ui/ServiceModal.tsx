import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function ServiceModal({
  isOpen,
  onClose,
  icon,
  title,
  description,
  image,
}: ServiceModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-900/80 backdrop-blur-md animate-fade-in-overlay cursor-pointer"
        onClick={onClose}
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
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white sm:-top-14"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Image — larger in modal */}
          <div className="relative h-64 overflow-hidden sm:h-80">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Icon badge */}
            <div className="absolute bottom-6 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-accent-600 shadow-lg backdrop-blur-sm">
              {icon}
            </div>
          </div>

          {/* Content — more spacious */}
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-primary-800 sm:text-3xl">
              {title}
            </h2>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-400" />
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { FIND_JOB_URL } from '../../constants';
import QuickContactModal from '../ui/QuickContactModal';

export default function BottomBar() {
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.6;
    const handleScroll = () => setVisible(window.scrollY > threshold);
    handleScroll(); // check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-primary-900/95 backdrop-blur-lg transition-transform duration-400 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 font-display">
          {/* Left group: Find worker + Find job */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/find-employee"
              className="btn-hover inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-all hover:bg-accent-500 hover:shadow-xl sm:px-6 sm:py-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-[18px] sm:h-[18px]">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="truncate">{t('bottomBar.worker')}</span>
            </Link>

            <a
              href={FIND_JOB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 sm:px-6 sm:py-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-[18px] sm:h-[18px]">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span className="truncate">{t('bottomBar.job')}</span>
            </a>
          </div>

          {/* Separator */}
          <div className="mx-2 h-8 w-px bg-white/10 sm:mx-4" />

          {/* Right: Quick contact */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="btn-hover inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20 sm:px-6 sm:py-3"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent-400 sm:w-[18px] sm:h-[18px]">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="hidden sm:inline">{t('bottomBar.quickContact')}</span>
          </button>
        </div>
      </div>

      {/* Quick Contact Modal */}
      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

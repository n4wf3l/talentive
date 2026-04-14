import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '../../i18n/LanguageContext';

const STORAGE_KEY = 'talentive_onboarding_done';

interface Step {
  selector: string;
  titleKey: 'step1Title' | 'step2Title';
  descKey: 'step1Desc' | 'step2Desc';
}

const steps: Step[] = [
  { selector: '[data-onboarding="cta-employee"]', titleKey: 'step1Title', descKey: 'step1Desc' },
  { selector: '[data-onboarding="cta-job"]', titleKey: 'step2Title', descKey: 'step2Desc' },
];

export function shouldShowOnboarding(): boolean {
  return !localStorage.getItem(STORAGE_KEY);
}

export default function OnboardingOverlay({ onComplete }: { onComplete: () => void }) {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [cloneHtml, setCloneHtml] = useState('');
  const [phase, setPhase] = useState<'entering' | 'visible' | 'transitioning' | 'exiting'>('entering');
  const overlayRef = useRef<HTMLDivElement>(null);

  const measure = useCallback((stepIndex: number) => {
    const el = document.querySelector(steps[stepIndex]!.selector) as HTMLElement | null;
    if (el) {
      const r = el.getBoundingClientRect();
      setRect(r);
      // Clone the inner button/anchor to render above the overlay
      const inner = el.querySelector('a, button') as HTMLElement | null;
      if (inner) {
        setCloneHtml(inner.outerHTML);
      } else {
        setCloneHtml(el.outerHTML);
      }
    }
  }, []);

  // Scroll the target into view (centered) before measuring
  useEffect(() => {
    const el = document.querySelector(steps[current]!.selector) as HTMLElement | null;
    if (!el) return;

    // Check if tooltip + target fits in viewport; if not, scroll target up
    const rect = el.getBoundingClientRect();
    const tooltipHeight = 220; // approximate tooltip height including margins
    const neededSpaceBelow = rect.height + tooltipHeight + 60;
    const spaceBelow = window.innerHeight - rect.bottom;

    if (spaceBelow < tooltipHeight || rect.bottom + tooltipHeight > window.innerHeight) {
      // Scroll so the target sits in the upper third of the viewport
      const targetY = window.scrollY + rect.top - window.innerHeight / 3;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    } else if (rect.top < 80) {
      // Target too close to top — scroll it down a bit
      const targetY = window.scrollY + rect.top - 100;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    }

    // Silence the unused var warning
    void neededSpaceBelow;
  }, [current]);

  // Measure on mount + resize (after scroll settles)
  useEffect(() => {
    const timer = setTimeout(() => {
      measure(current);
      setPhase('visible');
    }, 500); // longer delay to let smooth scroll finish

    const handleResize = () => measure(current);
    const handleScroll = () => measure(current);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [current, measure]);

  const finish = useCallback(() => {
    setPhase('exiting');
    localStorage.setItem(STORAGE_KEY, '1');
    // Scroll back to top for a clean first view
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(onComplete, 500);
  }, [onComplete]);

  const goNext = useCallback(() => {
    if (current >= steps.length - 1) {
      finish();
      return;
    }
    setPhase('transitioning');
    setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setPhase('entering');
    }, 300);
  }, [current, finish]);

  const step = steps[current]!;
  const padding = 12;

  // Tooltip position: below the target, centered
  const tooltipStyle: React.CSSProperties = rect
    ? {
        position: 'absolute',
        top: rect.bottom + padding + 20,
        left: rect.left + rect.width / 2,
        transform: 'translateX(-50%)',
      }
    : { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };

  return createPortal(
    <div
      ref={overlayRef}
      className={`onboarding-root ${phase === 'exiting' ? 'onboarding-exit' : ''}`}
    >
      {/* Full dark overlay (no clip-path, simpler and more reliable) */}
      <div
        className="onboarding-backdrop"
        onClick={finish}
      />

      {/* Cloned button rendered above the overlay at the exact same position */}
      {rect && cloneHtml && (
        <div
          className={`onboarding-clone ${phase === 'visible' ? 'onboarding-clone-on' : ''}`}
          style={{
            position: 'absolute',
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            pointerEvents: 'none',
          }}
          dangerouslySetInnerHTML={{ __html: cloneHtml }}
        />
      )}

      {/* Spotlight ring around target */}
      {rect && (
        <div
          className={`onboarding-ring ${phase === 'visible' ? 'onboarding-ring-on' : ''}`}
          style={{
            top: rect.top - padding,
            left: rect.left - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
          }}
        />
      )}

      {/* Tooltip card */}
      <div
        className={`onboarding-tooltip ${phase === 'visible' ? 'onboarding-tooltip-on' : ''}`}
        style={tooltipStyle}
      >
        {/* Step indicator */}
        <div className="onboarding-dots">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`onboarding-dot ${i === current ? 'onboarding-dot-active' : ''}`}
            />
          ))}
        </div>

        <h3 className="onboarding-title">{t(`tutorial.${step.titleKey}`)}</h3>
        <p className="onboarding-desc">{t(`tutorial.${step.descKey}`)}</p>

        <div className="onboarding-actions">
          <button className="onboarding-skip" onClick={finish}>
            {t('tutorial.skip')}
          </button>
          <button className="onboarding-next" onClick={goNext}>
            {current < steps.length - 1 ? t('tutorial.next') : t('tutorial.done')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

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
  const [phase, setPhase] = useState<'entering' | 'visible' | 'transitioning' | 'exiting'>('entering');
  const overlayRef = useRef<HTMLDivElement>(null);

  const measure = useCallback((stepIndex: number) => {
    const el = document.querySelector(steps[stepIndex]!.selector);
    if (el) {
      const r = el.getBoundingClientRect();
      setRect(r);
    }
  }, []);

  // Elevate the targeted element above the overlay so its original styling is fully visible
  useEffect(() => {
    const el = document.querySelector(steps[current]!.selector) as HTMLElement | null;
    if (!el) return;

    el.style.position = 'relative';
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none'; // prevent accidental clicks/navigation

    return () => {
      el.style.position = '';
      el.style.zIndex = '';
      el.style.pointerEvents = '';
    };
  }, [current]);

  // Measure on mount + resize
  useEffect(() => {
    // Small delay to let hero animations settle
    const timer = setTimeout(() => {
      measure(current);
      setPhase('visible');
    }, 300);

    const handleResize = () => measure(current);
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [current, measure]);

  const finish = useCallback(() => {
    setPhase('exiting');
    localStorage.setItem(STORAGE_KEY, '1');
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
      // 'entering' triggers the useEffect above which will measure + set 'visible'
    }, 300);
  }, [current, finish]);

  const step = steps[current]!;
  const padding = 12;

  // Spotlight clip: everything dark except the target rect
  const clipPath = rect
    ? `polygon(
        0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%,
        ${rect.left - padding}px ${rect.top - padding}px,
        ${rect.left - padding}px ${rect.bottom + padding}px,
        ${rect.right + padding}px ${rect.bottom + padding}px,
        ${rect.right + padding}px ${rect.top - padding}px,
        ${rect.left - padding}px ${rect.top - padding}px
      )`
    : undefined;

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
      {/* Dark overlay with spotlight hole */}
      <div
        className="onboarding-backdrop"
        style={{ clipPath }}
        onClick={finish}
      />

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

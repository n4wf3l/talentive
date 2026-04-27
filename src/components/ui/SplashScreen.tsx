import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import logo from '../../assets/images/talentive.png';

const STORAGE_KEY = 'talentive_splash_seen';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<'particles' | 'logo' | 'reveal' | 'done'>('particles');
  const titleLines = t('hero.title').split('\n');

  const finish = useCallback(() => {
    setPhase('done');
    sessionStorage.setItem(STORAGE_KEY, '1');
    // Let the exit animation play before unmounting
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase('logo'), 400);
    const t2 = setTimeout(() => setPhase('reveal'), 1200);
    const t3 = setTimeout(finish, 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [finish]);

  return (
    <div
      className={`splash-root ${phase === 'done' ? 'splash-exit' : ''}`}
      onClick={phase === 'reveal' ? finish : undefined}
    >
      {/* Animated background particles */}
      <div className="splash-particles" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="splash-particle" style={particleStyle(i)} />
        ))}
      </div>

      {/* Orbiting rings */}
      <div className="splash-rings" aria-hidden="true">
        <div className="splash-ring splash-ring-1" />
        <div className="splash-ring splash-ring-2" />
        <div className="splash-ring splash-ring-3" />
      </div>

      {/* Central glow */}
      <div
        className={`splash-glow ${phase !== 'particles' ? 'splash-glow-on' : ''}`}
        aria-hidden="true"
      />

      {/* Logo + tagline */}
      <div className={`splash-content ${phase !== 'particles' ? 'splash-content-visible' : ''}`}>
        <img src={logo} alt="Talentive" className="splash-logo" />
        <p
          className={`splash-tagline ${phase === 'reveal' || phase === 'done' ? 'splash-tagline-on' : ''}`}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {i === 0 ? line : <span className="text-gradient">{line}</span>}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

/** Check if splash should show (first visit per session) */
export function shouldShowSplash(): boolean {
  return !sessionStorage.getItem(STORAGE_KEY);
}

/* ── Procedural particle styles ── */
function particleStyle(i: number): React.CSSProperties {
  const angle = (i / 40) * 360;
  const radius = 30 + Math.random() * 35; // % from center
  const size = 2 + Math.random() * 3;
  const duration = 3 + Math.random() * 4;
  const delay = Math.random() * 2;

  return {
    '--angle': `${angle}deg`,
    '--radius': `${radius}%`,
    '--size': `${size}px`,
    '--duration': `${duration}s`,
    '--delay': `${delay}s`,
  } as React.CSSProperties;
}

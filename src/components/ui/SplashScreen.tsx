import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'talentive_splash_seen';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'particles' | 'logo' | 'reveal' | 'done'>('particles');

  const finish = useCallback(() => {
    setPhase('done');
    sessionStorage.setItem(STORAGE_KEY, '1');
    // Let the exit animation play before unmounting
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase('logo'), 400);
    const t2 = setTimeout(() => setPhase('reveal'), 2200);
    const t3 = setTimeout(finish, 3400);
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
        {/* Wordmark built with spans for letter-stagger */}
        <h1 className="splash-wordmark" aria-label="talentive.">
          {'talentive.'.split('').map((char, i) => (
            <span
              key={i}
              className="splash-letter"
              style={{ animationDelay: `${0.6 + i * 0.06}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Accent line */}
        <div className={`splash-line ${phase === 'logo' || phase === 'reveal' ? 'splash-line-on' : ''}`} />

        {/* Tagline */}
        <p className={`splash-tagline ${phase === 'reveal' ? 'splash-tagline-on' : ''}`}>
          Connecting talent with opportunity
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

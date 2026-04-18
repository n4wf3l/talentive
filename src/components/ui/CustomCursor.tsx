import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad), skip touch
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setEnabled(true);

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const animate = () => {
      // Dot follows exactly, ring lags with smooth lerp
      ringX += (targetX - ringX) * 0.22;
      ringY += (targetY - ringY) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || typeof el.closest !== 'function') return;
      const hit = el.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-interactive]',
      );
      setInteractive(!!hit);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!enabled) return null;

  const state = [
    visible ? 'cursor-on' : '',
    interactive ? 'cursor-interactive' : '',
    pressed ? 'cursor-pressed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${state}`} aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${state}`} aria-hidden="true" />
    </>
  );
}

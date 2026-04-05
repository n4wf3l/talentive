import { useEffect, useRef, type ReactNode } from 'react';

type Animation = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'blur-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => {
            el.classList.add('animate-visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`animate-hidden animate-${animation} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

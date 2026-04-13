import { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';

const sections = [
  { id: 'home', path: '/', key: 'nav.home' },
  { id: 'services', path: '/services', key: 'nav.services' },
  { id: 'about', path: '/about', key: 'nav.about' },
  { id: 'contact', path: '/contact', key: 'nav.contact' },
] as const;

function SectionIcon({ id, active }: { id: string; active: boolean }) {
  const cls = `h-[18px] w-[18px] transition-all duration-500 ${
    active ? 'text-white' : 'text-white/40 group-hover:text-white/80'
  }`;

  const icons: Record<string, ReactNode> = {
    home: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    services: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    about: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    contact: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  };

  return <>{icons[id]}</>;
}

export default function ScrollSidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      const handleScroll = () => {
        setVisible(window.scrollY > 100);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setVisible(window.scrollY > heroHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const activeIndex = sections.findIndex((s) => s.path === location.pathname);

  return (
    <nav
      className={`fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block ${
        visible ? 'sidebar-animate-in' : 'sidebar-animate-out pointer-events-none'
      }`}
      aria-label="Section navigation"
    >
      <div className="relative flex flex-col items-center gap-0">
        {/* Vertical track line */}
        <div className="absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 bg-white/[0.08]" />

        {/* Active progress line */}
        <div
          className="absolute left-1/2 top-5 w-px -translate-x-1/2 bg-gradient-to-b from-accent-400 to-accent-600 transition-all duration-700 ease-out"
          style={{
            height: activeIndex >= 0 ? `${(activeIndex / (sections.length - 1)) * (sections.length * 56 - 56)}px` : '0px',
          }}
        />

        {sections.map((section) => {
          const isActive = location.pathname === section.path;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip label */}
              <div
                className={`absolute left-full ml-4 whitespace-nowrap rounded-lg px-3 py-1.5 text-[13px] font-display font-bold tracking-wide transition-all duration-300 ${
                  isHovered
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-2 opacity-0 pointer-events-none'
                }`}
                style={{
                  background: 'rgba(10, 22, 40, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  color: isActive ? '#60A5FA' : 'rgba(255,255,255,0.8)',
                }}
              >
                {t(section.key)}
                {/* Arrow */}
                <div
                  className="absolute right-full top-1/2 -translate-y-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                    borderRight: '5px solid rgba(10, 22, 40, 0.9)',
                  }}
                />
              </div>

              {/* Node */}
              <Link
                to={section.path}
                className="group relative z-10 flex h-14 w-14 items-center justify-center"
                aria-label={t(section.key)}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Glow ring on active */}
                <div
                  className={`absolute inset-1 rounded-full transition-all duration-500 ${
                    isActive
                      ? 'bg-accent-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-100'
                      : 'bg-transparent scale-75'
                  }`}
                />

                {/* Inner circle */}
                <div
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                    isActive
                      ? 'border-accent-400/60 bg-accent-500/20 backdrop-blur-md'
                      : 'border-white/[0.08] bg-primary-900/80 backdrop-blur-md group-hover:border-accent-400/40 group-hover:bg-primary-800'
                  }`}
                >
                  <SectionIcon id={section.id} active={isActive} />
                </div>

                {/* Ping on active */}
                {isActive && (
                  <span className="absolute inset-1 rounded-full border border-accent-400/30 animate-ping" style={{ animationDuration: '2.5s' }} />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

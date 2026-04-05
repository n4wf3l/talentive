import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';

const sections = [
  { id: 'hero', key: 'nav.home' },
  { id: 'services', key: 'nav.services' },
  { id: 'about', key: 'nav.about' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export default function ScrollSidebar() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const el = document.getElementById(section!.id);
      if (el && scrollY >= el.offsetTop) {
        setActiveSection(section!.id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past hero (80vh)
      const heroHeight = window.innerHeight * 0.8;
      setVisible(window.scrollY > heroHeight);
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateActiveSection]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block ${
        visible ? 'sidebar-animate-in' : 'sidebar-animate-out pointer-events-none'
      }`}
      aria-label="Section navigation"
    >
      <div className="glass rounded-2xl px-3 py-5 shadow-lg">
        <div className="flex flex-col items-center gap-5">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div
                key={section.id}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Tooltip */}
                <div
                  className={`absolute left-full ml-4 whitespace-nowrap rounded-lg bg-primary-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-200 ${
                    isHovered
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-2 opacity-0 pointer-events-none'
                  }`}
                >
                  {t(section.key)}
                  {/* Arrow */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-primary-800" />
                </div>

                {/* Dot */}
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? 'scale-125'
                      : 'hover:scale-110'
                  }`}
                  aria-label={t(section.key)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {/* Outer ring for active */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-accent-500/20 animate-pulse" />
                  )}
                  {/* Dot */}
                  <span
                    className={`relative block rounded-full transition-all duration-300 ${
                      isActive
                        ? 'h-3 w-3 bg-accent-500'
                        : 'h-2 w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                </button>

                {/* Connecting line (except last) */}
                {section.id !== 'contact' && (
                  <span className="absolute left-1/2 top-full h-5 w-px -translate-x-1/2 bg-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

interface SectionNavigatorProps {
  targetId: string;
  label?: string;
  light?: boolean;
}

export default function SectionNavigator({
  targetId,
  label,
  light = false,
}: SectionNavigatorProps) {
  const scrollToSection = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {label && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? 'text-white/80' : 'text-gray-500'
          }`}
        >
          {label}
        </span>
      )}
      <button
        onClick={scrollToSection}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full border-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
          light
            ? 'border-white/40 bg-white/10 hover:border-white hover:bg-white/20'
            : 'border-primary-800/30 bg-primary-800/5 hover:border-primary-800 hover:bg-primary-800/10'
        }`}
        aria-label={`Scroll to ${targetId}`}
      >
        {/* Pulse ring, outer */}
        <span
          className={`absolute inset-0 rounded-full ring-pulse ${
            light ? 'bg-white/20' : 'bg-primary-800/10'
          }`}
        />
        {/* Pulse ring, inner (offset) */}
        <span
          className={`absolute inset-0 rounded-full ring-pulse ${
            light ? 'bg-white/10' : 'bg-primary-800/5'
          }`}
          style={{ animationDelay: '1s' }}
        />
        {/* Arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`arrow-bounce relative transition-colors ${
            light
              ? 'text-white group-hover:text-accent-300'
              : 'text-primary-800 group-hover:text-accent-600'
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}

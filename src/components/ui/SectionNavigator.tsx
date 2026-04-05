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
    <div className="flex flex-col items-center gap-3">
      {label && (
        <span
          className={`text-xs font-medium uppercase tracking-[0.15em] ${
            light ? 'text-white/40' : 'text-gray-400'
          }`}
        >
          {label}
        </span>
      )}
      <button
        onClick={scrollToSection}
        className="group relative flex h-12 w-12 items-center justify-center"
        aria-label={`Scroll to ${targetId}`}
      >
        {/* Pulse ring */}
        <span
          className={`absolute inset-0 rounded-full ring-pulse ${
            light ? 'bg-white/10' : 'bg-primary-800/5'
          }`}
        />
        {/* Arrow */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`arrow-bounce transition-colors ${
            light
              ? 'text-white/60 group-hover:text-white'
              : 'text-gray-400 group-hover:text-primary-800'
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}

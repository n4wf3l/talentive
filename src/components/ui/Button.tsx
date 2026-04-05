import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  href?: string;
  external?: boolean;
  size?: 'md' | 'lg';
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-600 text-white hover:bg-accent-500 focus-visible:ring-accent-500 shadow-lg shadow-accent-600/20 hover:shadow-xl hover:shadow-accent-600/30',
  secondary:
    'bg-primary-800 text-white hover:bg-primary-700 focus-visible:ring-primary-500 shadow-lg shadow-primary-800/20 hover:shadow-xl hover:shadow-primary-800/30',
  outline:
    'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus-visible:ring-white/50',
  ghost:
    'text-gray-600 hover:text-primary-800 hover:bg-gray-100 focus-visible:ring-gray-300',
};

const sizes: Record<'md' | 'lg', string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `btn-hover inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}

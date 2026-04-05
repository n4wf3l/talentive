import type { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection animation="fade-up" delay={delay}>
      <div className="card-premium group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* Top accent line on hover */}
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-100 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mt-6 text-xl font-bold text-primary-800">{title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
}

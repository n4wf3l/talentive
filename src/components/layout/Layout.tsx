import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollSidebar from './ScrollSidebar';
import BottomBar from './BottomBar';
import ScrollToTopButton from '../ui/ScrollToTopButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <Header />
      <ScrollSidebar />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <BottomBar />
      <ScrollToTopButton />
    </div>
  );
}

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
      <Header />
      <ScrollSidebar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BottomBar />
      <ScrollToTopButton />
    </div>
  );
}

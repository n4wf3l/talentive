import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollSidebar from './ScrollSidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isHomePage && <ScrollSidebar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

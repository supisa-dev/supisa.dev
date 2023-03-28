import {ReactNode} from 'react';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

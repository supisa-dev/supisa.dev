import {ReactNode} from 'react';
import Header from '@/components/templates/Header';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

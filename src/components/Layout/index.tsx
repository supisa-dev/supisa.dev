import {ReactNode} from 'react';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';
import useBrowserLayoutEffect from '@/hooks/useBrowserLayoutEffect';
import themeStore from '@/store/themeStore';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  const {setIsDarkTheme} = themeStore.getState();

  useBrowserLayoutEffect(() => {
    if (localStorage.theme === 'dark') setIsDarkTheme(true);
    else setIsDarkTheme(false);
  }, [children]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

import '@/styles/normalize.css';
import '@/styles/tailwind.css';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from '@/components/layout';
import {useEffect} from 'react';
import themeStore from '@/store/themeStore';

export default function App({Component, pageProps}: AppProps) {
  const setIsDarkMode = themeStore((state) => state.setIsDarkTheme);

  useEffect(() => {
    if (localStorage.theme === 'dark') setIsDarkMode(true);
    else setIsDarkMode(false);
  }, [pageProps, setIsDarkMode]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

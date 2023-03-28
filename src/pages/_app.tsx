import {use, useEffect} from 'react';
import '@/styles/normalize.css';
import '@/styles/tailwind.css';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from '@/components/layout';

export default function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

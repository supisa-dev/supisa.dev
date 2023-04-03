import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';
import {useEffect} from 'react';
import useDarkMode from '@/components/hooks/useDarkMode';
import checkTheme from '@/util/checkTheme';

export default function Document() {
  const {setIsDarkTheme} = useDarkMode();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') setIsDarkTheme(false);
    else setIsDarkTheme(true);
  }, []);
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="supisa.dev" />
        <meta name="description" content="Front-End Engineer Pillsang's Personal Blog" />
        <meta
          name="keyword"
          content="supisa.dev, supisa-dev, supisa-dev github, supisa.dev github, supisa.dev website, supisa.dev blog, supisa.dev lab, supisa.dev portfolio, supisa website, supisa blog, supisa lab, supisa portfolio"
        />
      </Head>
      <body>
        <Script onLoad={() => checkTheme()} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

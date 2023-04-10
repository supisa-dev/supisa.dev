import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';

export default function Document() {
  const checkStorageTheme = {
    __html: `
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }`,
  };

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
        <Script
          id="checkStorageTheme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={checkStorageTheme}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

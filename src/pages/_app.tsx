import '@/styles/normalize.css';
import '@/styles/tailwind.css';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import localFont from 'next/font/local';
import Layout from '@/components/templates/Layout';
import combineFontVariables from '@/utils/combineFontVariables';

const scDreamThin = localFont({
  src: '../../public/fonts/SCDream1.woff2',
  variable: '--font-sc-dream-thin',
  display: 'swap',
});
const scDreamExtraLight = localFont({
  src: '../../public/fonts/SCDream2.woff2',
  variable: '--font-sc-dream-extra-light',
  display: 'swap',
});
const scDreamLight = localFont({
  src: '../../public/fonts/SCDream3.woff2',
  variable: '--font-sc-dream-light',
  display: 'swap',
});
const scDreamRegular = localFont({
  src: '../../public/fonts/SCDream4.woff2',
  variable: '--font-sc-dream-regular',
  display: 'swap',
});
const scDreamMedium = localFont({
  src: '../../public/fonts/SCDream5.woff2',
  variable: '--font-sc-dream-medium',
  display: 'swap',
});
const scDreamBold = localFont({
  src: '../../public/fonts/SCDream6.woff2',
  variable: '--font-sc-dream-bold',
  display: 'swap',
});
const scDreamExtraBold = localFont({
  src: '../../public/fonts/SCDream7.woff2',
  variable: '--font-sc-dream-extra-bold',
  display: 'swap',
});
const scDreamHeavy = localFont({
  src: '../../public/fonts/SCDream8.woff2',
  variable: '--font-sc-dream-heavy',
  display: 'swap',
});
const scDreamBlack = localFont({
  src: '../../public/fonts/SCDream9.woff2',
  variable: '--font-sc-dream-black',
  display: 'swap',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <div
      className={`${combineFontVariables([
        scDreamThin.variable,
        scDreamExtraLight.variable,
        scDreamLight.variable,
        scDreamRegular.variable,
        scDreamMedium.variable,
        scDreamBold.variable,
        scDreamExtraBold.variable,
        scDreamHeavy.variable,
        scDreamBlack.variable,
      ])} w-full h-screen absolute top-0 left-0 overflow-hidden flex flex-col items-center bg-white dark:bg-dark-1`}
    >
      <Layout>
        <main className="w-full h-[calc(100%-5rem)] absolute top-[5rem] left-0 overflow-hidden bg-white dark:bg-dark-1">
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}

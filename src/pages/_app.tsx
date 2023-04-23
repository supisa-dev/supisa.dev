import '@/styles/normalize.css';
import '@/styles/tailwind.css';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import localFont from 'next/font/local';
import Layout from '@/components/layout';
import combineFontVariables from '@/utils/combineFontVariables';

const scDreamThin = localFont({
  src: '../../public/fonts/SCDream1.woff2',
  variable: '--font-sc-dream-thin',
});
const scDreamExtraLight = localFont({
  src: '../../public/fonts/SCDream2.woff2',
  variable: '--font-sc-dream-extra-light',
});
const scDreamLight = localFont({
  src: '../../public/fonts/SCDream3.woff2',
  variable: '--font-sc-dream-light',
});
const scDreamRegular = localFont({
  src: '../../public/fonts/SCDream4.woff2',
  variable: '--font-sc-dream-regular',
});
const scDreamMedium = localFont({
  src: '../../public/fonts/SCDream5.woff2',
  variable: '--font-sc-dream-medium',
});
const scDreamBold = localFont({
  src: '../../public/fonts/SCDream6.woff2',
  variable: '--font-sc-dream-bold',
});
const scDreamExtraBold = localFont({
  src: '../../public/fonts/SCDream7.woff2',
  variable: '--font-sc-dream-extra-bold',
});
const scDreamHeavy = localFont({
  src: '../../public/fonts/SCDream8.woff2',
  variable: '--font-sc-dream-heavy',
});
const scDreamBlack = localFont({
  src: '../../public/fonts/SCDream9.woff2',
  variable: '--font-sc-dream-black',
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
      ])} w-full h-screen absolute top-0 left-0 overflow-hidden flex flex-col items-center`}
    >
      <Layout>
        <main className="w-full h-[calc(100%-80px)] absolute top-[80px] left-0 overflow-hidden">
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}

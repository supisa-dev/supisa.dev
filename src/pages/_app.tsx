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
      ])} absolute top-0 left-0 flex h-screen w-full flex-col items-center overflow-hidden`}
    >
      <Layout>
        <main className="absolute top-0 left-0 h-full w-full overflow-auto">
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}

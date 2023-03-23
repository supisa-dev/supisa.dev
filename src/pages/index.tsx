import Head from 'next/head';
import Header from '@/components/Template/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
}

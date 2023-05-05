import Head from 'next/head';
import Fix from '@/components/common/Fix';

export default function AllPosts() {
  return (
    <>
      <Head>
        <title>Blog | Supisa.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fix />
    </>
  );
}

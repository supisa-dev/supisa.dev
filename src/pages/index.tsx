import Head from 'next/head';
import RecentPosts from '@/components/home/RecentPosts';
import {allPosts} from 'contentlayer/generated';
import {compareDesc} from 'date-fns';
import type {Post} from 'contentlayer/generated';

interface HomeProps {
  recentPosts: Post[];
}

export async function getStaticProps() {
  const sortedAllPosts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.createdDate), new Date(b.createdDate));
  });

  const recentPosts = sortedAllPosts.length > 3 ? sortedAllPosts.slice(0, 3) : [...sortedAllPosts];
  return {props: {recentPosts}, revalidate: 3600};
}

export default function Home({recentPosts}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Supisa.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="w-full max-w-[63.9375rem] h-full mx-auto my-0 pt-4 flex flex-col items-center justify-start bg-white dark:bg-dark-1">
        <RecentPosts recentPosts={recentPosts} />
      </section>
    </>
  );
}

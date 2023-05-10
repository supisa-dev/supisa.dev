import Head from 'next/head';
import RecentPosts from '@/components/page/home/RecentPosts';
import LandingVideo from '@/components/page/home/LandingVideo';
import {allBlogs} from 'contentlayer/generated';
import {compareDesc} from 'date-fns';
import type {Blog} from 'contentlayer/generated';

interface HomeProps {
  recentPosts: Blog[];
}

export async function getStaticProps() {
  const sortedAllPosts = allBlogs.sort((a, b) => {
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
      <section className="flex h-auto w-full flex-col items-center justify-start bg-white dark:bg-dark-1">
        <LandingVideo />
        {/* <RecentPosts recentPosts={recentPosts} /> */}
      </section>
    </>
  );
}

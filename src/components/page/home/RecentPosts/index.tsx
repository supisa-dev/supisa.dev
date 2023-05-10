import Link from 'next/link';
import BlogPostCard from '@/components/common/BlogPostCard';
import type {Blog} from 'contentlayer/generated';

interface RecentPostsProps {
  recentPosts: Blog[];
}

export default function RecentPosts({recentPosts}: RecentPostsProps) {
  return (
    <article className="flex w-full flex-col items-center justify-start gap-6">
      <div className="flex w-[15.25rem] flex-col items-center justify-start gap-1 pc:w-full pc:flex-row pc:justify-between pc:gap-0">
        <h2 className="flex flex-row items-center justify-center pc:justify-start">
          <span className="typo-24 inline-block font-sc-dream-700 text-dark-1 dark:text-gray-1">
            Recent Posts
          </span>
        </h2>
        <Link href="/blog" className="flex flex-row items-center justify-center">
          <p className="group flex cursor-pointer flex-row items-center justify-center">
            <span className="typo-12 inline-block font-sc-dream-400 text-dark-1 underline underline-offset-1 group-hover:text-gray-3 dark:text-gray-1">
              See All
            </span>
          </p>
        </Link>
      </div>
      <ul className="flex w-full flex-col items-center justify-start gap-4 pc:flex-row pc:flex-wrap pc:justify-around pc:gap-0">
        {recentPosts.map((_post: Blog) => {
          return <BlogPostCard key={_post._id} blogPostData={_post} />;
        })}
      </ul>
    </article>
  );
}

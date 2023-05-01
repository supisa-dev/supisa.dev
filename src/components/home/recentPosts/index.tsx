import PostCard from '@/components/common/postCard';
import type {Post} from 'contentlayer/generated';

interface RecentPostsProps {
  recentPosts: Post[];
}

export default function RecentPosts({recentPosts}: RecentPostsProps) {
  return (
    <article className="w-full flex flex-col items-center justify-start gap-6">
      <div className="w-[15.25rem] pc:w-full flex flex-col pc:flex-row items-center justify-start pc:justify-between gap-1 pc:gap-0">
        <h2 className="flex flex-row items-center justify-center pc:justify-start">
          <span className="inline-block font-sc-dream-700 typo-24 text-dark-1 dark:text-gray-1">
            Recent Posts
          </span>
        </h2>
        <p className="group flex flex-row items-center justify-center cursor-pointer">
          <span className="inline-block font-sc-dream-400 typo-12 text-dark-1 dark:text-gray-1 group-hover:text-gray-3 underline underline-offset-1">
            See All
          </span>
        </p>
      </div>
      <ul className="w-full flex flex-col pc:flex-row items-center justify-start pc:justify-around pc:flex-wrap gap-4 pc:gap-0">
        {recentPosts.map((_post: Post) => {
          return <PostCard key={_post._id} postData={_post} />;
        })}
      </ul>
    </article>
  );
}

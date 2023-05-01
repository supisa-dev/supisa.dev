import PostCard from '@/components/common/postCard';
import type {Post} from 'contentlayer/generated';

interface RecentPostsProps {
  recentPosts: Post[];
}

export default function RecentPosts({recentPosts}: RecentPostsProps) {
  return (
    <article className="w-full flex flex-col items-center justify-start gap-6">
      <h2 className="w-full flex flex-row items-center justify-center pc:justify-start">
        <p className="flex flex-row items-center justify-center">
          <span className="inline-block font-sc-dream-700 typo-24 text-dark-1 dark:text-gray-1">
            Recent Posts
          </span>
        </p>
      </h2>
      <ul className="w-full flex flex-col items-center justify-start pc:flex-row pc:flex-wrap gap-4 pc:gap-0 pc:justify-around">
        {recentPosts.map((_post: Post) => {
          return <PostCard key={_post._id} postData={_post} />;
        })}
      </ul>
    </article>
  );
}

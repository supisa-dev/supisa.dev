import Image from 'next/image';
import {useRouter} from 'next/router';
import {format, parseISO} from 'date-fns';
import type {Blog} from 'contentlayer/generated';

interface BlogPostCardProps {
  blogPostData: Blog;
}

export default function BlogPostCard({blogPostData}: BlogPostCardProps) {
  const router = useRouter();

  return (
    <li
      onClick={() => {
        router.push(`/blog/${blogPostData.url}`);
      }}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        router.push(`/blog/${blogPostData.url}`);
      }}
      className="group w-[15.25rem] flex flex-col items-center justify-start gap-2 cursor-pointer"
    >
      <picture className="block relative w-full h-[8.5781rem] bg-gray-4 dark:bg-white rounded-md">
        <Image
          src={blogPostData.image}
          alt="블로그 포스트 이미지"
          sizes="244px"
          fill
          className="object-cover overflow-hidden"
        />
      </picture>
      <div className="w-full flex flex-col items-start justify-start gap-1">
        <span className="w-full inline-block font-sc-dream-500 typo-16 text-dark-1 dark:text-gray-1 whitespace-nowrap text-ellipsis overflow-hidden pc:group-hover:underline pc:underline-offset-1">
          {blogPostData.title}
        </span>
        <span className="w-full inline-block font-sc-dream-500 typo-12 text-gray-3 dark:text-gray-3 whitespace-nowrap text-ellipsis overflow-hidden">
          {blogPostData.emphaticPhrase}
        </span>
        <div className="w-full flex flex-row items-center justify-between">
          <p className="flex flex-row items-center justify-start">
            <span className="inline-block font-sc-dream-400 typo-10 text-dark-1 dark:text-gray-1 whitespace-nowrap">
              {blogPostData.readingTime.text}
            </span>
          </p>
          <time className="w-full inline-block font-sc-dream-500 typo-10 text-gray-4 dark:text-gray-1 text-end">
            {format(parseISO(blogPostData.createdDate), 'yyyy-MM-dd')}
          </time>
        </div>
      </div>
    </li>
  );
}

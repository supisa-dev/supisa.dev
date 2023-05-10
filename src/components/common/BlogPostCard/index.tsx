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
      className="group flex w-[15.25rem] cursor-pointer flex-col items-center justify-start gap-2"
    >
      <picture className="relative block h-[8.5781rem] w-full rounded-md bg-gray-4 dark:bg-white">
        <Image
          src={blogPostData.image}
          alt="블로그 포스트 이미지"
          sizes="244px"
          fill
          className="overflow-hidden object-cover"
        />
      </picture>
      <div className="flex w-full flex-col items-start justify-start gap-1">
        <span className="typo-16 inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap font-sc-dream-500 text-dark-1 dark:text-gray-1 pc:underline-offset-1 pc:group-hover:underline">
          {blogPostData.title}
        </span>
        <span className="typo-12 inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap font-sc-dream-500 text-gray-3 dark:text-gray-3">
          {blogPostData.emphaticPhrase}
        </span>
        <div className="flex w-full flex-row items-center justify-between">
          <p className="flex flex-row items-center justify-start">
            <span className="typo-10 inline-block whitespace-nowrap font-sc-dream-400 text-dark-1 dark:text-gray-1">
              {blogPostData.readingTime.text}
            </span>
          </p>
          <time className="typo-10 inline-block w-full text-end font-sc-dream-500 text-gray-4 dark:text-gray-1">
            {format(parseISO(blogPostData.createdDate), 'yyyy-MM-dd')}
          </time>
        </div>
      </div>
    </li>
  );
}

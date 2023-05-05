import Image from 'next/image';
import {useRouter} from 'next/router';
import {format, parseISO} from 'date-fns';
import type {Post} from 'contentlayer/generated';

interface PostCardProps {
  postData: Post;
}

export default function PostCard({postData}: PostCardProps) {
  const router = useRouter();

  return (
    <li
      onClick={() => {
        router.push(`/posts/${postData._raw.flattenedPath}`);
      }}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        router.push(`/posts/${postData._id}`);
      }}
      className="group w-[15.25rem] flex flex-col items-center justify-start gap-2 cursor-pointer"
    >
      <picture className="block relative w-full h-[8.5781rem] bg-gray-4 dark:bg-white rounded-md">
        <Image
          src={postData.image}
          alt="블로그 포스트 이미지"
          sizes="244px"
          fill
          className="object-cover overflow-hidden"
        />
      </picture>
      <p className="w-full flex flex-col items-start justify-start">
        <span className="w-full inline-block font-sc-dream-500 typo-16 text-dark-1 dark:text-gray-1 whitespace-nowrap text-ellipsis overflow-hidden pc:group-hover:underline pc:underline-offset-1">
          {postData.title}
        </span>
        <span className="w-full inline-block font-sc-dream-500 typo-12 text-gray-4 dark:text-gray-3 whitespace-nowrap text-ellipsis overflow-hidden">
          {postData.tags.filter((_tag, _idx) => _idx < 3)}
        </span>
        <time className="w-full inline-block font-sc-dream-500 typo-10 text-gray-3 dark:text-gray-4 text-end">
          {format(parseISO(postData.createdDate), 'yyyy-MM-dd')}
        </time>
      </p>
    </li>
  );
}
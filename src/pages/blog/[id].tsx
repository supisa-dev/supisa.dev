import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type {GetStaticPropsContext} from 'next';
import {ParsedUrlQuery} from 'querystring';
import {allBlogs} from 'contentlayer/generated';
import type {Blog} from 'contentlayer/generated';
import {useMDXComponent} from 'next-contentlayer/hooks';
import {format, parseISO} from 'date-fns';
import calcDifferDays from '@/utils/calcDifferDays';
import PostTag from '@/components/common/PostTag';
import {AiFillHome} from 'react-icons/ai';
import {v4 as uuidv4} from 'uuid';

interface Params extends ParsedUrlQuery {
  pid: string;
}
interface PostDetailProps {
  post: Blog;
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((_post: Blog) => ({params: {id: _post.url}})),
    fallback: false,
  };
}
export async function getStaticProps(ctx: GetStaticPropsContext<Params>) {
  const {id} = ctx.params as Params;
  const post = allBlogs.find((_post: Blog) => _post.url === id);

  return {
    props: {
      post,
    },
  };
}

export default function PostDetail({post}: PostDetailProps) {
  const Content = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>Blog | Supisa.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="w-[90vw] max-w-[63.9375rem] h-full mx-auto my-0 pt-4 flex flex-col items-center justify-start gap-6 bg-white dark:bg-dark-1">
        <ul className="w-full h-[2.25rem] flex flex-row items-center justify-start gap-1">
          <li className="h-full flex flex-row items-center justify-start">
            <Link href="/" className="flex flex-row items-center justify-center">
              <AiFillHome size="20" className="fill-dark-1 dark:fill-gray-1" />
            </Link>
          </li>
          <li className="h-full flex flex-row items-center justify-start">
            <span className="inline-block mt-1 typo-12 text-dark-1 dark:text-gray-1">&gt;</span>
          </li>
          <li className="h-full flex flex-row items-center justify-center">
            <Link href="/" className="flex flex-row items-center justify-center">
              <span className="inline-block mt-1 typo-16 text-dark-1 dark:text-gray-1">Blog</span>
            </Link>
          </li>
          <li className="flex flex-row items-center justify-start">
            <span className="inline-block mt-1 typo-12 text-dark-1 dark:text-gray-1">&gt;</span>
          </li>
          <li className="flex flex-row items-center justify-start">
            <span className="inline-block mt-1 typo-16 text-dark-1 dark:text-gray-1">Post</span>
          </li>
        </ul>
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <picture className="block relative w-full h-[calc(90vw*0.5625)] max-h-[calc(63.9375rem*0.5625)] bg-gray-4 dark:bg-white rounded-md opacity-50 active:opacity-100 pc:hover:opacity-100 transition-opacity duration-200 ease-in">
            <Image
              src={post.image}
              alt="블로그 포스트 이미지"
              sizes="90vw, (min-width: 1023px) 63.9375rem"
              fill
              className="object-contain"
            />
          </picture>
          <div className="w-full flex flex-col items-start justify-start gap-3">
            <h1 className="w-full flex items-center justify-start">
              <span className="inline-block font-sc-dream-700 typo-28 text-dark-1 dark:text-gray-1 break-all">
                {post.title}
              </span>
            </h1>
            <div className="w-full flex items-center justify-start flex-wrap gap-1">
              {post.tags.map((_tag) => {
                return <PostTag key={uuidv4()} text={_tag} />;
              })}
            </div>
            <p className="w-full flex flex-row items-center justify-between">
              <span className="flex flex-row items-center justify-start">
                <span className="inline-block font-sc-dream-400 typo-14 text-dark-1 dark:text-gray-1">
                  {post.readingTime.text}
                </span>
              </span>
              <span className="flex flex-row items-center justify-start">
                <time className="inline-block font-sc-dream-400 typo-14 text-dark-1 dark:text-gray-1">
                  {format(parseISO(post.createdDate), 'yyyy-MM-dd')}
                </time>
                {post.modifiedDate &&
                  (calcDifferDays(new Date(), parseISO(post.modifiedDate)) === 0 ? (
                    <time className="inline-block font-sc-dream-400 typo-14 text-dark-1 dark:text-gray-1">
                      (오늘 수정됨)
                    </time>
                  ) : (
                    <time className="inline-block font-sc-dream-400 typo-14 text-dark-1 dark:text-gray-1">
                      ({calcDifferDays(new Date(), parseISO(post.modifiedDate))}일 전 수정됨)
                    </time>
                  ))}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <hr className="w-full h-[1px] bg-gray-3 border-none" />
        </div>
        <article className="break-all w-full h-auto flex flex-col items-start justify-start">
          <Content />
        </article>
      </section>
    </>
  );
}

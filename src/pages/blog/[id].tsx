import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {v4 as uuidv4} from 'uuid';
import type {GetStaticPropsContext} from 'next';
import {ParsedUrlQuery} from 'querystring';
import {allBlogs} from 'contentlayer/generated';
import type {Blog} from 'contentlayer/generated';
import {useMDXComponent} from 'next-contentlayer/hooks';
import {format, parseISO} from 'date-fns';
import calcDifferDays from '@/utils/calcDifferDays';
import PostTag from '@/components/page/blog/PostTag';
import {AiFillHome} from 'react-icons/ai';

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
      <section className="mx-auto my-0 flex w-[90vw] max-w-[63.9375rem] flex-col items-center justify-start gap-6 bg-white pt-4 pb-8 dark:bg-dark-1">
        <ul className="flex h-[2.25rem] w-full flex-row items-center justify-start gap-1">
          <li className="flex h-full flex-row items-center justify-start">
            <Link href="/" className="flex flex-row items-center justify-center">
              <AiFillHome size="20" className="fill-dark-1 dark:fill-gray-1" />
            </Link>
          </li>
          <li className="flex h-full flex-row items-center justify-start">
            <span className="typo-12 mt-1 inline-block text-dark-1 dark:text-gray-1">&gt;</span>
          </li>
          <li className="flex h-full flex-row items-center justify-center">
            <Link href="/blog" className="flex flex-row items-center justify-center">
              <span className="typo-16 mt-1 inline-block text-dark-1 dark:text-gray-1">Blog</span>
            </Link>
          </li>
          <li className="flex flex-row items-center justify-start">
            <span className="typo-12 mt-1 inline-block text-dark-1 dark:text-gray-1">&gt;</span>
          </li>
          <li className="flex flex-row items-center justify-start">
            <span className="typo-16 mt-1 inline-block text-dark-1 dark:text-gray-1">Post</span>
          </li>
        </ul>
        <div className="flex w-full flex-col items-center justify-start gap-4">
          <picture className="relative block h-[calc(90vw*0.5625)] max-h-[calc(63.9375rem*0.5625)] w-full rounded-md bg-gray-4 opacity-50 transition-opacity duration-200 ease-in active:opacity-100 dark:bg-white pc:hover:opacity-100">
            <Image
              src={post.image}
              alt="블로그 포스트 이미지"
              sizes="90vw, (min-width: 1023px) 63.9375rem"
              fill
              className="object-contain"
            />
          </picture>
          <div className="flex w-full flex-col items-start justify-start gap-3">
            <h1 className="flex w-full items-center justify-start">
              <span className="typo-28 inline-block break-all font-sc-dream-700 text-dark-1 dark:text-gray-1">
                {post.title}
              </span>
            </h1>
            <div className="flex w-full flex-wrap items-center justify-start gap-1">
              {post.tags.map((_tag) => {
                return <PostTag key={uuidv4()} text={_tag} />;
              })}
            </div>
            <div className="flex w-full flex-row items-center justify-between">
              <p className="flex flex-row items-center justify-start">
                <span className="typo-14 inline-block font-sc-dream-400 text-dark-1 dark:text-gray-1">
                  {post.readingTime.text}
                </span>
              </p>
              <span className="flex flex-row items-center justify-start">
                <time className="typo-14 inline-block font-sc-dream-400 text-dark-1 dark:text-gray-1">
                  {format(parseISO(post.createdDate), 'yyyy-MM-dd')}
                </time>
                {post.modifiedDate && (
                  <time className="typo-14 inline-block font-sc-dream-400 text-dark-1 dark:text-gray-1">
                    ({calcDifferDays(new Date(), parseISO(post.modifiedDate))})
                  </time>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <hr className="h-[1px] w-full border-none bg-gray-3" />
        </div>
        <article className="flex h-auto w-full flex-col items-start justify-start break-all">
          <Content />
        </article>
        <div className="flex w-full flex-row items-center justify-center">
          <hr className="h-[1px] w-full border-none bg-gray-3" />
        </div>
        <div className="group relative top-0 left-0 h-[calc(20.25rem*0.3)] w-[20.25rem] pc:hover:cursor-pointer">
          <a
            href="https://open.kakao.com/o/gsWOCiZe"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center justify-center"
          >
            <picture className="absolute top-0 left-0 block h-full w-full">
              <Image
                src="/images/common/kakao-open-chat-banner.webp"
                fill
                sizes="90vw, (min-width: 1023px) 63.9375rem"
                alt="카카오톡 오픈 채팅 배너"
                className="overflow-hidden rounded-md object-cover"
              />
            </picture>
            <p className="absolute top-1/2 left-2 flex -translate-y-1/2 flex-col items-start justify-start gap-1">
              <span className="typo-16 inline-block font-sc-dream-700 text-white">
                같이 얘기해보면서 함께 성장해요!
              </span>
              <span className="typo-14 inline-block font-sc-dream-500 text-white">
                카카오톡 오픈채팅&nbsp;
                <strong className="typo-14 inline-block font-sc-dream-500 text-white group-hover:underline">
                  참여하기
                </strong>
              </span>
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

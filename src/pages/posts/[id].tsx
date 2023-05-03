import Head from 'next/head';
import Image from 'next/image';
import type {GetStaticPropsContext} from 'next';
import {ParsedUrlQuery} from 'querystring';
import {allPosts} from 'contentlayer/generated';
import type {Post} from 'contentlayer/generated';
import {useMDXComponent} from 'next-contentlayer/hooks';
import {format, parseISO} from 'date-fns';

interface Params extends ParsedUrlQuery {
  pid: string;
}
interface PostDetailProps {
  post: Post;
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((_post: Post) => ({params: {id: _post._raw.flattenedPath}})),
    fallback: false,
  };
}
export async function getStaticProps(ctx: GetStaticPropsContext<Params>) {
  const {id} = ctx.params as Params;
  const post = allPosts.find((_post: Post) => _post._raw.flattenedPath === id);

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
      <section className="w-[90%] max-w-[63.9375rem] h-full mx-auto my-0 pt-4 flex flex-col items-center justify-start gap-6 bg-white dark:bg-dark-1">
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <picture className="block relative w-full h-[calc(90vw*0.5625)] bg-gray-4 dark:bg-white rounded-md opacity-50 active:opacity-100 pc:opacity-50 pc:hover:opacity-100 transition-opacity duration-200 ease-in">
            <Image
              src={post.image}
              alt="블로그 포스트 이미지"
              sizes="244px"
              fill
              className="object-contain"
            />
          </picture>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <h1 className="w-full flex items-center justify-start">
              <span className="inline-block font-sc-dream-700 typo-28 text-dark-1 dark:text-gray-1 break-all">
                {post.title}
              </span>
            </h1>
            <p className="w-full  flex flex-row items-center justify-end">
              <time className="inline-block font-sc-dream-400 typo-12 text-dark-1 dark:text-gray-1">
                {format(parseISO(post.createdDate), 'yyyy-MM-dd')}
              </time>
            </p>
          </div>
        </div>
        <article className="break-all w-full h-auto flex flex-col items-start justify-start">
          <Content />
        </article>
      </section>
    </>
  );
}

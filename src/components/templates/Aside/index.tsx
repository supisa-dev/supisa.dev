import {useRouter} from 'next/router';
import {Dispatch, SetStateAction} from 'react';
import {BiArrowFromLeft} from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillFolderOpen, AiFillGithub} from 'react-icons/ai';
import {TfiNotepad} from 'react-icons/tfi';
import {SiCodewars} from 'react-icons/si';

interface AsideProps {
  isAsideActive: boolean;
  setIsAsideActive: Dispatch<SetStateAction<boolean>>;
}

export default function Aside({isAsideActive, setIsAsideActive}: AsideProps) {
  const router = useRouter();
  return (
    <>
      <div
        role="presentation"
        className={`fixed top-0 left-0 z-30 h-full w-full bg-black bg-opacity-50 bg-clip-padding backdrop-blur-sm backdrop-filter ${
          isAsideActive ? '' : 'translate-x-full'
        }`}
        onClick={() => setIsAsideActive(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-40 flex h-screen w-[300px] flex-col items-center bg-white transition-transform duration-200 ease-in-out dark:bg-dark-1 ${
          isAsideActive ? '' : 'translate-x-full'
        }`}
      >
        <section className="flex h-[5rem] w-full flex-col items-center justify-start">
          <div
            role="presentation"
            className="b flex h-[5rem] w-full flex-row items-center justify-start border-b-[1px] border-solid border-[#ececec] bg-gray-1 px-[1.5rem] dark:bg-gray-4"
          >
            <BiArrowFromLeft
              onClick={() => setIsAsideActive(!isAsideActive)}
              size="40"
              className="cursor-pointer fill-dark-1 dark:fill-gray-1"
            />
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-4 px-[1.5rem] py-[1.5rem]">
          <div className="flex w-full flex-row items-center justify-start">
            <p className="flex flex-row items-center justify-center">
              <span className="typo-12 inline-block font-sc-dream-200 text-dark-1 dark:text-gray-1">
                CATEGORIES
              </span>
            </p>
          </div>
          <ul className="flex h-full w-full flex-col items-center justify-start gap-2">
            {router.pathname.split('/')[1] === 'blog' ? (
              <li
                onClick={() => {
                  setIsAsideActive(false);
                  router.push('/blog');
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  setIsAsideActive(false);
                  router.push('/blog');
                }}
                className="flex h-[36px] w-full cursor-pointer flex-row items-center justify-start gap-4 rounded-md bg-dark-1 px-2 dark:bg-gray-1"
              >
                <AiFillFolderOpen
                  size="16"
                  className="cursor-pointer fill-gray-1 dark:fill-dark-1"
                />
                <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                  <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-gray-1 dark:text-dark-1">
                    Blog
                  </span>
                </p>
              </li>
            ) : (
              <li
                onClick={() => {
                  setIsAsideActive(false);
                  router.push('/blog');
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  setIsAsideActive(false);
                  router.push('/blog');
                }}
                className="group flex h-[36px] w-full cursor-pointer flex-row items-center justify-start gap-4 rounded-md px-2 pc:hover:bg-dark-1 dark:pc:hover:bg-gray-1"
              >
                <AiFillFolderOpen
                  size="16"
                  className="dark:pc:roup-hover:fill-dark-1 cursor-pointer fill-dark-1 dark:fill-gray-1 pc:group-hover:fill-gray-1"
                />
                <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                  <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-dark-1 dark:text-gray-1 pc:group-hover:text-gray-1 dark:pc:group-hover:text-dark-1">
                    Blog
                  </span>
                </p>
              </li>
            )}
            {router.pathname.split('/')[1] === 'note' ? (
              <li
                onClick={() => {
                  setIsAsideActive(false);
                  router.push('/note');
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  setIsAsideActive(false);
                  router.push('/note');
                }}
                className="flex h-[36px] w-full cursor-pointer flex-row items-center justify-start gap-4 rounded-md bg-dark-1 px-2 dark:bg-gray-1"
              >
                <TfiNotepad size="16" className="cursor-pointer fill-gray-1 dark:fill-dark-1" />
                <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                  <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-gray-1 dark:text-dark-1">
                    Blog
                  </span>
                </p>
              </li>
            ) : (
              <li
                onClick={() => {
                  setIsAsideActive(false);
                  router.push('/note');
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  setIsAsideActive(false);
                  router.push('/note');
                }}
                className="group flex h-[36px] w-full cursor-pointer flex-row items-center justify-start gap-4 rounded-md px-2 pc:hover:bg-dark-1 dark:pc:hover:bg-gray-1"
              >
                <TfiNotepad
                  size="16"
                  className="cursor-pointer fill-dark-1 dark:fill-gray-1 pc:group-hover:fill-gray-1 dark:pc:group-hover:fill-dark-1"
                />
                <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                  <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-dark-1 dark:text-gray-1 pc:group-hover:text-gray-1 dark:pc:group-hover:text-dark-1">
                    Note
                  </span>
                </p>
              </li>
            )}
          </ul>
        </section>
        <div className="flex w-full flex-row items-center justify-center px-[1.5rem] ">
          <hr className="h-[1px] w-full border-0 bg-gray-2 dark:bg-gray-1" />
        </div>
        <section className="flex w-full flex-col items-center justify-start gap-4 px-[1.5rem] py-[1.5rem]">
          <div className="flex w-full flex-row items-center justify-start">
            <p className="flex flex-row items-center justify-center">
              <span className="typo-12 inline-block font-sc-dream-200 text-dark-1 dark:text-gray-1">
                SOCIAL
              </span>
            </p>
          </div>
          <li className="group flex h-[36px] w-full cursor-pointer flex-row items-center justify-start rounded-md px-2 pc:hover:bg-dark-1 dark:pc:hover:bg-gray-1">
            <a
              href="https://github.com/supisa-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center justify-center gap-4"
            >
              <AiFillGithub
                size="20"
                className="cursor-pointer fill-dark-1 dark:fill-gray-1 pc:group-hover:fill-gray-1 dark:pc:group-hover:fill-dark-1"
              />
              <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-dark-1 dark:text-gray-1 pc:group-hover:text-gray-1 dark:pc:group-hover:text-dark-1">
                  Github
                </span>
              </p>
            </a>
          </li>
          <li className="group flex h-[36px] w-full cursor-pointer flex-row items-center justify-start rounded-md px-2 pc:hover:bg-dark-1 dark:pc:hover:bg-gray-1">
            <a
              href="https://www.linkedin.com/in/pillsang-sung-b4aba417a/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center justify-center gap-4"
            >
              <BsLinkedin
                size="20"
                className="cursor-pointer fill-dark-1 dark:fill-gray-1 pc:group-hover:fill-gray-1 dark:pc:group-hover:fill-dark-1"
              />
              <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-dark-1 dark:text-gray-1 pc:group-hover:text-gray-1 dark:pc:group-hover:text-dark-1">
                  LinkedIn
                </span>
              </p>
            </a>
          </li>
          <li className="group flex h-[36px] w-full cursor-pointer flex-row items-center justify-start rounded-md px-2 pc:hover:bg-dark-1 dark:pc:hover:bg-gray-1">
            <a
              href="https://www.codewars.com/users/supisa-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center justify-center gap-4"
            >
              <SiCodewars
                size="20"
                className="cursor-pointer fill-dark-1 dark:fill-gray-1 pc:group-hover:fill-gray-1 dark:pc:group-hover:fill-dark-1"
              />
              <p className="flex h-full flex-1 flex-row items-center justify-start pt-[.0625rem]">
                <span className="typo-16 inline-block whitespace-nowrap font-sc-dream-400 text-dark-1 dark:text-gray-1 pc:group-hover:text-gray-1 dark:pc:group-hover:text-dark-1">
                  Codewars
                </span>
              </p>
            </a>
          </li>
        </section>
      </aside>
    </>
  );
}

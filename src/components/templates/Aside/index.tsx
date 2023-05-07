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
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 ${
          isAsideActive ? '' : 'translate-x-full'
        }`}
        onClick={() => setIsAsideActive(false)}
      />
      <aside
        className={`fixed top-0 right-0 w-[300px] h-screen flex flex-col items-center z-20 bg-white dark:bg-dark-1 transition-transform duration-200 ease-in-out ${
          isAsideActive ? '' : 'translate-x-full'
        }`}
      >
        <section className="w-full h-[5rem] flex flex-col items-center justify-start">
          <div
            role="presentation"
            className="w-full h-[5rem] px-[1.5rem] bg-gray-1 dark:bg-gray-4 flex flex-row items-center justify-start border-b-[1px] border-solid b border-[#ececec]"
          >
            <BiArrowFromLeft
              onClick={() => setIsAsideActive(!isAsideActive)}
              size="40"
              className="cursor-pointer fill-dark-1 dark:fill-gray-1"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center px-[1.5rem] py-[1.5rem] gap-4">
          <div className="w-full flex flex-row items-center justify-start">
            <p className="flex flex-row items-center justify-center">
              <span className="inline-block font-sc-dream-200 typo-12 text-dark-1 dark:text-gray-1">
                CATEGORIES
              </span>
            </p>
          </div>
          <ul className="w-full h-full flex flex-col items-center justify-start gap-2">
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
                className="w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 bg-dark-1 dark:bg-gray-1 rounded-md"
              >
                <AiFillFolderOpen
                  size="16"
                  className="cursor-pointer fill-gray-1 dark:fill-dark-1"
                />
                <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                  <span className="inline-block font-sc-dream-400 typo-16 text-gray-1 dark:text-dark-1 whitespace-nowrap">
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
                className="group w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 hover:bg-dark-1 dark:hover:bg-gray-1 rounded-md"
              >
                <AiFillFolderOpen
                  size="16"
                  className="cursor-pointer fill-dark-1 dark:fill-gray-1 group-hover:fill-gray-1 dark:group-hover:fill-dark-1"
                />
                <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                  <span className="inline-block font-sc-dream-400 typo-16 text-dark-1 dark:text-gray-1 group-hover:text-gray-1 dark:group-hover:text-dark-1 whitespace-nowrap">
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
                className="w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 bg-dark-1 dark:bg-gray-1 rounded-md"
              >
                <TfiNotepad size="16" className="cursor-pointer fill-gray-1 dark:fill-dark-1" />
                <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                  <span className="inline-block font-sc-dream-400 typo-16 text-gray-1 dark:text-dark-1 whitespace-nowrap">
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
                className="group w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 hover:bg-dark-1 dark:hover:bg-gray-1 rounded-md"
              >
                <TfiNotepad
                  size="16"
                  className="cursor-pointer fill-dark-1 dark:fill-gray-1 group-hover:fill-gray-1 dark:group-hover:fill-dark-1"
                />
                <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                  <span className="inline-block font-sc-dream-400 typo-16 text-dark-1 dark:text-gray-1 group-hover:text-gray-1 dark:group-hover:text-dark-1 whitespace-nowrap">
                    Note
                  </span>
                </p>
              </li>
            )}
          </ul>
        </section>
        <div className="w-full flex flex-row items-center justify-center px-[1.5rem] ">
          <hr className="w-full h-[1px] bg-gray-2 dark:bg-gray-1 border-0" />
        </div>
        <section className="w-full flex flex-col items-center justify-start px-[1.5rem] py-[1.5rem] gap-4">
          <div className="w-full flex flex-row items-center justify-start">
            <p className="flex flex-row items-center justify-center">
              <span className="inline-block font-sc-dream-200 typo-12 text-dark-1 dark:text-gray-1">
                SOCIAL
              </span>
            </p>
          </div>
          <li className="group w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 hover:bg-dark-1 dark:hover:bg-gray-1 rounded-md">
            <AiFillGithub
              size="26"
              className="cursor-pointer fill-dark-1 dark:fill-gray-1 group-hover:fill-gray-1 dark:group-hover:fill-dark-1"
            />
            <a
              href="https://github.com/supisa-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center justify-center"
            >
              <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                <span className="inline-block font-sc-dream-400 typo-16 text-dark-1 dark:text-gray-1 group-hover:text-gray-1 dark:group-hover:text-dark-1 whitespace-nowrap">
                  Github
                </span>
              </p>
            </a>
          </li>
          <li className="group w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 hover:bg-dark-1 dark:hover:bg-gray-1 rounded-md">
            <BsLinkedin
              size="26"
              className="cursor-pointer fill-dark-1 dark:fill-gray-1 group-hover:fill-gray-1 dark:group-hover:fill-dark-1"
            />
            <a
              href="https://www.linkedin.com/in/pillsang-sung-b4aba417a/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center justify-center"
            >
              <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                <span className="inline-block font-sc-dream-400 typo-16 text-dark-1 dark:text-gray-1 group-hover:text-gray-1 dark:group-hover:text-dark-1 whitespace-nowrap">
                  LinkedIn
                </span>
              </p>
            </a>
          </li>
          <li className="group w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer px-2 hover:bg-dark-1 dark:hover:bg-gray-1 rounded-md">
            <SiCodewars
              size="26"
              className="cursor-pointer fill-dark-1 dark:fill-gray-1 group-hover:fill-gray-1 dark:group-hover:fill-dark-1"
            />
            <a
              href="https://www.codewars.com/users/supisa-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center justify-center"
            >
              <p className="flex-1 h-full flex flex-row items-center justify-start pt-[.0625rem]">
                <span className="inline-block font-sc-dream-400 typo-16 text-dark-1 dark:text-gray-1 group-hover:text-gray-1 dark:group-hover:text-dark-1 whitespace-nowrap">
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

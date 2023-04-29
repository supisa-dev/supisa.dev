import {Dispatch, SetStateAction} from 'react';
import {BiArrowFromLeft} from 'react-icons/bi';
import {AiFillFolderOpen} from 'react-icons/ai';
import {MdOutlineEmojiPeople} from 'react-icons/md';

interface AsideProps {
  isDarkThemeActive: boolean;
  isAsideActive: boolean;
  setIsAsideActive: Dispatch<SetStateAction<boolean>>;
}

export default function Aside({isDarkThemeActive, isAsideActive, setIsAsideActive}: AsideProps) {
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
        className={`fixed top-0 right-0 w-[300px] h-screen flex flex-col items-center z-20 bg-white dark:bg-[#1C2731] transition-transform duration-200 ease-in-out ${
          isAsideActive ? '' : 'translate-x-full'
        }`}
      >
        <section className="w-full h-[5rem] flex flex-col items-center justify-start">
          <div
            role="presentation"
            className="w-full h-[5rem] px-[1.5rem] bg-[#ececec] dark:bg-[#656C73] flex flex-row items-center justify-start border-b-[1px] border-solid b border-[#ececec]"
          >
            <BiArrowFromLeft
              onClick={() => setIsAsideActive(!isAsideActive)}
              size="40"
              color={isDarkThemeActive ? '#ececec' : '#1c2731'}
              className="cursor-pointer"
            />
          </div>
        </section>
        <section className="w-full flex flex-row items-center justify-center px-[1.5rem] py-[1.5rem]">
          <ul className="w-full h-full flex flex-col items-center justify-start gap-4">
            <li className="w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer">
              <MdOutlineEmojiPeople color={isDarkThemeActive ? '#ececec' : '#1c2731'} size="16" />
              <p className="flex-1 h-full flex flex-row items-center justify-start pt-[1px]">
                <span className="inline-block font-sc-dream-400 text-[1rem] leading-[1.375rem] tracking-normal text-gray-700 dark:text-gray-100 pc:hover:text-gray-500 pc:dark:hover:text-gray-300 whitespace-nowrap">
                  Who am I?
                </span>
              </p>
            </li>
            <li className="w-full h-[36px] flex flex-row items-center justify-start gap-4 cursor-pointer ">
              <AiFillFolderOpen color={isDarkThemeActive ? '#ececec' : '#1c2731'} size="16" />
              <p className="flex-1 h-full flex flex-row items-center justify-start pt-[1px]">
                <span className="inline-block font-sc-dream-400 text-[1rem] leading-[1.375rem] tracking-normal text-gray-700 dark:text-gray-100 pc:hover:text-gray-500 pc:dark:hover:text-gray-300 whitespace-nowrap">
                  Project
                </span>
              </p>
            </li>
          </ul>
        </section>
        <div className="w-full flex flex-row items-center justify-center px-[1.5rem] ">
          <hr className="w-full h-[1px] bg-[#d9d9d9] dark:bg-[#ececec] border-0" />
        </div>
        <section className="w-full flex flex-row items-center justify-center px-[1.5rem] py-[1.5rem]">
          <div className="w-full flex flex-row items-center justify-start">
            <p className="flex flex-row items-center justify-center">
              <span className="inline-block font-sc-dream-200 text-[12px] leading-4 tracking-tight text-gray-300">
                CATEGORIES
              </span>
            </p>
          </div>
        </section>
      </aside>
    </>
  );
}

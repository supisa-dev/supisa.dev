import {Dispatch, SetStateAction} from 'react';
import {BiArrowFromLeft} from 'react-icons/bi';

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
        className={`fixed top-0 right-0 w-[300px] h-screen z-20 bg-white dark:bg-[#1C2731] transition-transform duration-200 ease-in-out ${
          isAsideActive ? '' : 'translate-x-full'
        }`}
      >
        <section className="w-full h-full flex flex-col items-center justify-start">
          <div
            role="presentation"
            className="w-full h-[80px] px-[24px] bg-[#ececec] dark:bg-[#656C73] flex flex-row items-center justify-start border-b-[1px] border-solid b border-[#ececec]"
          >
            <BiArrowFromLeft
              className="cursor-pointer"
              onClick={() => setIsAsideActive(!isAsideActive)}
              size="40"
              color={isDarkThemeActive ? '#cecece' : '#1C2731'}
            />
          </div>
        </section>
      </aside>
    </>
  );
}

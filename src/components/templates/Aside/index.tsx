import {Dispatch, SetStateAction} from 'react';
import {BiArrowFromLeft} from 'react-icons/bi';

interface AsideProps {
  isDarkThemeActive: boolean;
  isAsideActive: boolean;
  setIsAsideActive: Dispatch<SetStateAction<boolean>>;
}

export default function Aside({isDarkThemeActive, isAsideActive, setIsAsideActive}: AsideProps) {
  return (
    <aside
      className={`fixed top-0 right-0 w-[300px] h-screen z-10 bg-white dark:bg-[#1C2731] transition-transform duration-200 ease-in-out ${
        isAsideActive ? '' : 'translate-x-full'
      }`}
    >
      <section className="w-full h-full flex flex-col items-center justify-start">
        <div
          role="presentation"
          className="w-full h-[80px] px-[24px] flex flex-row items-center justify-end"
          onClick={() => setIsAsideActive(false)}
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
  );
}

import Link from 'next/link';
import Image from 'next/image';
import {GiHamburgerMenu} from 'react-icons/gi';
import ThemeToggleSwitch from '@/components/block/ThemeToggleSwitch';
import useDarkMode from '@/hooks/useDarkMode';

export default function Header() {
  const {isDarkTheme} = useDarkMode();
  return (
    <header className="fixed top-0 left-0 w-full max-w-[768px] h-[80px] bg-[#cecece] dark:bg-[#2B2B2B] border-b-[1px] border-solid b border-[#cecece] mx-[auto] my-0">
      <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center ">
        <div className="relative w-[90%] h-full">
          <Link
            href="/"
            className="absolute top-1/2 left-0 -translate-y-1/2 inline-block w-auto h-auto cursor-pointer"
          >
            <Image
              className="inline-block w-[2.8125rem] h-[2.8125rem]"
              width="45"
              height="45"
              src="/images/logo.webp"
              alt="supisa.dev website logo"
            />
          </Link>
          <ThemeToggleSwitch />
          <GiHamburgerMenu
            className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
            size="40"
            color={isDarkTheme ? '#cecece' : '#000000'}
          />
        </div>
      </div>
    </header>
  );
}

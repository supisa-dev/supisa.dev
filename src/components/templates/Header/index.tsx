import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import Aside from '@/components/templates/Aside';
import ThemeToggleSwitch from '@/components/block/ThemeToggleSwitch';

export default function Header() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);
  const [isAsideActive, setIsAsideActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') setIsDarkThemeActive(true);
    else setIsDarkThemeActive(false);
  }, []);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[768px] h-[80px] bg-[#ececec] dark:bg-[#656C73] border-b-[1px] border-solid b border-[#ececec]">
      <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center ">
        <div className="relative w-[90%] h-full">
          <Link
            href="/"
            className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-row items-center justify-center cursor-pointer"
          >
            <picture className="relative w-[45px] h-[45px]">
              <Image src="/images/logo.png" alt="supisa.dev website logo" fill />
            </picture>
          </Link>
          <ThemeToggleSwitch
            isDarkThemeActive={isDarkThemeActive}
            setIsDarkThemeActive={setIsDarkThemeActive}
          />
          <GiHamburgerMenu
            className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
            onClick={() => setIsAsideActive(!isAsideActive)}
            size="40"
            color={isDarkThemeActive ? '#cecece' : '#1C2731'}
          />
        </div>
      </div>
      <Aside
        isDarkThemeActive={isDarkThemeActive}
        isAsideActive={isAsideActive}
        setIsAsideActive={setIsAsideActive}
      />
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {CgMenuLeftAlt} from 'react-icons/cg';
import Aside from '@/components/templates/Aside';
import ThemeToggleSwitch from '@/components/common/ThemeToggleSwitch';

export default function Header() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);
  const [isAsideActive, setIsAsideActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') setIsDarkThemeActive(true);
    else setIsDarkThemeActive(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[5rem] bg-gray-1 dark:bg-gray-4 border-b-[1px] border-solid b border-gray-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center px-[1.25rem]">
          <div className="relative w-full h-full">
            <Link
              href="/"
              className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-row items-center justify-center cursor-pointer"
            >
              <picture className="block relative w-[2.8125rem] h-[2.8125rem]">
                <Image
                  src="/images/logo.png"
                  alt="supisa.dev 로고 이미지"
                  sizes="106px"
                  fill
                  priority
                />
              </picture>
            </Link>
            <ThemeToggleSwitch
              isDarkThemeActive={isDarkThemeActive}
              setIsDarkThemeActive={setIsDarkThemeActive}
            />
            <CgMenuLeftAlt
              className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsAsideActive(!isAsideActive)}
              size="40"
              color={isDarkThemeActive ? '#ececec' : '#1c2731'}
            />
          </div>
        </div>
      </header>
      <Aside isAsideActive={isAsideActive} setIsAsideActive={setIsAsideActive} />
    </>
  );
}

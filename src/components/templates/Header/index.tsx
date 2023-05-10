import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {CgMenuLeftAlt} from 'react-icons/cg';
import Aside from '@/components/templates/Aside';
import ThemeToggleSwitch from '@/components/templatesBlock/ThemeToggleSwitch';

export default function Header() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);
  const [isAsideActive, setIsAsideActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') setIsDarkThemeActive(true);
    else setIsDarkThemeActive(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-20 h-[5rem] w-full">
        <div className="backdrop absolute top-0 left-0 h-full w-full bg-gray-1 bg-opacity-25 bg-clip-padding backdrop-blur-sm dark:bg-opacity-40" />
        <div className="absolute top-0 left-0 flex h-full w-full flex-row justify-center px-[1.25rem]">
          <div className="relative h-full w-full">
            <Link
              href="/"
              className="absolute top-1/2 left-0 flex -translate-y-1/2 cursor-pointer flex-row items-center justify-center"
            >
              <picture className="relative block h-[2.8125rem] w-[2.8125rem]">
                <Image
                  src="/images/common/logo.png"
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
              onClick={() => setIsAsideActive(!isAsideActive)}
              size="40"
              color="#ececec"
              className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer rounded-md hover:bg-gray-4"
            />
          </div>
        </div>
      </header>
      <Aside isAsideActive={isAsideActive} setIsAsideActive={setIsAsideActive} />
    </>
  );
}

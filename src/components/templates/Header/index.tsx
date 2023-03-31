import {GiHamburgerMenu} from 'react-icons/gi';
import ThemeToggleSwitch from '@/components/block/ThemeToggleSwitch';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-[#cecece] dark:bg-[#2B2B2B] border-b-[1px] border-solid b border-[#cecece]">
      <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center ">
        <div className="relative w-[90%] h-full">
          <a
            className="absolute top-1/2 left-0 -translate-y-1/2 inline-block w-auto h-auto cursor-pointer"
            onClick={() => {
              console.log(document.documentElement);
            }}
          >
            <img src="images/logo.webp" width="45" height="45" alt="supisa website logo image" />
          </a>
          <ThemeToggleSwitch />
          <GiHamburgerMenu
            className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
            size="40"
            color="#cecece"
          />
        </div>
      </div>
    </header>
  );
}

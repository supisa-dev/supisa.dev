// Packages
import {GiHamburgerMenu} from 'react-icons/gi';
// Components
import ThemeToggleSwitch from '@/components/common/ThemeToggleSwitch';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-[#2B2B2B]">
      <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center ">
        <div className="relative w-[90%] h-full">
          <a className="absolute top-1/2 left-0 -translate-y-1/2 inline-block w-auto h-auto cursor-pointer">
            <img src="images/logo.webp" width="45" height="45" alt="supisa website logo image" />
          </a>
          <ThemeToggleSwitch />
          <GiHamburgerMenu
            className="absolute top-1/2 right-0 -translate-y-1/2"
            size="40"
            color="#cecece"
          />
        </div>
      </div>
    </header>
  );
}

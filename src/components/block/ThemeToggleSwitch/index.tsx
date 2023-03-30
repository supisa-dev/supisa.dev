// Package
import {useState} from 'react';
import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
// Store
import themeStore from '@/store/themeStore';

export default function ThemeToggleSwitch() {
  const {theme, setTheme, getTheme} = themeStore();
  return (
    <div
      onClick={() => setTheme('dark')}
      className={`absolute top-1/2 right-16 -translate-y-1/2 w-[70px] h-[30px] cursor-pointer ${
        theme === 'light' ? 'bg-[#525355]' : 'bg-[#FEDD40]'
      } rounded-3xl transition-all duration-200 ease-linear`}
    >
      <p
        className={`absolute top-1/2 ${
          theme === 'light' ? 'right-[30px]' : 'right-[15px]'
        } -translate-y-[40%] inline-block w-auto h-auto`}
      >
        {theme === 'light' ? (
          <span className="block font-SCoreDream700 text-[10px] leading-[14px] text-white">
            NIGHT
          </span>
        ) : (
          <span className="block font-SCoreDream700 text-[10px] leading-[14px] text-white">
            DAY
          </span>
        )}
      </p>
      <div
        className={`absolute top-1/2 ${
          theme === 'light' ? 'left-[46px]' : 'left-1'
        } -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white transition-all duration-200 ease-linear`}
      >
        {theme === 'light' ? (
          <BsFillMoonStarsFill
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            size="13"
            color="#FEDD40"
          />
        ) : (
          <BsFillSunFill
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            size="13"
            color="#FEDD40"
          />
        )}
      </div>
    </div>
  );
}

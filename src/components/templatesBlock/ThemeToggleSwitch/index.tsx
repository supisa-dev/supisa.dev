import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import {Dispatch, SetStateAction} from 'react';
import changeTheme from '@/utils/changeTheme';

interface ThemeToggleSwitchProps {
  isDarkThemeActive: boolean;
  setIsDarkThemeActive: Dispatch<SetStateAction<boolean>>;
}

export default function ThemeToggleSwitch({
  isDarkThemeActive,
  setIsDarkThemeActive,
}: ThemeToggleSwitchProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return;
        changeTheme();
        setIsDarkThemeActive(!isDarkThemeActive);
      }}
      onClick={() => {
        changeTheme();
        setIsDarkThemeActive(!isDarkThemeActive);
      }}
      className="absolute top-1/2 right-16 h-[30px] w-[70px] -translate-y-1/2 cursor-pointer rounded-3xl bg-[#FEDD40] transition-all duration-200 ease-linear dark:bg-[#525355]"
    >
      <p className="absolute top-1/2 right-[15px] flex h-[14px] -translate-y-[40%] flex-row items-center justify-center dark:right-[30px]">
        <span className="typo-10 inline-block font-sc-dream-700 text-white">
          {isDarkThemeActive ? 'NIGHT' : 'DAY'}
        </span>
      </p>
      <div className="absolute top-1/2 left-1 h-[20px] w-[20px] -translate-y-1/2 rounded-full bg-white transition-all duration-200 ease-linear dark:left-[46px]">
        {isDarkThemeActive ? (
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

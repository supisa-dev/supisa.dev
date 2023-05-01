import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import useDarkMode from '@/hooks/useDarkMode';
import {Dispatch, SetStateAction} from 'react';

interface ThemeToggleSwitchProps {
  isDarkThemeActive: boolean;
  setIsDarkThemeActive: Dispatch<SetStateAction<boolean>>;
}

export default function ThemeToggleSwitch({
  isDarkThemeActive,
  setIsDarkThemeActive,
}: ThemeToggleSwitchProps) {
  const {changeTheme} = useDarkMode();

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
      className="absolute top-1/2 right-16 -translate-y-1/2 w-[70px] h-[30px] cursor-pointer bg-[#FEDD40] dark:bg-[#525355] rounded-3xl transition-all duration-200 ease-linear"
    >
      <p className="absolute top-1/2 right-[15px] dark:right-[30px] -translate-y-[40%] h-[14px] flex flex-row items-center justify-center">
        <span className="inline-block font-sc-dream-700 typo-10 text-white">
          {isDarkThemeActive ? 'NIGHT' : 'DAY'}
        </span>
      </p>
      <div className="absolute top-1/2 left-1 dark:left-[46px] -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white transition-all duration-200 ease-linear">
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

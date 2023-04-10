import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import useDarkMode from '@/hooks/useDarkMode';

export default function ThemeToggleSwitch() {
  const {isDarkTheme, changeTheme} = useDarkMode();

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') changeTheme();
      }}
      onClick={() => {
        changeTheme();
      }}
      className="absolute top-1/2 right-16 -translate-y-1/2 w-[70px] h-[30px] cursor-pointer bg-[#FEDD40] dark:bg-[#525355] rounded-3xl transition-all duration-200 ease-linear"
    >
      <p className="absolute top-1/2 right-[15px] dark:right-[30px] -translate-y-[40%] inline-block w-auto h-auto">
        <span className="block font-SCoreDream700 text-[10px] leading-[14px] text-white">
          {isDarkTheme ? 'NIGHT' : 'DAY'}
        </span>
      </p>
      <div className="absolute top-1/2 left-1 dark:left-[46px] -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white transition-all duration-200 ease-linear">
        {isDarkTheme ? (
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

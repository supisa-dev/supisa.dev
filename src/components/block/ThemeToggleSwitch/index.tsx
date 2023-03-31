import {useState} from 'react';
import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';

export default function ThemeToggleSwitch() {
  const [localTheme, setLocalTheme] = useState(false);
  return (
    <div
      onClick={() => {
        setLocalTheme((prev) => !prev);
      }}
      className={`absolute top-1/2 right-16 -translate-y-1/2 w-[70px] h-[30px] cursor-pointer ${
        localTheme ? 'bg-[#525355]' : 'bg-[#FEDD40]'
      } rounded-3xl transition-all duration-200 ease-linear`}
    >
      <p
        className={`absolute top-1/2 ${
          localTheme ? 'right-[30px]' : 'right-[15px]'
        } -translate-y-[40%] inline-block w-auto h-auto`}
      >
        {localTheme ? (
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
          localTheme ? 'left-[46px]' : 'left-1'
        } -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white transition-all duration-200 ease-linear`}
      >
        {localTheme ? (
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

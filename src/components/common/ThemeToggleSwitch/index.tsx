import {useState} from 'react';

export default function ThemeToggleSwitch() {
  const [theme, setTheme] = useState(false);
  return (
    <div
      className={`absolute top-1/2 right-16 -translate-y-1/2 w-[60px] h-[20px] ${
        theme ? 'bg-green-400' : 'bg-white'
      } rounded-3xl transition-color ease-linear delay-700`}
    >
      <div
        onClick={() => setTheme((prev) => !prev)}
        className={`absolute top-1/2 left-0 -translate-y-1/2 ${
          theme ? 'translate-x-full' : ''
        } w-[30px] h-[30px] bg-black rounded-[50%] cursor-pointer transition ease-linear delay-100`}
      />
    </div>
  );
}

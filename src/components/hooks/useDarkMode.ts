import {useState} from 'react';

export default function useDarkMode() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    if (isDarkTheme) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setIsDarkTheme((prev) => !prev);
  };

  return {isDarkTheme, setIsDarkTheme, changeTheme};
}

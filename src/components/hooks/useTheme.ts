import {useState} from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    if (theme) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setTheme((prev) => !prev);
  };

  return {theme, changeTheme};
}

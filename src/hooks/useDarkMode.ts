import themeStore from '@/store/themeStore';

export default function useDarkMode() {
  const isDarkTheme = themeStore((state) => state.isDarkTheme);
  const setIsDarkTheme = themeStore((state) => state.setIsDarkTheme);

  const changeTheme = () => {
    if (isDarkTheme) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      setIsDarkTheme(false);
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setIsDarkTheme(true);
    }
  };

  return {isDarkTheme, changeTheme};
}

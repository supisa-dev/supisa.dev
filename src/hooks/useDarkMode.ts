import themeStore from '@/store/themeStore';

export default function useDarkMode() {
  const {isDarkTheme, setIsDarkTheme, getIsDarkTheme} = themeStore.getState();

  const changeTheme = () => {
    if (getIsDarkTheme()) {
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

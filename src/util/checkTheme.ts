import themeStore from '@/store/themeStore';

const setIsDarkTheme = themeStore((state) => state.setIsDarkTheme);

const checkTheme = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    setIsDarkTheme();
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
    setIsDarkTheme();
  }
};

export default checkTheme;

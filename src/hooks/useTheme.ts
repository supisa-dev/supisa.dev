import themeStore from '@/store/themeStore';

export default function useTheme() {
  const theme = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);
  const getTheme = themeStore((state) => state.getTheme);

  return {theme, setTheme, getTheme};
}

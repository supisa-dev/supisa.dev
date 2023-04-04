import {create} from 'zustand';

interface ThemeState {
  isDarkTheme: boolean;
  setIsDarkTheme: (isNewDarkTheme: boolean) => void;
}

const themeStore = create<ThemeState>()((set) => ({
  isDarkTheme: false,
  setIsDarkTheme: (isNewDarkTheme) => set({isDarkTheme: isNewDarkTheme}),
}));

export default themeStore;

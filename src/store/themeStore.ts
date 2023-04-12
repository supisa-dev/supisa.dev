import {create} from 'zustand';

interface ThemeState {
  isDarkTheme: boolean;
  setIsDarkTheme: (isNewDarkTheme: boolean) => void;
  getIsDarkTheme: () => boolean;
}

const themeStore = create<ThemeState>()((set, get) => ({
  isDarkTheme: false,
  setIsDarkTheme: (isNewDarkTheme) => set({isDarkTheme: isNewDarkTheme}),
  getIsDarkTheme: () => {
    return get().isDarkTheme;
  },
}));

export default themeStore;

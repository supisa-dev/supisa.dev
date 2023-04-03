import {create} from 'zustand';

interface ThemeState {
  isDarkTheme: boolean;
  setIsDarkTheme: () => void;
}

const themeStore = create<ThemeState>()((set) => ({
  isDarkTheme: false,
  setIsDarkTheme: () => set((state) => ({isDarkTheme: !state.isDarkTheme})),
}));

export default themeStore;

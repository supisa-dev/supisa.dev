import {create} from 'zustand';

interface ThemeState {
  isDarkMode: boolean;
  setIsDarkMode: (newState: boolean) => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: (newState) => set({isDarkMode: newState}),
}));

export default useThemeStore;

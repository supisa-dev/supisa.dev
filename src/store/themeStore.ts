import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface ThemeState {
  theme: string;
  setTheme: (newTheme: string) => void;
  getTheme: () => string;
}

const themeStore = create<ThemeState>()(
  devtools(
    persist(
      (set, get) => ({
        theme: 'light',
        setTheme: (newTheme) =>
          set({
            theme: newTheme,
          }),
        getTheme: () => get().theme,
      }),
      {
        name: 'theme-storage',
      }
    )
  )
);

export default themeStore;

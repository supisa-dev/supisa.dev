/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./posts/**/*.mdx', './src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      pc: {min: '1024px'},
    },
    extend: {
      fontFamily: {
        'sc-dream-100': ['var(--font-sc-dream-thin)', 'sans-serif'],
        'sc-dream-200': ['var(--font-sc-dream-extra-light)', 'sans-serif'],
        'sc-dream-300': ['var(--font-sc-dream-light)', 'sans-serif'],
        'sc-dream-400': ['var(--font-sc-dream-regular)', 'sans-serif'],
        'sc-dream-500': ['var(--font-sc-dream-medium)', 'sans-serif'],
        'sc-dream-600': ['var(--font-sc-dream-bold)', 'sans-serif'],
        'sc-dream-700': ['var(--font-sc-dream-extra-bold)', 'sans-serif'],
        'sc-dream-800': ['var(--font-sc-dream-heavy)', 'sans-serif'],
        'sc-dream-900': ['var(--font-sc-dream-black)', 'sans-serif'],
      },
      colors: {
        'dark-1': '#1c2731',
        'gray-1': '#ececec',
        'gray-2': '#d9d9d9',
        'gray-3': '#a4a4a4',
        'gray-4': '#656c73',
      },
    },
  },
  plugins: [],
};

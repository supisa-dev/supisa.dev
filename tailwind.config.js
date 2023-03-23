/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: {min: '769px'},
      lg: {min: '1024px'},
    },
    extend: {
      fontFamily: {
        's-core-dream-100': ['S Core Dream 100', 'sans-serif'],
        's-core-dream-200': ['S Core Dream 200', 'sans-serif'],
        's-core-dream-300': ['S Core Dream 300', 'sans-serif'],
        's-core-dream-400': ['S Core Dream 400', 'sans-serif'],
        's-core-dream-500': ['S Core Dream 500', 'sans-serif'],
        's-core-dream-600': ['S Core Dream 600', 'sans-serif'],
        's-core-dream-700': ['S Core Dream 700', 'sans-serif'],
        's-core-dream-800': ['S Core Dream 800', 'sans-serif'],
        's-core-dream-900': ['S Core Dream 900', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

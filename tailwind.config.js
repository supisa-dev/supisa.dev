/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

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
        SCoreDream100: ['S Core Dream 100', 'sans-serif'],
        SCoreDream200: ['"S Core Dream 200"', 'sans-serif'],
        SCoreDream300: ['"S Core Dream 300"', 'sans-serif'],
        SCoreDream400: ['"S Core Dream 400"', 'sans-serif'],
        SCoreDream500: ['"S Core Dream 500"', 'sans-serif'],
        SCoreDream600: ['"S Core Dream 600"', 'sans-serif'],
        SCoreDream700: ['"S Core Dream 700"', 'sans-serif'],
        SCoreDream800: ['"S Core Dream 800"', 'sans-serif'],
        SCoreDream900: ['"S Core Dream 900"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

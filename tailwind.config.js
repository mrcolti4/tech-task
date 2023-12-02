/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#3470FF',
      secondary: '#0B44CD',
      dark: {
        20: 'rgba(18, 20, 23, 0.2)',
        50: 'rgba(18, 20, 23, 0.5)',
        100: 'rgba(18, 20, 23, 1)',
        secondary: '#363535',
      },
      light: {
        prime: '#fff',
        semi: '#F9F9F9',
      },
      gray: '#8A8A89',
    },
    fontFamily: {
      primary: ['Manrope', 'sans-serif'],
      secondary: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};

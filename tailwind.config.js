/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        container: '1183px',
      },
      height: {
        cardImg: '268px',
      },
      fontSize: {
        modal: ['18px', '24px'],
        tags: ['12px', '18px'],
      },
      backgroundImage: {
        home: "url('./components/assets/bg-home.jpg')",
        select: "url('./components/assets/chevron-down.svg')",
      },
    },
    colors: {
      primary: '#3470FF',
      secondary: '#0B44CD',
      dark: {
        10: 'rgba(18, 20, 23, 0.1)',
        20: 'rgba(18, 20, 23, 0.2)',
        50: 'rgba(18, 20, 23, 0.5)',
        100: 'rgba(18, 20, 23, 1)',
        secondary: '#363535',
      },
      light: {
        prime: '#fff',
        semi: '#F9F9F9',
        cloud: '#F7F7FB',
      },
      gray: {
        20: 'rgba(138, 138, 137, 0.2)',
        100: '#8A8A89',
      },
    },
    fontFamily: {
      primary: ['Manrope', 'sans-serif'],
      secondary: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};

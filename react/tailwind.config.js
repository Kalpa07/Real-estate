// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--color-secondary)',
        grey: 'var(--color-grey)',
        neutral: 'var(--neutral)',
        accent: 'var(--accent)',
        white: 'var(--white)',
        black: 'var(--black)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  purge: false,
};

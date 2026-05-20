/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          2: '#0f0f0f',
          3: '#141414',
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};

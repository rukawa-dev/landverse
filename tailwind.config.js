/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          bg: '#011627',
          card: '#0b2942',
          accent: '#7fdbca',
          primary: '#82aaff',
          secondary: '#5f7e97',
          text: '#d6deeb',
        }
      },
      fontFamily: {
        hylia: ['HyliaSerif', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        'bloom': '0 0 20px rgba(127, 219, 202, 0.2)',
        'bloom-hover': '0 0 40px rgba(127, 219, 202, 0.4)',
      }
    },
  },
  plugins: [],
}

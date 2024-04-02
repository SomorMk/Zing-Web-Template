/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F66B0E',
        secondary: '#112B3C',
        pera: '#828282'
      },
      fontFamily: {
        'sou': ['Source Sans 3','sans-serif']
      }
    },
  },
  plugins: [],
}
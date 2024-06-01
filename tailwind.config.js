/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#318CE7'
      },
      fontFamily: {
        'poppins' : 'Poppins'
      }
    },
  },
  plugins: [],
}
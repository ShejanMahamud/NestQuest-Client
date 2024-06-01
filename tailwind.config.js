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
      },
      backgroundImage: {
        'login': "linear-gradient(180deg, rgba(4, 26, 60, 0.45) 0%, rgba(4, 26, 60, 0.90) 100%), url('https://i.ibb.co/mtVcvCx/luke-stackpoole-e-Wq-Og-J-lfi-I-unsplash.jpg')",
        'register': "linear-gradient(180deg, rgba(4, 26, 60, 0.45) 0%, rgba(4, 26, 60, 0.90) 100%), url('https://i.ibb.co/Qc6KpTQ/alexander-andrews-Dr6-VBM0-KNsw-unsplash.jpg')",
        'featured' : 'linear-gradient(90deg, #FFF6E6 0%, #FFF 100%)'
      }
    },
  },
  plugins: [],
}
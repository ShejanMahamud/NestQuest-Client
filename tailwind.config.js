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
        'banner' : 'linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(67, 97, 238, 0.30) 100%)',
        'advertise' : 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)'
      },
      borderRadius: {
        'custom-banner': '0px 0px 800px 800px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
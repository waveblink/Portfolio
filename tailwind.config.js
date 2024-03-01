/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#265073',
        secondary: '#2D9596',
        accent: '#9AD0C2',
        background: '#F1FADA',
      },
    },
  },
  plugins: [require('daisyui')],
}

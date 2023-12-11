/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'font-cinzel' : "'Cinzel', serif",
        'font-inter' : "'Inter', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}


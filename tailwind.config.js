/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Arial', 'sans-serif'],
        karla: ['Karla'],
        noto: ['Noto Serif'],
        playwrite: ['Playwrite Ísland'],
        colors: {
          body: "#DCDCDC",
          "selected-text": "#A3A3FF",
          theme: "#3F3FFF",
          nav: "#404053",
          secondary: "#9191A4",
          badge: "#3F3F51",
          "input-border": "#565666",
          input: "#2A2A35",
        },
      },
    },
  },
  plugins: [require('daisyui'),
  ],
}
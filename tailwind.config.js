/** @type {import('tailwindcss').Config} */
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
        
      },
    },
  },
  plugins: [    require('daisyui'),
  ],
}
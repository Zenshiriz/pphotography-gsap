/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-bg': "url('/src/assets/nav-bg.png')",
        'card1-bg': "url('/src/assets/card1.png')",
        'card2-bg': "url('/src/assets/card2.png')",
        'card3-bg': "url('/src/assets/card3.png')",
        'card4-bg': "url('/src/assets/card4.png')",
      }
    },
  },
  plugins: [],
}
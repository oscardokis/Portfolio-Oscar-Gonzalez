/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'RecipesAndDrinks':"url('./src/assets/RecipesAndDrinks.gif')",
      },
      screens:{
        xs: '370px',
      }
    },
  },
  plugins: [],
}
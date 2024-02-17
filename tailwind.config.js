/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
sm: "500px",
lg: "650px",
    },
    extend: {
      fontFamily:{
        customFont: "oswald",
      },
    },
  },
  plugins: [],
}


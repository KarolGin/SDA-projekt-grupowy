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
    spacing:{
      "128": "43.75rem",
      "5": "15px",
      "3": "50px",
      "4": "150px",
      
    },
  
  },
  plugins: [],
}


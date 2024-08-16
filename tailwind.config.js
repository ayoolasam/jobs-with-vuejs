/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondaryColor:"#eb2f64",
        primaryColor:"#BA265D",
        layout:" #ccc;"

      }
    },
    fontFamily:{
      OpenSans:["open sans, sans serif"]
    }
    
  },
  plugins: [],
}


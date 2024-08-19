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
        layout:" #ccc;",
        FooterColor:"#333",
        input:"#f4f2f2"

      }
    },
    fontFamily:{
      OpenSans:["open sans, sans serif"]
    }
    
  },
  plugins: [],
}


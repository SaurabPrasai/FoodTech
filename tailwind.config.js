const tailWindCss=require("tailwindcss")
tailWindCss.config
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
    colors:{
      primary:'#FF6363'
    },
    fontFamily:{
      
    }
    },
  },
  plugins: [],
}
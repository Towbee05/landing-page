/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-background" : "#FAFAFA",
        "custom-button-1" : "#4D96A9",
        "custom-button-2" : "#855FB1",
        "custom-text" : "#87879D",
        "custom-inner-text" : "#D9B8FF",
        "custom-line": "#D8D8D8",
        "custom-hover" :"#B18BDD",
        "custom-hover-2" : "#71C0D4",
        "custom-hover-text" : "#8FE3F9",
        "custom-bg-image": "url('/assets/desktop/image-footer.jpg')",
      },
      gap:{
        "11" : "52px"
      },
      space:{
        "13" : "52px"
      },
      padding:{
        "custom" :"22px",
        "custom-1" : "52px",
        "custom-xxs" : "39.5px"
      },
      fontSize:{
        "heading" : ["40px", "44px"],
        "normal" : ["16px", "26px"]
      },
      borderRadius:{
        "xxs" : "29px"
      },
      letterSpacing:{
        "custom" : "4px"
      },
      screens:{
        "xxs" : {
          "min" : "768px",
          "max" : "1200px",
        },
        "xs" : {
          "min" : "1200px"
        }
      },
      backgroundImage:{
        "custom-image-1" : 'url("../assets/desktop/image-footer.jpg")',
        "custom-image-2" : 'url("../assets/tablet/image-footer.jpg")',
        "custom-image-3" : 'url("../assets/mobile/image-footer.jpg")',
      }
    },
  },
  plugins: [],
}


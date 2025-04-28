/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        skyblue: "#00baf2",
        lightneela: "#00afe3",
        darkneela: "rgb(0 41 112)",
        lightcolor: "#f5f5f5",
     
        whiteshade: " #f5f7fa",
        lightblue: "#4ccff6",
        line: "rgb(204 204 204)",
        
        grayish: "#8297bc",
        darkgrey: "#505050",
        faintblue:'#E8F8FD',
        fontColor:'#505050'
      },
      fontSize: {
        " normal_font": "16px",
        eighteenp: "18px",
      },
      boxShadow: {
        box_shadow: "10px 10px 5px #e6e6e6",
      },
      screens: {
        verySmall: {
          max: "399px",
        },
      small: {
        max:"550px"
      },
        medium: {
          max:"768px",
        },
        large: {
          max: "1070px",
        },
      },
    },
  },
  plugins: [],
};

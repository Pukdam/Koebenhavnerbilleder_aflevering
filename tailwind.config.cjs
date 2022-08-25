/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      H1red: "#F23827",
      H2blue: "#221F73",
      H3dblue: "#161354",
      Pblack: "#000000",
      Pgray: "#494949",
      BackgroundOW: "#F3EEEE",
      Pwhite: "#FFFFFF",
      Decogreen: "#D4E581",
    },
    extend: {
      fontFamily: "'Biryani', system-ui, sans-serif",
      fontFamily: "'Noto Sans JP', system-ui, sans-serif",
      fontFamily: "'Rubik Dirt', system-ui, cursive",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

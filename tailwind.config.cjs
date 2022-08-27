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
      BackgroundOW: "#ECECE0",
      Pwhite: "#FFFFFF",
      Decogreen: "#D4E581",
    },
    extend: {
      fontFamily: {
        biryani: "'Biryani', system-ui, sans-serif",
        notosans: "'Noto Sans JP', system-ui, sans-serif",
        rubikdirt: "'Rubik Dirt', system-ui, cursive",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

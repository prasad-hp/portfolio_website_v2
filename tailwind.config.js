/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "navy" : "#0a192f",
      "Light-Navy": "#112240",
      "Lightest-Navy":	"#233554",
      "Slate":"#8892b0",
      "Light-Slate":"#a8b2d1",
      "Lightest-Slate": "#ccd6f6",
      "Light-White":"#e6f1ff",
      "Green":"#64ffda",
    },
  },
  plugins: [],
}
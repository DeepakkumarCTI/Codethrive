/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        ink: "#261814", // primary heading / text
        clay: "#594139", // body text
        rust: "#ab3500", // link / eyebrow accent
        ember: "#ff6b35", // primary CTA / stat accent
        blush: "#f7ddd5", // soft tag / faint text bg
        sand: "#fff8f6", // section background
        cream: "#e1bfb5", // light display accent
        hairline: "rgba(225,191,181,0.3)", // border color
      },
    },
  },
  plugins: [],
};

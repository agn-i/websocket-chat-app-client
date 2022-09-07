/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#2979FF",
        secondary: "#F3F3F3",
        dark: "#353535",
      },
    },
  },
  plugins: [],
};

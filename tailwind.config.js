/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1464F4",
        royal: "#0750C8",
        light: "#DCEBFF",
        sky: "#55B8FF",
        darkNavy: "#071B49",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

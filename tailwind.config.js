/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#0EA5A4",
        accent: "#F5C77A",

        "brandbg": "#3bca28",
        "brandtext": "#070707",
      },
    },
  },
  plugins: [],
};

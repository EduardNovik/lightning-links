/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        yellow: "#fab60f",
        "grigio-100": "#111924",
        "grigio-80": "#242c3d",
        "grigio-60": "#5a6476",
        "grigio-40": "#c7ccd3",
        "grigio-20": "#eceff3",
        "grigio-0": "#fff",
      },
    },
    fontFamily: {
      gosha: ["Gosha Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};

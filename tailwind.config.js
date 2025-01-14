/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      height: {
        19: "75px",
      },
    },
  },
  plugins: [],
};
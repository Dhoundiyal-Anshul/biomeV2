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
        indie: ["Indie Flower", "cursive"],
      },
      height: {
        19: "75px",
      },
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  variants: {},
  theme: {
    extend: {
      // Add custom styles for scrollbar and html
      '.body::-webkit-scrollbar': {
        display: 'none'
      },
      html: {
        scrollBehavior: 'smooth'
      }
    }
  }
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { max: "991px" },
      // => @media (max-width: 991px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    extend: {
      transformOrigin: {
        0: "0%",
      },
    },
  },
  plugins: [],
};

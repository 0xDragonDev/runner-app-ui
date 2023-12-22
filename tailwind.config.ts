export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#276ef1",
        hover: "#1d51b3",
        heading: "#190a32",
        contrast: "#f1aa27",
        body: "#676f67",
      },
      fontSize: {
        "4xl": "38px",
        "5xl": "52px",
        "7xl": "70px",
      },
    },
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
      xl: "1920px",
      xxl: "2560px",
    },
  },
  plugins: [],
  important: true,
};

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      eggwhite: "#E7E0C9",
      blueish: "#C1CFC0",
      darkerblue: "#6B7AA1",
      darkestblue: "#11324D",
      black: "#000000",
      white: "#ffffff",
      yellow: "#FFBD35",
    },

    screens: {
      xs: "540px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

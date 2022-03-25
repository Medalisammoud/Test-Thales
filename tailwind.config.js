module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#e4f2f9",
        "light-gray": "#f5f6fa",
        "blue-primary": "#3cc6f0",
        "dark-blue": "#0075e8",
      },
      screens: {
        contH: "1000px",
      },
      height: {
        100: "87%",
        200: "132vh",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        NavBar: "0px 0px 20px rgba(0, 214, 245, 0.5)",
        Button: "0px 0px 50px rgba(16, 239, 255, 0.5)",
      },
    },
    plugins: [],
  },
};

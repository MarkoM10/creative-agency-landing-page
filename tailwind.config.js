const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#ae3737",
          200: "#c73f3f",
          300: "#e04747",
          400: "#f94f4f",
          500: "#fa6161",
          600: "#fa7272",
          700: "#fb8484",
          800: "#fb9595",
          900: "#fca7a7",
        },
        dark: {
          100: "#121217",
          200: "#14141a",
          300: "#17171e",
          400: "#191921",
          500: "#303037",
          600: "#47474d",
          700: "#5e5e64",
          800: "#75757a",
          900: "#8c8c90",
        },
      },
      fontFamily: {
        commisioner: ['"Commisioner"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('/assets/image-hero.jpg')",
        sectionOne: "url('/assets/image-strategic.jpg')",
        heroMobile: "url('/assets/hero-mobile.jpg')",
      },
      spacing: {
        left15: "17%",
      },
    },
  },
  plugins: [],
};

const defaultColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        orange: {
          DEFAULT: "#ff6725",
          dark: "#ff3f25",
          light: "#fef7f3",
        },
        brown: "#453a34",
        green: "#00b579",
      },
    },
  },
  plugins: [],
};

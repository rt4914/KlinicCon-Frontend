/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      orange: '#ff6725',
      'orange-dark': '#ff3f25',
      'orange-light': '#fef7f3',
      brown: '#453a34',
      green: '#00b579',
    },
  },
};
export const plugins = [];
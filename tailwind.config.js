/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#ff6725',
        'orange-dark': '#ff3f25',
        'orange-light': '#fef7f3',
        'brown': '#453a34',
        'green': '#00b579',
      },
    },
  },
  plugins: [],
}

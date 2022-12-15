/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme': '#9bd817',
        'theme-light': '#eaf2cd',
        'theme-text': '#6f7264',
      },
      fontFamily: {
        sans: ['Roboto', 'Franklin Gothic Medium', 'Tahoma', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

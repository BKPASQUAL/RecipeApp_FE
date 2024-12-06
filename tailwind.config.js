/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-pink": "#f8b3d1",
        "rose-pink": "#ff6b81", 
        "dark-pink": "#c72c4e", 
        "pale-rose": "#f7c5d5", 
        "white-snow": "#fefefe",
        "blush-white": "#f9f9f9", 
        "light-pink":"#fef8f8",
      },
    },
  },
  plugins: [],
};
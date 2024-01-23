/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": `url('./src/assets/Background.png')`,
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

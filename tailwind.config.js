/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6f8f4",
          100: "#eef2e8",
          200: "#dde5d2",
          300: "#c3d1b2",
          400: "#a1b88c",
          500: "#548A34", // 메인 색상
          600: "#4a7b2e",
          700: "#3f6727",
          800: "#355523",
          900: "#2d481f",
        },
      },
    },
  },
  plugins: [],
};

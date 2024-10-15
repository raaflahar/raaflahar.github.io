/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#fff682",
        secondary: "#ca5826",
        tertiary: "#6c3318",
        black: "#0e0a0a",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "500px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef5ff",
          100: "#dae8ff",
          200: "#bdd7ff",
          300: "#90beff",
          400: "#5b9aff",
          500: "#3e7bfc",
          600: "#1f55f1",
          700: "#173fde",
          800: "#1935b4",
          900: "#1b318d",
          950: "#152056",
        },
      },
    },
  },
  plugins: [],
};

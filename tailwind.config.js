/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--zinc-900": theme("colors.zinc.900"),
        },
      });
    },
  ],
};

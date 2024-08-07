// tailwind.config.js
const { nextui } = require("@nextui-org/theme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

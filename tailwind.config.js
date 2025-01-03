/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all your files
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {}, // You can extend Tailwind's default theme here if needed
  },
  plugins: [], // Add Tailwind plugins here if needed
};
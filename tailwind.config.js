/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        'mt5-bg': '#ffffff',      // White background
        'mt5-nav': '#f2f2f2',     // Light gray for headers/navs
        'mt5-blue': '#0059b3',    // Darker blue for light theme readability
        'mt5-red': '#d91a1a',     // Vivid red
        'mt5-border': '#e0e0e0',  // Light border
      }
    },
  },
  plugins: [],
}
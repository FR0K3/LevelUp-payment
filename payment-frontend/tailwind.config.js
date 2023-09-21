/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#f3f4f6",
        "primary": "#ff9200",
      },
      fontFamily: {
        'PublicSans': ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


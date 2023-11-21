/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#00A19B',
        orange: '#EB6F25'
      }
    },
  },
  plugins: [],
}


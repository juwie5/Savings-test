/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Gilroy-Bold", ...defaultTheme.fontFamily.sans],
      "serif": ["Gilroy-Regular", ...defaultTheme.fontFamily.serif],
      "mono": ["Gilroy-Medium", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors:{
        'purple': '#432361',
        'purple-2': '#783EAD',
        'purple-3' : '#9B51E0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/index.html',],
    prefix: 'tw-',
    important: true,
  theme: {
    extend: {},
    screens:{
      'laptop':'1024px',
      '3xl':'1600px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

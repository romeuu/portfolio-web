/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair', 'sans-serif'],
        sans3: ['Source Sans 3', 'sans-serif']
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [],
}


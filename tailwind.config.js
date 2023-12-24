/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '768px'},
        'md': {'max': '660px'},
        'mdmin': {'min': '661px'},
      },
    },
  },
  plugins: [],
}


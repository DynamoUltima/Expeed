module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  // or 'media' or 'class'
  theme: {
    extend: {},
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),

  ],
}

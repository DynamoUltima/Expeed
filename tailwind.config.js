module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}'],
  // or 'media' or 'class'
  theme: {
    extend: {},
  },
 
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('daisyui'),
    // require('@tailwindcss/forms')
  ],
}

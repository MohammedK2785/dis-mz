/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './javascripts/**/*.hbs',
    './javascripts/**/*.js',
    './common/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'sky-primary': '#0284c7',
        'sky-primary-dark': '#0369a1',
        'sky-accent': '#38bdf8',
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-700': '#404040',
        'neutral-900': '#171717',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

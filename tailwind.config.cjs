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
        // Legacy colors (kept for compatibility)
        'sky-primary': '#0284c7',
        'sky-primary-dark': '#0369a1',
        'sky-accent': '#38bdf8',
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-700': '#404040',
        'neutral-900': '#171717',
        // Mza3et Sky Blue Design Tokens
        'mza-sky': '#0ea5e9',           // Main brand color (sky blue)
        'mza-sky-dark': '#0369a1',      // Darker header color
        'mza-sky-light': '#7dd3fc',     // Lighter accent
        'mza-accent': '#06b6d4',        // Gradient-friendly accent (cyan)
        'mza-bg': '#f8fafc',            // Light neutral background
        'mza-border': '#e2e8f0',        // Subtle border color
      },
      fontFamily: {
        'mza-sans': ['Cairo', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

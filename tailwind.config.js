/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2f7',
          100: '#d5e0ed',
          200: '#a8bfda',
          300: '#7b9ec7',
          400: '#4e7db4',
          500: '#2d5c99',
          600: '#1e3f6b',
          700: '#152d4e',
          800: '#0d1e35',
          900: '#080f1c',
          950: '#040810',
        },
        brand: {
          red:   '#DC2626',
          'red-dark': '#b91c1c',
          navy:  '#0d1e35',
          'navy-mid': '#152d4e',
          'navy-light': '#1e3f6b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

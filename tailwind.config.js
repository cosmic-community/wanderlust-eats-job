/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d7b0',
          300: '#e9bb7e',
          400: '#df9a4e',
          500: '#d6802e',
          600: '#c66a23',
          700: '#a5511f',
          800: '#854220',
          900: '#6c381e',
          950: '#3a1b0d',
        },
        earth: {
          50: '#f7f6f4',
          100: '#eceae4',
          200: '#d8d3c9',
          300: '#c0b8a8',
          400: '#a79a86',
          500: '#95856e',
          600: '#887562',
          700: '#726153',
          800: '#5e5047',
          900: '#4e433c',
          950: '#2a2320',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
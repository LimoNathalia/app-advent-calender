/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000407',
        white: '#f5f7f7',
        red: ' #c54245',
        secondary: '#edb518',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#efeee9',
      },
      fontFamily: {
        hn: ['"Space Grotesk"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Anton', 'Impact', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main':'#180161',
        'primary':'#4F1787',
        'secondary':'#EB3678',
        'ligtBlue':'#FB773C',
      },
    },
  },
  plugins: [],
}
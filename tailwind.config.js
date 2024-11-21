/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        600: '600', // Add custom font weight 600
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13105B',
        secondary: '#FFD700',
        dark: {
          DEFAULT: '#1a1a2e',
          lighter: '#2a2a40'
        }
      },
      backgroundImage: {
        'website': "url('/fundowebsite.png')",
      },
    },
  },
  plugins: [],
}
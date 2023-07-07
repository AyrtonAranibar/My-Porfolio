/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'regal-blue': '#243c5a',
        pblue: {
          light: '#e2efff',
          DEFAULT: '#87b5f0',
          dark: '#0f0f1f',
        },
      },
    }
  },
  plugins: [],
}


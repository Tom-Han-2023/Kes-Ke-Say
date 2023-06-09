/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/components/**/*.{html,ts,tsx}',
    './server/public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'french-blue': '#364da1',
        'wine-red': '#4f0404',
      },
    },
  },
  plugins: [],
}

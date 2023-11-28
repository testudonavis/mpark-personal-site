/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mud': '#D79922',
        'sand': '#EFE2BA',
        'red': '#F13C20',
        'blue': '#4056A1',
        'light-blue': '#C5CBE3',
        'comp': "#e3ddc5"
      }
    }
  },
  plugins: [],
}

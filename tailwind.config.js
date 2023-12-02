/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        'comp': "#e3ddc5",
        'primary-bg': '#D7E8D4',
        'primary-bg-2': '#F3ECE0',
        'prim-600': '#F6D737',
        'prim-text': '#333333',
        'prim-text-2': '#5C4033',
        'secondary-text': '#704214',
        'tertiary-text': '#2F3E46',
        'offset-text': '#F8F5F1',
      }
    }
  },
  plugins: [],
}

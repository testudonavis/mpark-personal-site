/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderWidth: {
        pf: '10px',
      },
      boxShadow: {
        inner2: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
        tag: '0px -2px 4px 0px rgb(0 0 0 / 0.1)',
      },
      colors: {
        mud: '#D79922',
        sand: '#EFE2BA',
        red: '#F13C20',
        blue: '#4056A1',
        'light-blue': '#C5CBE3',
        comp: '#e3ddc5',
        'primary-bg': '#D7E8D4',
        'primary-bg-2': '#F3ECE0',
        'prim-600': '#F6D737',
        'prim-text': '#333333',
        'prim-text-2': '#5C4033',
        'secondary-text': '#704214',
        'tertiary-text': '#2F3E46',
        'offset-text': '#F8F5F1',
        'pic-frame': '#FCFAF2',
        'pinwheel-blue': '#3461A4',
        'pinwheel-fgreen': '#2B7A4B',
        'pinwheel-red': '#8C2F39',
        'pinwheel-teal': '#217378',
        'pinwheel-purp': '#5E345E',
        'pinwheel-oj': '#C3544A',
        'pinwheel-ogreen': '#708238',
        'pinwheel-slate': '#4B4E6D',
      },
    },
  },
  plugins: [],
};

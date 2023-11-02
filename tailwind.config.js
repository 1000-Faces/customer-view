const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        green: '#007400',
        'hover-green': '#006600',
        yellow: '#FFC700',
        lgreen: '#ECF8F8',
        'txt-gray': '#4F5052',
        'lgray': '#898585',
        'primary':'#007400',
        'second': '#19AB4F',
        'red':'#C50000',
        'lyellow':'#FAFFC2',
        'red2':'#FE483C'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px'
        // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin.cjs'), addDynamicIconSelectors()]
}

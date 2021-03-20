const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
        serif: [ 'Source Serif Pro', ...defaultTheme.fontFamily.serif ],
        mono: [ 'Space Mono', ...defaultTheme.fontFamily.mono ],
        slab: [ 'Roboto Slab', ...defaultTheme.fontFamily.sans ],
      },
    },
  },
};

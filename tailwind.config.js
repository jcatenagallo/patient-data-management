const plugin = require('tailwindcss/plugin');

const { BREAKPOINTS } = require('./src/styles/BREAKPOINTS');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './slices/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-inter)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      breakpoints: BREAKPOINTS,
      screens: {
        mobile: `${BREAKPOINTS.MOBILE}px`,
        tablet: `${BREAKPOINTS.TABLET}px`,
        desktop: `${BREAKPOINTS.DESKTOP}px`,
        desktopXl: `${BREAKPOINTS.DESKTOP_XL}px`,
      },
      colors: {
        darks: {
          black: '#232323',
        },
        blues: {
          deepSea: '#04485E',
          morningMist: '#C5DEF3',
          indigo: '#0A4492',
          foam: '#D1E8EA',
          saban: '#1C558E',
          cerulean: '#4471AD',
          cerulean10: '#DCE2E5',
          ice: '#EBF9FB',
          aquaHaze: '#ECF4F6',
        },
        creams: {
          alabaster: '#F0EEE6',
          plaster: '#F9F8F4',
        },
        greens: {
          deepSea: '#04485E',
          jade: '#487A7B',
          viridian: '#588E85',
          polishedsea: '#12757B',
          polishedJade: '#12757B',
          moss: '#64898A',
          sage: '#9ABFB4',
        },
        grays: {
          light: '#E3E3E3',
          background: '#F8F8F8',
          onyx: '#122526',
          shale: '#596667',
          mistic: '#D0D5DD',
          manatee: '#98A2B3',
        },
        warmTones: {
          paprika: '#E05449',
        },
      },
      maxWidth: {
        'screen-mobile': `${BREAKPOINTS.MOBILE}px`,
        'screen-tablet': `${BREAKPOINTS.TABLET}px`,
        'screen-desktop': `${BREAKPOINTS.DESKTOP}px`,
        'screen-desktop-xl': `${BREAKPOINTS.DESKTOP_XL}px`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1736px',
          padding: '0 1rem',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1258px',
          },
        },
      });
    }),
  ],
};

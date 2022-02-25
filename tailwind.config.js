import themes from './tailwind.themes.config';
import zIndex from './tailwind.z-index.config';

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {
      spacing: {
        auto: 'auto',
        '16px': '16px',
        '31px': '31px',
        '42px': '42px',
        '54px': '54px',
        '62px': '62px',
        '70px': '70px',
        '78px': '78px',
        '112px': '112px',
        '128px': '128px',
        '177px': '177px',
        '225px': '225px',
        '275px': '275px',
        '300px': '300px',
        '330px': '330px',
      },
      lineHeight: {
        sm: '1.625rem',
        11: '2.625rem',
        12: '2.75rem',
        13: '3.375rem',
        14: '3.875rem',
        15: '4.375rem',
      },
    },
    screens: {
      '2sm': '375px',
      sm: '540px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1300px',
      '3xl': '1600px',
    },
    colors: {},
    zIndex,
    fontFamily: {
      main: ['Poppins Regular', 'sans-serif'],
      'poppins-bold': ['Poppins Bold', 'sans-serif'],
    },
    fontSize: {
      sm: '14px',
      smbase: '18px',
      base: '22px',
      lg: '30px',
      xl: '36px',
      '2xl': '42px',
      '3xl': '48px',
    },
    maxWidth: {
      none: 'none',
      1440: '1440px',
    },
    maxHeight: {
      none: 'none',
      52: '13rem',
    },
    borderRadius: {
      none: 'none',
      DEFAULT: '8px',
      full: '50%',
    },
    boxShadow: {
      none: 'none',
      DEFAULT: '4px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    logs: false,
    themes,
  },
};

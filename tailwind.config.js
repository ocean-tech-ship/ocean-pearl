import zIndex from './z-index.contants';

const colors = require('./tailwind.colors.json');

module.exports = {
  mode: 'jit',
  purge: [],
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
    colors,
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
  variants: {},
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        pearl: {
          primary: colors.primary /* Primary color */,
          'primary-focus': colors.primary /* Primary color - focused */,
          'primary-content':
            colors.white /* Foreground content color to use on primary color */,

          secondary: colors.secondary /* Secondary color */,
          'secondary-focus': colors.secondary /* Secondary color - focused */,
          'secondary-content':
            colors.white /* Foreground content color to use on secondary color */,

          accent: colors.complementary /* Accent color */,
          'accent-focus': colors.complementary /* Accent color - focused */,
          'accent-content':
            colors.white /* Foreground content color to use on accent color */,

          neutral: '#3d4451' /* Neutral color */,
          'neutral-focus': '#2a2e37' /* Neutral color - focused */,
          'neutral-content':
            colors.white /* Foreground content color to use on neutral color */,

          'base-100':
            colors.white /* Base color of page, used for blank backgrounds */,
          'base-200': '#f9fafb' /* Base color, a little darker */,
          'base-300': '#d1d5db' /* Base color, even more darker */,
          'base-content':
            '#1f2937' /* Foreground content color to use on base color */,

          info: '#2094f3' /* Info */,
          success: '#009485' /* Success */,
          warning: '#ff9900' /* Warning */,
          error: '#ff5724' /* Error */,
        },
      },
    ],
  },
};

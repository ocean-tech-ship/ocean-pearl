const colors = require('./tailwind.colors.json')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
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
        '128px': '128px',
        '177px': '177px',
        '225px': '225px',
        '275px': '275px',
        '300px': '300px',
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
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      third: colors.third,
      grey: colors.grey,
    },
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
      1440: '1440px',
    },
    maxHeight: {
      52: '13rem',
    },
    boxShadow: {
      default: '4px 4px 20px rgba(0, 0, 0, 0.1)',
      none: 'none',
    },
    borderRadius: {
      none: '0',
      default: '8px',
    },
  },
  variants: {},
  plugins: [],
}

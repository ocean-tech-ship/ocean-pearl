const colors = require('./tailwind.colors.json')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      '2sm': '375px',
      sm: '540px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      third: colors.third,
    },
    fontFamily: {
      main: ['Poppins Regular', 'sans-serif'],
      'poppins-bold': ['Poppins Bold', 'sans-serif'],
    },
    fontSize: {
      sm: '14px',
      base: '22px',
      lg: '30px',
      xl: '36px',
      '2xl': '42px',
      '3xl': '48px',
    },
    maxWidth: {
      1440: '1440px',
    },
    boxShadow: {
      default: '4px 4px 20px rgba(0, 0, 0, 0.1)',
      none: 'none',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

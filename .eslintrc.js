module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-plusplus': 'off', // allow ++ and --
    'func-names': 'off', // allow unnamed functions
  },
};

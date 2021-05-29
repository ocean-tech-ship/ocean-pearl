export default {
  tailwindcss: {
    cssPath: '~/assets/style/main.scss',
    configPath: 'tailwind.config.js',
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ocean Pearl',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/mirage.js',
    { src: '~/plugins/vue-globals', ssr: true },
    { src: '~/plugins/plausible', ssr: false },
  ],

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    baseURL: process.env.NUXT_ENV_BASE_URL || 'http://localhost:3000',
    plausibleDomain: process.env.NUXT_ENV_PLAUSIBLE_DOMAIN,
  },

  ssr: !(process.env.NUXT_ENV_USE_MIRAGE === 'true'), // Disable Server Side rendering for development because of miragejs

  env: {
    useMirage: process.env.NUXT_ENV_USE_MIRAGE,
  },

  axios: {
    baseURL:
      process.env.NUXT_ENV_USE_MIRAGE === 'true'
        ? process.env.NUXT_ENV_BASE_URL_LOCAL
        : process.env.NUXT_ENV_BASE_URL,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n', '@nuxtjs/axios'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
    lazy: true,
    langDir: '~/assets/locales/',
    defaultLocale: 'en',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

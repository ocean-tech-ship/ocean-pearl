const enviroments = {
  mirage: process.env.NUXT_ENV_BASE_URL_LOCAL_MIRAGE,
  mongo: process.env.NUXT_ENV_BASE_URL_LOCAL_MONGO,
  stage: process.env.NUXT_ENV_BASE_URL_STAGE,
  production: process.env.NUXT_ENV_BASE_URL,
};

export default {
  tailwindcss: {
    cssPath: '~/assets/style/main.scss',
    configPath: 'tailwind.config.js',
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      titleTemplate: (titleChunk) =>
        titleChunk ? `${titleChunk} | Ocean Pearl` : 'Ocean Pearl',
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'pearl',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Community-based project tracking platform for the Ocean Protocol ecosystem with an early focus on the OceanDAO community.',
        },
        { hid: 'robots', name: 'robots', content: process.env.NUXT_ENV_ROBOTS },
        { hid: 'theme-color', name: 'theme-color', content: '#BB2C75' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Ocean Pearl' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Community-based project tracking platform for the Ocean Protocol ecosystem with an early focus on the OceanDAO community.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.NUXT_ENV_ROOT_URL}/pearl-background.jpg`,
        },
        { hid: 'og:image:width', property: 'og:image:width', content: 1920 },
        { hid: 'og:image:height', property: 'og:image:height', content: 1080 },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Ocean Pearl Wallpaper',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Ocean Pearl',
        },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Ocean Pearl',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            'Community-based project tracking platform for the Ocean Protocol ecosystem with an early focus on the OceanDAO community.',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${process.env.NUXT_ENV_ROOT_URL}/pearl-background.jpg`,
        },
        {
          hid: 'twitter:image:width',
          property: 'twitter:image:width',
          content: 1920,
        },
        {
          hid: 'twitter:image:height',
          property: 'twitter:image:height',
          content: 1080,
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@oceanpearlio',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@oceanpearlio',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/mirage.js',
    '@/plugins/vue-touch',
    { src: '@/plugins/vue-globals', ssr: true },
    { src: '@/plugins/plausible', ssr: false },
  ],

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    rootURL: process.env.NUXT_ENV_ROOT_URL,
    baseURL: process.env.NUXT_ENV_BASE_URL || 'http://localhost:3000',
    plausibleDomain: process.env.NUXT_ENV_PLAUSIBLE_DOMAIN,
    infuraId: process.env.NUXT_ENV_INFURA_ID,
  },

  ssr: process.env.NODE_ENV !== 'mirage', // Disable Server Side rendering for development because of miragejs

  env: {
    useMirage: process.env.NODE_ENV === 'mirage',
  },

  axios: {
    baseURL: enviroments[process.env.NODE_ENV],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/date-fns-module
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    filter({ routes }) {
      return routes.filter((route) => route.component.endsWith('.vue'));
    },
  },

  dateFns: {
    locales: ['en-US'],
    fallbackLocale: 'en-US',
  },

  i18n: {
    locales: [
      {
        code: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    lazy: true,
    langDir: '~/assets/locales/',
    defaultLocale: 'en-US',
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        // type is inferred based on the file extension.
        // https://fetch.spec.whatwg.org/#concept-request-destination
        if (type === 'script' || type === 'style') {
          return true;
        }

        if (type === 'font') {
          return (
            file.includes('Poppins-Bold') || file.includes('Poppins-Regular')
          );
        }

        return false;
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

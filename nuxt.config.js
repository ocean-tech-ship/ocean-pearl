const enviroments = {
  mirage: process.env.NUXT_ENV_BASE_URL_LOCAL,
  mongo: process.env.NUXT_ENV_BASE_URL_LOCAL_API,
  production: process.env.NUXT_ENV_BASE_URL,
}

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
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
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

    ssr: process.env.API_ENV !== 'mirage', // Disable Server Side rendering for development because of miragejs

    env: {
        useMirage: process.env.API_ENV === 'mirage',
    },

    axios: {
        baseURL: enviroments[process.env.API_ENV],
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
        [
            'nuxt-social-meta',
            {
                url: 'https://oceanpearl.io/',
                title: 'Ocean Pearl',
                site_name: 'Ocean Pearl',
                description:
                'The community-based project tracking platform for the Ocean Protocol ecosystem with an early focus on the OceanDAO community.',
                img: '~/static/pearl-background.jpg',
                img_size: { width: '1920', height: '1080' },
                locale: 'en_US',
                twitter: '@oceanpearlio',
                twitter_card: 'summary_large_image',
                themeColor: '#BB2C75',
            },
        ],
    ],

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

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};

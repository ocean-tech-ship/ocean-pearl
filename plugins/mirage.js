//TODO check env
if (process.env.NODE_ENV === 'development' && !process.env.NUXT_ENV_MIRAGEJS === 'off') {
    require('@/miragejs/server').makeServer();
  }
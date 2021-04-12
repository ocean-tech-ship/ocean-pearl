//TODO check env
if (process.env.NODE_ENV === 'development') {
    require('@/miragejs/server').makeServer();
  }
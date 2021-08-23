if (
  process.env.NODE_ENV === 'development' &&
  process.env.useMirage === 'true'
) {
  require('@/miragejs/server').makeServer();
}

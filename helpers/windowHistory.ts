export default function replaceQueryParams(_this: any, query: object): void {
  if (!process.server) {
    const url =
      window.location.origin +
      _this.$nuxt.$router.resolve({
        query,
      }).href;
    // eslint-disable-next-line
    history.replaceState({}, '', url);
  }
}

<script>
export default {
  render(h) {
    return h(
      'section',
      {
        class: {
          'px-1 mb-12 2sm:px-4 sm:px-16 md:px-32 mx-auto max-w-1440': true,
        },
      },
      this.$slots.default,
    );
  },
};
</script>

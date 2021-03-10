<script>
export default {
  render(h) {
    return h(
      "section",
      {
        class: {
          "px-20 sm:px-30 md:px-64 mx-auto max-w-1300": true,
        },
      },
      this.$slots.default
    );
  },
};
</script>

<style scoped></style>

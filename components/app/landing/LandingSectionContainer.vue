<script>
export default {
  render(h) {
    return h(
      "section",
      {
        class: {
          "px-20 sm:px-30 mx-auto max-w-1440": true,
        },
      },
      this.$slots.default
    );
  },
};
</script>

<style scoped></style>

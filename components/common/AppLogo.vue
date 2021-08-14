<template>
  <img
    class="max-w-none max-h-none"
    :src="conditionalSource"
    :alt="`${alt} ${$t('general.logo')}`"
  />
</template>

<script>
export default {
  name: 'AppLogo',

  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },

    alt: {
      type: String,
      required: true,
      default: '',
    },
  },

  computed: {
    conditionalSource() {
      const { src } = this.$props;
      return !!src && src.length > 0 && src.includes('/')
        ? src
        : require('@/assets/images/logo/pearl-logo.svg');
    },
  },
};
</script>

<style scoped></style>

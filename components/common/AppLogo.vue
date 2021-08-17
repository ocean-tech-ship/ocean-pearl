<template>
  <img
    v-if="!!src"
    class="max-w-none max-h-none object-contain"
    :style="{ width: `${size}px`, height: `${size}px`}"
    :src="src"
    :alt="`${alt} ${$t('general.logo')}`"
  />

  <app-identicon v-else :value="alt" :size="size" />
</template>

<script>
import AppIdenticon from '@/components/common/AppIdenticon';

export default {
  name: 'AppLogo',

  components: {
    AppIdenticon,
  },

  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },

    size: {
      type: Number,
      required: false,
      default: 64,
    },

    alt: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped></style>

<template>
  <img
    v-if="project.logo && project.logo.url"
    class="max-w-none max-h-none object-contain"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :src="project.logo.url"
    :alt="`${project.title} ${$t('general.logo')}`"
  />

  <app-identicon v-else :value="project.title" :size="size" />
</template>

<script>
import AppIdenticon from '@/components/common/AppIdenticon';

export default {
  name: 'AppLogo',

  components: {
    AppIdenticon,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 64,
    },
  },
};
</script>

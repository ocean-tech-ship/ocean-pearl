<template>
  <svg :width="size" :height="size" :data-jdenticon-value="value" />
</template>

<script>
import { update } from 'jdenticon';

export default {
  name: 'AppIdenticon',

  props: {
    value: {
      type: String,
      required: true,
      default: '',
    },

    size: {
      type: Number,
      required: false,
      default: 64,
    },
  },

  watch: {
    value() {
      update('[data-jdenticon-value]');
    },
  },

  beforeMount() {
    update('[data-jdenticon-value]');
  },
};
</script>

<style scoped></style>

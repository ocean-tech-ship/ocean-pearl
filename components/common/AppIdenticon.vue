<template>
  <div v-html="createIdenticon(value, size)" />
</template>

<script>
import { toSvg } from 'jdenticon';

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

  methods: {
    createIdenticon(value, size) {
      return toSvg(value, size);
    },
  },
};
</script>

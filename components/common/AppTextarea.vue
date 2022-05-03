<template>
  <textarea
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
    class="textarea w-full"
  />
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

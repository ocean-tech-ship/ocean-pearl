<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
    class="input w-full"
  />
</template>

<script>
export default {
  name: 'AppTextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
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

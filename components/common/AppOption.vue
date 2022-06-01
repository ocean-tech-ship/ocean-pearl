<template>
  <option :value="value" :selected="selected" :disabled="disabled">
    {{ content }}

    <!-- provide content via props or default slot -->
    <slot />
  </option>
</template>

<script>
export default {
  name: 'AppOption',

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

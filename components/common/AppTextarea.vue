<template>
  <textarea
    :placeholder="placeholder"
    :value="value"
    :rows="rows"
    :maxlength="maxlength"
    :disabled="disabled"
    class="textarea w-full"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
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
    rows: {
      type: Number,
      default: null,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

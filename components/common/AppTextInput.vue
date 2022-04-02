<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :maxlength="maxlength"
    :disabled="disabled"
    class="input w-full"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
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

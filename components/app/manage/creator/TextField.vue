<template>
  <form-control
    :value="value"
    :label="label"
    :hint="hint"
    :max-length="maxLength"
  >
    <input
      :value="value"
      :maxlength="maxLength"
      :placeholder="placeholder"
      type="text"
      class="input input-primary bg-base-200 text-base-content"
      @input="$emit('input', $event.target.value)"
    />
  </form-control>
</template>

<script>
import FormControl from '@/components/app/manage/creator/FormControl';

export default {
  name: 'TextField',

  components: { FormControl },

  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: false,
      default: null,
    },
    maxLength: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

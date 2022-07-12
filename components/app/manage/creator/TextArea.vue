<template>
  <form-control
    :value="value"
    :label="label"
    :hint="hint"
    :max-length="maxLength"
  >
    <textarea
      :value="value"
      :rows="rows"
      :maxlength="maxLength"
      :placeholder="placeholder"
      class="textarea textarea-primary bg-base-200 text-base-content"
      @input="$emit('input', $event.target.value)"
    />
  </form-control>
</template>

<script>
import FormControl from '@/components/app/manage/creator/FormControl';

export default {
  name: 'TextArea',

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
    rows: {
      type: Number,
      required: false,
      default: 1,
    },
    maxLength: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

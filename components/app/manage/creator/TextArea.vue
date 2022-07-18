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
      @blur="validate($event.target.value)"
      @input="
        validate($event.target.value);
        $emit('input', $event.target.value);
      "
    />

    <template #hint>
      <span class="label-text text-error">
        {{ details }}
      </span>
    </template>
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
    required: {
      type: Boolean,
      required: false,
      default: false,
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

  data() {
    return {
      details: null,
    };
  },

  methods: {
    validate(val) {
      this.details =
        this.required && (!val || val.length === 0)
          ? 'This field is required'
          : null;
    },
  },
};
</script>

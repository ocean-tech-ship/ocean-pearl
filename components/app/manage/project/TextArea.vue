<template>
  <app-form-control>
    <!-- label -->
    <template #label>
      <span class="label-text text-primary">
        {{ label }}
      </span>
    </template>

    <!-- character counter -->
    <template v-if="!!maxLength" #altLabel>
      <span class="label-text-alt">
        {{ `(${value.length} / ${maxLength})` }}
      </span>
    </template>

    <!-- input field -->
    <app-textarea
      :rows="rows"
      :value="value"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
  </app-form-control>
</template>

<script>
import AppFormControl from '@/components/common/AppFormControl';
import AppTextarea from '@/components/common/AppTextarea';

export default {
  name: 'TextField',
  components: { AppTextarea, AppFormControl },

  props: {
    value: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default: 3,
    },
    maxLength: {
      type: Number,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

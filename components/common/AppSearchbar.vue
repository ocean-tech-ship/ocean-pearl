<template>
  <app-form-control>
    <template #label>
      <span class="label-text text-primary">{{ label }}</span>
    </template>
    <app-text-input
      v-model="searchValue"
      type="text"
      :placeholder="placeholder"
      class="input-primary bg-base-200"
    />
  </app-form-control>
</template>

<script>
import debounce from '@/helpers/debounce.ts';
import AppFormControl from '@/components/common/AppFormControl';
import AppTextInput from '@/components/common/AppTextInput';

export default {
  components: { AppTextInput, AppFormControl },
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchValue: this.initialValue,
    };
  },
  watch: {
    searchValue: debounce(function () {
      this.$emit('search', { search: this.searchValue });
    }, 500),
  },
};
</script>

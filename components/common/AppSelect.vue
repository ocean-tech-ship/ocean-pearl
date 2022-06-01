<template>
  <select :name="name" class="select w-full">
    <app-option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="option.selected"
      :disabled="option.disabled"
      :content="option.content"
    />

    <!-- provide options via prop or default slot -->
    <slot />
  </select>
</template>

<script>
import AppOption from '~/components/common/AppOption';
export default {
  name: 'AppSelect',
  components: { AppOption },
  props: {
    name: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: null,
    },
  },
};
</script>

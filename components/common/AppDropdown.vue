<template>
  <div class="dropdown">
    <slot v-if="$slots.button" />

    <!-- provide menu via default slot -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  components: {},
  props: {
    labelType: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

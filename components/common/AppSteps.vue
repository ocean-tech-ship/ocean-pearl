<template>
  <div v-if="scrollable" class="overflow-x-auto">
    <ul class="steps">
      <!-- provide step items via default slot -->
      <slot />
    </ul>
  </div>
  <ul v-else class="steps">
    <!-- provide step items via default slot -->
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'AppSteps',

  props: {
    scrollable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

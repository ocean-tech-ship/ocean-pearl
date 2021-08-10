<template>
  <div class="tooltip">
    <span v-if="!!hint" class="tooltip-hint rounded shadow p-1 bg-grey -mt-8">
      {{ hint }}
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppTooltip',

  props: {
    hint: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;

.tooltip-hint {
  @apply invisible absolute;
}

.tooltip:hover .tooltip-hint {
  @apply visible z-50;
}

@tailwind utilities;
</style>

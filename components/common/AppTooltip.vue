<template>
  <div :class="{ 'tooltip tooltip-primary': hint }" :data-tip="hint">
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

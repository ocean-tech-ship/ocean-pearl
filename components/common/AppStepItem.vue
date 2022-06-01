<template>
  <li class="step" :data-content="data">
    <span v-if="value">{{ value }}</span>

    <!-- provide content via value prop or default slot  -->
    <slot />
  </li>
</template>

<script>
export default {
  name: 'AppStepItem',

  props: {
    data: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

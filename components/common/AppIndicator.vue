<template>
  <div class="indicator">
    <div class="indicator-item" :class="indicatorClass">
      <!--  provide indicator value via indicator slot or prop  -->
      <slot v-if="$slots.indicator" name="indicator" />
      <span v-else>{{ indicatorValue }}</span>
    </div>

    <!-- provide content via default slot  -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppIndicator',

  props: {
    indicatorValue: {
      type: String,
      default: '',
    },
    indicatorClass: {
      type: String,
      default: 'badge badge-primary',
    },
  },
};
</script>

<template>
  <div>
    <slot :name="step" />
  </div>
</template>

<script>
export default {
  name: 'AppStepperContent',

  props: {
    step: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>

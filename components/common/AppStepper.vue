<template>
  <div>
    <slot :name="step" />
  </div>
</template>

<script>
export default {
  name: 'AppStepper',

  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
};
</script>

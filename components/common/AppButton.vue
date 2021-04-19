<template>
  <!-- don't use <button> if you navigate to another page (use AppButtonStyle within AppLink instead for accessibility) -->
  <!-- use this one for forms and interaction with the current page -->
  <button
    type="button"
    class="select-none call-to-action text-secondary font-medium py-2 px-6 shadow flex items-center justify-center gap-3"
  >
    <img v-if="icon" :src="icon" alt="ocean_pearl" width="20" />
    <span> {{ text }} </span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.call-to-action {
  background: linear-gradient(to right, #bb2c75 1%, #ff98cd);
}
</style>

<template>
  <div
    class="inline-block select-none call-to-action text-secondary font-medium py-2 px-6 shadow items-center justify-center"
  >
    <img v-if="icon" :src="icon" alt="ocean_pearl" class="inline-block mr-2" width="20" />
    <span> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: 'AppButtonStyle',

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

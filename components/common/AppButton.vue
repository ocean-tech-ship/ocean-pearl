<template>
  <div>
    <button
      class="call-to-action text-secondary font-medium py-2 px-6 shadow-md flex items-center justify-center gap-3"
    >
      <img src="~/assets/images/landing/sailing_ship.svg" alt="ocean_pearl" width="20" />
      <span> Explore </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<style scoped lang="scss">
.call-to-action {
  background: linear-gradient(to right, #bb2c75 1%, #ff98cd);
}
</style>

<template>
  <div class="background">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppPrimaryGradientBackground',
};
</script>

<style scoped lang="scss">
.background {
  background: linear-gradient(to bottom right, #7b3070 5%, #d45b8d);
}
</style>

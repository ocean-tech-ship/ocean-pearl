<template>
  <div class="waves">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppWavesBackground',
};
</script>

<style scoped>
.waves {
  background-image: url('./assets/images/landing/waves.svg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
}

@media only screen and (max-width: 1100px) {
  .waves {
    background-position: center center;
  }
}
</style>

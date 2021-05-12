<template>
  <div>
    <Nuxt />
    <footer-container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterContainer from '~/components/app/footer/FooterContainer.vue'
export default Vue.extend({
  components: { FooterContainer },
})
</script>

<style></style>

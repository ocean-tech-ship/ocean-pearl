<template>
  <div>
    <app-navbar />
    <Nuxt />
    <!-- <footer-container /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
// import FooterContainer from '@/components/app/footer/FooterContainer.vue'
export default Vue.extend({
  components: {
    AppNavbar,
    // FooterContainer
  },
})
</script>

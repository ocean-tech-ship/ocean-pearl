<template>
  <div >
      <landing-hero-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHeroSection from "@/components/app/landing/LandingHeroSection.vue";


export default Vue.extend({
  components: {
    LandingHeroSection,
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

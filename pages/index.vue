<template>
  <div>
    <landing-hero-section />
    <footer-container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue'
import FooterContainer from '~/components/app/footer/FooterContainer.vue'

export default Vue.extend({
  components: {
    LandingHeroSection,
    FooterContainer,
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

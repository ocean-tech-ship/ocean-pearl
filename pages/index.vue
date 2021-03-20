<template>
  <div>
    <landing-hero-section />
    <landing-pearl-space-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue'
import LandingPearlSpaceSection from '@/components/app/landing/LandingPearlSpaceSection.vue'

export default Vue.extend({
  components: {
    LandingHeroSection,
    LandingPearlSpaceSection
  },
})
</script>

<style>
</style>

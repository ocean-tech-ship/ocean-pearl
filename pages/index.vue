<template>
  <div>
    <app-navbar />
    <landing-hero-section />
    <landing-pearl-space-section />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue'
import LandingPearlSpaceSection from '@/components/app/landing/LandingPearlSpaceSection.vue'

export default Vue.extend({
  components: {
    AppNavbar,
    LandingHeroSection,
    LandingPearlSpaceSection
  },
})
</script>

<style>
</style>

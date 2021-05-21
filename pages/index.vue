<template>
  <div>
    <landing-hero-section />
    <!--<landing-pearl-space-section />-->
    <landing-featured-project-section />
    <landing-dao-proposals />
    <!--<landing-job-offers />-->
    <landing-latest-projects />
    <landing-pearlx-Dao />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue'
// import LandingPearlSpaceSection from '@/components/app/landing/LandingPearlSpaceSection.vue'
import LandingDaoProposals from '@/components/app/landing/LandingDaoProposals.vue'
import LandingFeaturedProjectSection from '@/components/app/landing/LandingFeaturedProjectSection.vue'
// import LandingJobOffers from '@/components/app/landing/LandingJobOffers.vue'
import LandingLatestProjects from '@/components/app/landing/LandingLatestProjects.vue'
import LandingPearlxDao from '@/components/app/landing/LandingPearlxDao.vue'

export default Vue.extend({
  components: {
    LandingHeroSection,
    // LandingPearlSpaceSection,
    LandingFeaturedProjectSection,
    LandingDaoProposals,
    // LandingJobOffers,
    LandingLatestProjects,
    LandingPearlxDao
  },
})
</script>

<style></style>

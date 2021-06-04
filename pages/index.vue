<template>
  <div>
    <landing-hero-section />
    <!--<landing-pearl-space-section />-->
    <landing-featured-project-section />
    <!--<landing-job-offers />-->
    <landing-latest-projects />
    <landing-pearl-dao />
    <landing-featured-dao-proposals />
    <landing-dao-proposals />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue'
// import LandingPearlSpaceSection from '@/components/app/landing/LandingPearlSpaceSection.vue'
import LandingDaoProposals from '@/components/app/landing/LandingDaoProposals.vue'
import LandingFeaturedDaoProposals from '@/components/app/landing/LandingFeaturedDaoProposals.vue'
import LandingFeaturedProjectSection from '@/components/app/landing/LandingFeaturedProjectSection.vue'
// import LandingJobOffers from '@/components/app/landing/LandingJobOffers.vue'
import LandingLatestProjects from '@/components/app/landing/LandingLatestProjects.vue'
import LandingPearlDao from '~/components/app/landing/LandingPearlDao.vue'

export default Vue.extend({
  components: {
    LandingHeroSection,
    // LandingPearlSpaceSection,
    LandingFeaturedProjectSection,
    LandingDaoProposals,
    LandingFeaturedDaoProposals,
    // LandingJobOffers,
    LandingLatestProjects,
    LandingPearlDao,
  },
})
</script>

<style></style>

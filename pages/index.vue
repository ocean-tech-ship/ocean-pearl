<template>
  <div>
    <landing-hero-section />
    <!--<landing-pearl-space-section />-->
    <landing-featured-project-section :projects="featuredProjects" />
    <!--<landing-job-offers />-->
    <landing-latest-projects :projects="latestProjects" />
    <landing-pearl-dao :metrics="metrics" />
    <landing-featured-dao-proposals :projects="daoFeaturedProjects" />
    <landing-dao-proposals :dao-proposals="daoProposals" />
  </div>
</template>

<script lang="ts">
import { getLandingData } from '@/api'
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

  data() {
    return {
      error: '',
      featuredProjects: [],
      latestProjects: [],
      daoFeaturedProjects: [],
      daoProposals: [],
      metrics: {
        fundingRound: '',
        totalDaoProposals: '',
        endDate: Date.now(),
        totalRequestedFunding: '',
        totalVotes: '',
      },
    }
  },

  async fetch() {
    await getLandingData(this.$axios)
      .then((response: any) => {
        const data = response.data

        this.featuredProjects = data.featuredProjects
        this.latestProjects = data.latestProjects
        this.daoFeaturedProjects = data.daoFeaturedProjects
        this.daoProposals = data.daoProposals
        this.metrics = data.metrics
      })
      .catch(() => {
        this.error = 'general.error.retry'
      })
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@oceanpearlio',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://oceanpearl.io',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Ocean Pearl',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'We are on track with the newest projects powered by the Ocean Protocol.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://oceanpearl.io/pearl-background.jpg',
        },
      ],
    }
  },
})
</script>

<style></style>

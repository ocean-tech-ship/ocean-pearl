<template>
  <div>
    <landing-hero-section />

    <landingSectionContainer
      v-if="$fetchState.error || error"
      class="h-screen my-32"
    >
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landingSectionContainer>

    <div v-else>
      <landing-pearl-dao :metrics="metrics" />
      <landing-dao-proposals :dao-proposals="daoProposals" />
      <landing-pearl-space-section />
      <landing-latest-projects :projects="latestProjects" />
      <landing-connect-social />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getLandingData } from '@/api';
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue';
import LandingDaoProposals from '@/components/app/landing/LandingDaoProposals.vue';
import LandingPearlSpaceSection from '@/components/app/landing/LandingPearlSpaceSection.vue';
import LandingLatestProjects from '@/components/app/landing/LandingLatestProjects.vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import LandingConnectSocial from '@/components/app/landing/LandingConnectSocial.vue';
import LandingPearlDao from '~/components/app/landing/LandingPearlDao.vue';

export default Vue.extend({
  components: {
    LandingHeroSection,
    LandingDaoProposals,
    LandingLatestProjects,
    LandingPearlSpaceSection,
    LandingPearlDao,
    LandingConnectSocial,
    LandingSectionContainer,
  },

  data() {
    return {
      error: null,
      latestProjects: null,
      daoProposals: null,
      metrics: null,
    };
  },

  async fetch() {
    try {
      const indexResponse = await getLandingData(this.$axios);

      if (indexResponse.status === 204) {
        this.error = 'general.error.unknown';
        this.latestProjects = [];
        this.daoProposals = [];
      }

      const { data } = indexResponse;

      this.error = null;
      this.latestProjects = data.latestProjects;
      this.daoProposals = data.daoProposals;
      this.metrics = data.metrics;
    } catch (error) {
      this.error = 'general.error.retry';
      this.latestProjects = [];
      this.daoProposals = [];
    }
  },

  head() {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.rootURL,
        },
      ],
      link: [
        { rel: 'canonical', href: this.$config.rootURL },
      ],
    }
  },
});
</script>

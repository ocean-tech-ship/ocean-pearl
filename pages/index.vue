<template>
  <div>
    <landing-hero-section />
    <landing-pearl-dao :metrics="metrics" />

    <landingSectionContainer
      v-if="$fetchState.error || error"
      class="h-screen my-32"
    >
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landingSectionContainer>

    <landing-section-container v-if="$fetchState.pending">
      {{ $t('general.fetchingLoading') }}
    </landing-section-container>

    <div v-else>
      <landing-dao-proposals :dao-proposals="daoProposals" />
      <landing-latest-projects :projects="latestProjects" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getLandingData } from '@/api';
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue';
import LandingDaoProposals from '@/components/app/landing/LandingDaoProposals.vue';
import LandingLatestProjects from '@/components/app/landing/LandingLatestProjects.vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import LandingPearlDao from '~/components/app/landing/LandingPearlDao.vue';

export default Vue.extend({
  components: {
    LandingHeroSection,
    LandingDaoProposals,
    LandingLatestProjects,
    LandingPearlDao,
    LandingSectionContainer,
  },

  data() {
    return {
      error: null,
      latestProjects: null,
      daoProposals: null,
      metrics: {
        fundingRound: '',
        totalDaoProposals: '',
        currentRound: {
          startDate: new Date(),
          submissionEndDate: new Date(),
          votingStartDate: new Date(),
          endDate: new Date(),
        },
        nextRound: {
          startDate: new Date(),
          submissionEndDate: new Date(),
          votingStartDate: new Date(),
          endDate: new Date(),
        },
        totalRequestedFundingOcean: '',
        totalVotes: '',
      },
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

      const {data} = indexResponse;

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
    };
  },
});
</script>

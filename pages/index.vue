<template>
  <div>
    <section-container>
      <landing-hero-section class="pb-4 xl:pb-16" />
    </section-container>

    <app-primary-gradient-background>
      <section-container>
        <landing-pearl-dao class="my-32 py-12" :metrics="metrics" />
      </section-container>
    </app-primary-gradient-background>

    <section-container class="space-y-32">
      <landing-dao-proposals :dao-proposals="daoProposals" />
      <landing-pearl-space-section />
      <landing-latest-projects :projects="latestProjects" />
    </section-container>

    <app-primary-gradient-background>
      <app-waves-background>
        <section-container>
          <landing-connect-social class="mt-32 py-12" />
        </section-container>
      </app-waves-background>
    </app-primary-gradient-background>
  </div>
</template>

<script>
import Vue from 'vue';
import { getLandingData } from '@/api';
import LandingHeroSection from '@/components/app/landing/LandingHeroSection.vue';
import LandingDaoProposals from '@/components/app/landing/LandingDaoProposals.vue';
import LandingPearlSpaceSection from '@/components/app/landing/LandingPearlSpaceSection.vue';
import LandingLatestProjects from '@/components/app/landing/LandingLatestProjects.vue';
import LandingConnectSocial from '@/components/app/landing/LandingConnectSocial.vue';
import LandingPearlDao from '@/components/app/landing/LandingPearlDao.vue';
import SectionContainer from '@/components/common/SectionContainer';
import AppPrimaryGradientBackground from '@/components/common/AppPrimaryGradientBackground';
import AppWavesBackground from '@/components/common/AppWavesBackground';

export default Vue.extend({
  components: {
    AppWavesBackground,
    AppPrimaryGradientBackground,
    SectionContainer,
    LandingHeroSection,
    LandingDaoProposals,
    LandingLatestProjects,
    LandingPearlSpaceSection,
    LandingPearlDao,
    LandingConnectSocial,
  },

  data() {
    return {
      latestProjects: null,
      daoProposals: null,
      metrics: null,
    };
  },

  async fetch() {
    try {
      const indexResponse = await getLandingData(this.$axios);
      const { data } = indexResponse;

      this.latestProjects = data.latestProjects;
      this.daoProposals = data.daoProposals;
      this.metrics = data.metrics;
    } catch (error) {
      await this.$store.dispatch('alert/error', 'general.error.retry');
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
      link: [{ rel: 'canonical', href: this.$config.rootURL }],
    };
  },
});
</script>

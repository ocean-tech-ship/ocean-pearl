<template>
  <div class="min-h-screen">
    <dao-proposals-header />

    <landing-section-container v-if="$fetchState.error">
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landing-section-container>

    <landing-section-container v-else-if="$fetchState.pending">
      {{ $t('general.fetchingLoading') }}
    </landing-section-container>

    <div v-else>
      <landing-section-container>
        <round-metrics :metrics="metrics" />
        <hr class="text-primary my-16" />
      </landing-section-container>

      <landing-section-container>
        <dao-proposals-filter
          :rounds="fundingRounds"
          @filter="fetchDaoProposals"
        />
      </landing-section-container>

      <landing-section-container v-if="error">
        <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
        <p class="small-text">{{ $t(error) }}</p>
      </landing-section-container>

      <landing-section-container v-else-if="pending">
        {{ $t('general.fetchingLoading') }}
      </landing-section-container>

      <landing-section-container v-else-if="daoProposals.length">
        <dao-proposals-list :dao-proposals="daoProposals" />
      </landing-section-container>

      <landing-section-container v-else>
        <app-response-with-search
          :no-search-text="{
            headingMain: $t(
              'dao-projects.filterResponse.noSearch.heading.main',
            ),
            headingSecondary: $t(
              'dao-projects.filterResponse.noSearch.heading.secondary',
            ),
            paragraph: $t('dao-projects.filterResponse.noSearch.paragraph'),
            button: $t('dao-projects.filterResponse.noSearch.button'),
            link: 'https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template',
          }"
          :search-text="{
            headingMain: $t('dao-projects.filterResponse.search.heading.main'),
            headingSecondary: $t(
              'dao-projects.filterResponse.search.heading.secondary',
            ),
            paragraph: $t('dao-projects.filterResponse.search.paragraph'),
          }"
          :search-used="searchUsed"
        />
      </landing-section-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import DaoProposalsHeader from '@/components/app/dao-proposals/DaoProposalsHeader.vue';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics.vue';
import DaoProposalsList from '@/components/app/dao-proposals/DaoProposalsList.vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import { getDaoRoundMetrics, getDaoProposals } from '@/api';
import DaoProposalsFilter from '@/components/app/dao-proposals/DaoProposalsFilter.vue';
import AppResponseWithSearch from '@/components/common/AppResponseWithSearch.vue';

export default Vue.extend({
  name: 'DaoProjectOverview',

  components: {
    DaoProposalsHeader,
    RoundMetrics,
    DaoProposalsList,
    LandingSectionContainer,
    DaoProposalsFilter,
    AppResponseWithSearch,
  },

  data() {
    return {
      pending: true,
      error: null,
      daoProposals: null,
      fundingRounds: null,
      searchUsed: false,
      metrics: null,
    };
  },

  async fetch() {
    try {
      const metricsResponse = await getDaoRoundMetrics(this.$axios);

      if (metricsResponse.status === 204) {
        this.error.metrics = 'general.error.unknown';
        this.metrics = {};
      }

      this.error = null;
      this.metrics =
        process.env.NODE_ENV === 'mirage'
          ? metricsResponse.data.metrics
          : metricsResponse.data;
      this.fundingRounds = this.metrics.fundingRound;
    } catch (error) {
      this.error = 'general.error.retry';
      this.metrics = {};
    }
  },

  methods: {
    async fetchDaoProposals(payload) {
      try {
        const daoProposalResponse = await getDaoProposals(this.$axios, payload);
        if (daoProposalResponse.status === 204) {
          this.error = 'general.error.unknown';
          this.daoProposals = [];
        }

        this.pending = false;
        this.error = null;
        this.daoProposals =
          process.env.NODE_ENV === 'mirage'
            ? daoProposalResponse.data.daoproposals
            : daoProposalResponse.data.daoProposals;

        // set search used
        payload.search ? (this.searchUsed = true) : (this.searchUsed = false);
      } catch (error) {
        this.pending = false;
        this.error = 'general.error.retry';
        this.daoProposals = [];
      }
    },
  },
});
</script>

<style></style>

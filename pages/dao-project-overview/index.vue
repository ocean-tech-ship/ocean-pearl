<template>
  <div>
    <div v-if="!!error">
      <landing-section-container>
        <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
        <p class="small-text">{{ $t(error) }}</p>
      </landing-section-container>
    </div>
    <div v-if="!!metrics && !!daoProposals">
      <dao-projects-header :metrics="metrics" />
      <dao-projects-list :daoProposals="daoProposals" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DaoProjectsHeader from '@/components/app/dao-project-overview/DaoProjectsHeader.vue'
import DaoProjectsList from '@/components/app/dao-project-overview/DaoProjectsList.vue'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue'
import { getDaoRoundMetrics, getDaoProposals } from '@/api'

export default Vue.extend({
  name: 'DaoProjectOverview',
  components: {
    DaoProjectsHeader,
    DaoProjectsList,
    LandingSectionContainer,
  },
  async asyncData({ $axios }) {
    try {
      // const metricsResponse = await getDaoRoundMetrics($axios)
      // const daoProposalResponse = await getDaoProposals($axios)
      const [metricsResponse, daoProposalResponse] = await Promise.all([
        getDaoRoundMetrics($axios),
        getDaoProposals($axios),
      ])

      if (
        metricsResponse.status === 204 ||
        daoProposalResponse.status === 204
      ) {
        return {
          error: 'general.error.unknown',
          metrics: null,
          daoProposals: null,
        }
      }

      return {
        error: null,
        metrics:
          process.env.NUXT_ENV_USE_MIRAGE === 'true'
            ? metricsResponse.data.project // TODO setup mirage route
            : metricsResponse.data,
        daoProposals:
          process.env.NUXT_ENV_USE_MIRAGE === 'true'
            ? daoProposalResponse.data.project // TODO setup mirage route
            : daoProposalResponse.data,
      }
    } catch (error) {
      return { error: 'general.error.retry', metrics: null, daoProposals: null }
    }
  },
})
</script>

<style></style>

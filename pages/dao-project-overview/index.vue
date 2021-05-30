<template>
  <div>
    <div v-if="!!error">
      <landing-section-container>
        <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
        <p class="small-text">{{ $t(error) }}</p>
      </landing-section-container>
    </div>
    <div v-if="!!daoData">
        <dao-projects-header :daoData="daoData" />
        <dao-projects-list :daoData="daoData" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DaoProjectsHeader from '@/components/app/dao-project-overview/DaoProjectsHeader.vue'
import DaoProjectsList from '@/components/app/dao-project-overview/DaoProjectsList.vue'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue'
import { getDaoData } from '@/api'

export default Vue.extend({
  name: 'DaoProjectOverview',
  components: {
    DaoProjectsHeader,
    DaoProjectsList,
    LandingSectionContainer
  },
  async asyncData({ $axios }) {
    try {
      const response = await getDaoData($axios)

      if (response.status === 204) {
        return { error: 'general.error.unknown', daoData: null }
      }

      return {
        error: null,
        daoData:
          process.env.NUXT_ENV_USE_MIRAGE === 'true'
            ? response.data.project // TODO setup mirage route
            : response.data,
      }
    } catch (error) {
      return { error: 'general.error.retry', daoData: null }
    }
  },
})
</script>

<style></style>

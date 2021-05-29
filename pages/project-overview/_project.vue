<template>
  <div>
    <div v-if="!!error">
      <landing-section-container>
        <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
        <p class="small-text">{{ $t(error) }}</p>
      </landing-section-container>
    </div>

    <div v-if="!!project">
      <project-single-header :project="project" />
      <project-single :project="project" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getProjectById } from '@/api.js'
import LandingSectionContainer from '~/components/app/landing/LandingSectionContainer.vue'
import ProjectSingleHeader from '~/components/app/project-detail/ProjectSingleHeader.vue'
import ProjectSingle from '~/components/app/project-detail/ProjectSingle.vue'

export default Vue.extend({
  name: 'ProjectDetail',
  components: {
    ProjectSingle,
    ProjectSingleHeader,
    LandingSectionContainer,
  },

  async asyncData({ $axios, params }) {
    try {
      const response = await getProjectById($axios, params.project)

      if (response.status === 204) {
        return { error: 'general.error.unknown', project: null }
      }

      return {
        error: null,
        project:
          process.env.NUXT_ENV_USE_MIRAGE === 'true'
            ? response.data.project
            : response.data,
      }
    } catch (error) {
      return { error: 'general.error.retry', project: null }
    }
  },
})
</script>

<style></style>

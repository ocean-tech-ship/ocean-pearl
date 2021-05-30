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

      <div class="bg-grey pt-8 pb-1 mb-8">
        <project-single-details :project="project" />
        <project-single-dao-proposal :project="project" />
      </div>

      <project-single-roi-strategy :project="project" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getProjectById } from '@/api.js'
import ProjectSingleDaoProposal from '@/components/app/project-detail/ProjectSingleDaoProposal.vue'
import ProjectSingleDetails from '@/components/app/project-detail/ProjectSingleDetails.vue'
import ProjectSingleRoiStrategy from '@/components/app/project-detail/ProjectSingleRoiStrategy.vue'
import ProjectSingleHeader from '@/components/app/project-detail/ProjectSingleHeader.vue'
import LandingSectionContainer from '~/components/app/landing/LandingSectionContainer.vue'

export default Vue.extend({
  name: 'ProjectDetail',
  components: {
    ProjectSingleRoiStrategy,
    ProjectSingleDetails,
    ProjectSingleDaoProposal,
    ProjectSingleHeader,
    LandingSectionContainer,
  },

  async asyncData({ $axios, params }) {
    try {
      const response = await getProjectById($axios, params.project)

      if (response.status === 204) {
        return { error: 'project.unknown', project: null }
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

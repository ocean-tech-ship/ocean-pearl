<template>
  <div>
    <projects-header />
    <landing-section-container
      v-if="$fetchState.error || error"
      class="h-screen"
    >
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landing-section-container>

    <landing-section-container v-else-if="$fetchState.pending" class="h-screen">
      {{ $t('general.fetchingLoading') }}
    </landing-section-container>
    <landing-section-container v-else class="h-screen">
      <projects-filter />
      <projects-list :projects="projects" />
    </landing-section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { getProjects } from '@/api';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import ProjectsHeader from '@/components/app/projects/ProjectsHeader.vue';
import ProjectsList from '@/components/app/projects/ProjectsList.vue';
import ProjectsFilter from '@/components/app/projects/ProjectsFilter.vue';

export default Vue.extend({
  name: 'ProjectOverview',

  components: {
    ProjectsHeader,
    ProjectsList,
    LandingSectionContainer,
    ProjectsFilter,
  },

  data() {
    return {
      projects: null,
      error: null,
    };
  },

  async fetch() {
    try {
      const projectsResponse = await getProjects(this.$axios);

      if (projectsResponse.status === 204) {
        this.error = 'general.error.unknown';
        this.projects = [];
      }

      this.error = null;
      this.projects =
        process.env.NODE_ENV === 'mirage'
          ? projectsResponse.data.projects
          : projectsResponse.data;
    } catch (error) {
      this.error = 'general.error.retry';
      this.projects = [];
    }
  },
});
</script>

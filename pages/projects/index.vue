<template>
  <div>
    <projects-header />

    <landing-section-container>
      <projects-filter @filter="fetchProjects" />
    </landing-section-container>

    <landing-section-container v-if="error" class="h-screen">
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landing-section-container>

    <landing-section-container v-if="pending" class="h-screen">
      {{ $t('general.fetchingLoading') }}
    </landing-section-container>

    <landing-section-container v-if="projects">
      <projects-list :projects="projects" />
    </landing-section-container>

    <landing-section-container v-if="!pending && !error && !projects.length">
      <app-response-with-search
        :no-search-text="{
          headingMain: $t('projects.filterResponse.noSearch.heading.main'),
          headingSecondary: $t(
            'projects.filterResponse.noSearch.heading.secondary',
          ),
          paragraph: $t('projects.filterResponse.noSearch.paragraph'),
          button: $t('projects.filterResponse.noSearch.button'),
          link: 'https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template',
        }"
        :search-text="{
          headingMain: $t('projects.filterResponse.search.heading.main'),
          headingSecondary: $t(
            'projects.filterResponse.search.heading.secondary',
          ),
          paragraph: $t('projects.filterResponse.search.paragraph'),
        }"
        :search-used="searchUsed"
      />
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
import AppResponseWithSearch from '@/components/common/AppResponseWithSearch.vue';

export default Vue.extend({
  name: 'ProjectOverview',

  components: {
    ProjectsHeader,
    ProjectsList,
    LandingSectionContainer,
    ProjectsFilter,
    AppResponseWithSearch,
  },

  data() {
    return {
      pending: true,
      projects: null,
      error: null,
      searchUsed: false,
    };
  },

  methods: {
    async fetchProjects(payload) {
      try {
        const projectsResponse = await getProjects(this.$axios, payload);

        if (projectsResponse.status === 204) {
          this.error = 'general.error.unknown';
          this.projects = [];
        }

        this.pending = false;
        this.error = null;
        this.projects =
          process.env.NODE_ENV === 'mirage'
            ? projectsResponse.data.projects
            : projectsResponse.data;

        // set search used to true if there is a search term
        payload.search ? (this.searchUsed = true) : (this.searchUsed = false);
      } catch (error) {
        this.pending = false;
        this.error = 'general.error.retry';
        this.projects = [];
      }
    },
  },
});
</script>

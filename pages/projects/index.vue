<template>
  <div class="min-h-screen">
    <projects-header />

    <landing-section-container>
      <projects-filter @filter="fetchProjects" />
    </landing-section-container>

    <landing-section-container v-if="error">
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landing-section-container>

    <landing-section-container v-else-if="pending">
      {{ $t('general.fetchingLoading') }}
    </landing-section-container>

    <landing-section-container v-else-if="projects.length">
      <projects-list :projects="projects" />
    </landing-section-container>

    <landing-section-container v-else>
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

  head() {
    return {
      title: 'Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get an overview of all projects that are in the Ocean Protocol ecosystem.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Get an overview of all projects that are in the Ocean Protocol ecosystem.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.NUXT_ENV_ROOT_URL}/projects`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Projects | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Get an overview of all projects that are in the Ocean Protocol ecosystem.',
        },
      ],
      link: [
        { rel: 'canonical', href: `${process.env.NUXT_ENV_ROOT_URL}/projects` },
      ]
    }
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

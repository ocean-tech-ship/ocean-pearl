<template>
  <div class="min-h-screen">
    <projects-header />

    <landing-section-container>
      <projects-filter />
    </landing-section-container>

    <landing-section-container v-if="$store.state['projects-filter'].error">
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t($store.state['projects-filter'].error) }}</p>
    </landing-section-container>

    <landing-section-container
      v-else-if="$store.state['projects-filter'].pending"
    >
      <app-skeleton-card-list>
        <projects-skeleton-card />
      </app-skeleton-card-list>
    </landing-section-container>

    <landing-section-container
      v-else-if="$store.state['projects-filter'].projects.length"
    >
      <projects-list :projects="$store.state['projects-filter'].projects" />
      <app-pagination
        v-if="$store.state['projects-filter'].pagination"
        :page="$store.state['projects-filter'].pagination.page + 1"
        :total-pages="$store.state['projects-filter'].pagination.totalPages"
        :set-filter="setFilter"
        :fetch-projects="fetchProjects"
      />
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
        :search-used="$store.state['projects-filter'].searchUsed"
      />
    </landing-section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import ProjectsHeader from '@/components/app/projects/ProjectsHeader.vue';
import ProjectsList from '@/components/app/projects/ProjectsList.vue';
import ProjectsFilter from '@/components/app/projects/ProjectsFilter.vue';
import ProjectsSkeletonCard from '@/components/app/projects/ProjectsSkeletonCard.vue';
import AppResponseWithSearch from '@/components/common/AppResponseWithSearch.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';
import AppPagination from '@/components/common/AppPagination.vue';

export default Vue.extend({
  name: 'ProjectOverview',

  components: {
    ProjectsHeader,
    ProjectsList,
    LandingSectionContainer,
    ProjectsFilter,
    ProjectsSkeletonCard,
    AppResponseWithSearch,
    AppSkeletonCardList,
    AppPagination,
  },

  head() {
    return {
      title: 'Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Get an overview of all projects that are in the Ocean Protocol ecosystem.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Get an overview of all projects that are in the Ocean Protocol ecosystem.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.rootURL}/projects`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Projects | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            'Get an overview of all projects that are in the Ocean Protocol ecosystem.',
        },
      ],
      link: [{ rel: 'canonical', href: `${this.$config.rootURL}/projects` }],
    };
  },

  created() {
    this.fetchProjects();
  },
  methods: {
    setFilter(payload) {
      return this.$store.dispatch('projects-filter/setFilter', payload);
    },
    fetchProjects() {
      return this.$store.dispatch('projects-filter/fetchProjects');
    },
  },
});
</script>

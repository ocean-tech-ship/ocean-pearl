<template>
  <div class="min-h-screen">
    <dao-proposals-header />

    <section-container
      v-if="$store.state['dao-proposals-filter'].error"
      class="pb-4 xl:pb-16"
    >
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">
        {{ $t($store.state['dao-proposals-filter'].error) }}
      </p>
    </section-container>

    <section-container
      v-else-if="$store.state['dao-proposals-filter'].pending"
      class="pb-4 xl:pb-16"
    >
      <app-skeleton-card-list
        custom-class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        :quantity="6"
      >
        <round-metrics-skeleton-card />
      </app-skeleton-card-list>
      <hr class="text-primary my-16" />
      <app-skeleton-card-list :quantity="8">
        <dao-proposals-skeleton-card />
      </app-skeleton-card-list>
    </section-container>

    <div v-else>
      <section-container>
        <round-metrics
          :metrics="$store.state['dao-proposals-filter'].metrics"
        />
        <hr class="text-primary my-16" />
      </section-container>

      <section-container>
        <dao-proposals-filter
          :rounds="$store.state['dao-proposals-filter'].fundingRound"
          :filter="$store.state['dao-proposals-filter'].filter"
          :set-filter="setFilter"
          :fetch-metrics-and-proposals="fetchMetricsAndProposals"
        />
      </section-container>

      <section-container
        v-if="$store.state['dao-proposals-filter'].daoProposals.length"
        class="pb-4 xl:pb-16"
      >
        <dao-proposals-list
          :dao-proposals="$store.state['dao-proposals-filter'].daoProposals"
        />
        <app-pagination
          v-if="$store.state['dao-proposals-filter'].pagination"
          :pagination="$store.state['dao-proposals-filter'].pagination"
          :set-filter="setFilter"
          :fetch-page="fetchDaoProposals"
        />
      </section-container>

      <section-container v-else class="pb-4 xl:pb-16">
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
          :search-used="$store.state['dao-proposals-filter'].searchUsed"
        />
      </section-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import DaoProposalsHeader from '@/components/app/dao-proposals/DaoProposalsHeader.vue';
import RoundMetrics from '@/components/app/dao-proposals/RoundMetrics.vue';
import RoundMetricsSkeletonCard from '@/components/app/dao-proposals/RoundMetricsSkeletonCard.vue';
import DaoProposalsList from '@/components/app/dao-proposals/DaoProposalsList.vue';
import DaoProposalsFilter from '@/components/app/dao-proposals/DaoProposalsFilter.vue';
import DaoProposalsSkeletonCard from '@/components/app/dao-proposals/DaoProposalsSkeletonCard.vue';
import SectionContainer from '@/components/common/SectionContainer';
import AppResponseWithSearch from '@/components/common/AppResponseWithSearch.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';
import AppPagination from '@/components/common/AppPagination.vue';
import replaceQueryParams, {
  processQueryToFilter,
} from '@/helpers/windowHistory';

export default Vue.extend({
  name: 'DaoProjectOverview',

  components: {
    SectionContainer,
    DaoProposalsHeader,
    RoundMetrics,
    RoundMetricsSkeletonCard,
    DaoProposalsList,
    DaoProposalsFilter,
    AppResponseWithSearch,
    DaoProposalsSkeletonCard,
    AppSkeletonCardList,
    AppPagination,
  },

  // reset state and refetch if same page is navigated to via navbar
  beforeRouteUpdate(to, _from, next) {
    if (Object.keys(to.query)[0] === 'first') {
      this.resetState().then(() =>
        this.fetchMetricsAndProposals().then((query) =>
          replaceQueryParams(this, query),
        ),
      );
    }
    next();
  },

  // set exception pages where state should not be reset if navigated to
  beforeRouteLeave(to, _from, next) {
    if (to.path !== '/dao-projects/:id') {
      this.resetState();
    }
    next();
  },

  head() {
    return {
      title: 'DAO Proposals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Get an overview of all projects that have applied for funding through OceanDAO.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'DAO Proposals',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Get an overview of all projects that have applied for funding through OceanDAO.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.rootURL}/dao-proposals`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `DAO Proposals | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            'Get an overview of all projects that have applied for funding through OceanDAO.',
        },
      ],
      link: [
        { rel: 'canonical', href: `${this.$config.rootURL}/dao-proposals` },
      ],
    };
  },

  created() {
    const newFilter = processQueryToFilter(
      {
        page: this.$route.query.page,
        round: this.$route.query.round,
        category: this.$route.query.category,
        search: this.$route.query.search,
      },
      this.$store.state['dao-proposals-filter'].filter,
    );

    if (Object.entries(newFilter).length) {
      this.setPending(true).then(() =>
        this.setFilter(newFilter).then(() =>
          this.fetchMetricsAndProposals().then((query) =>
            replaceQueryParams(this, query),
          ),
        ),
      );
      return;
    }

    this.setPending(true).then(() =>
      this.fetchMetricsAndProposals().then((query) =>
        replaceQueryParams(this, query),
      ),
    );
  },

  methods: {
    resetState() {
      return this.$store.dispatch('dao-proposals-filter/resetState');
    },
    setPending(payload) {
      return this.$store.dispatch('dao-proposals-filter/setPending', payload);
    },
    setFilter(payload) {
      return this.$store.dispatch('dao-proposals-filter/setFilter', payload);
    },
    fetchDaoProposals() {
      return this.$store.dispatch('dao-proposals-filter/fetchDaoProposals');
    },
    fetchMetricsAndProposals() {
      return this.$store.dispatch(
        'dao-proposals-filter/fetchMetricsAndProposals',
      );
    },
  },
});
</script>

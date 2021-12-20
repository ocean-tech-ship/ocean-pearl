<template>
  <div class="min-h-screen">
    <dao-proposals-header />

    <landing-section-container
      v-if="$store.state['dao-proposals-filter'].error"
    >
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">
        {{ $t($store.state['dao-proposals-filter'].error) }}
      </p>
    </landing-section-container>

    <landing-section-container
      v-else-if="$store.state['dao-proposals-filter'].pending"
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
    </landing-section-container>

    <div v-else>
      <landing-section-container>
        <round-metrics
          :metrics="$store.state['dao-proposals-filter'].metrics"
        />
        <hr class="text-primary my-16" />
      </landing-section-container>

      <landing-section-container>
        <dao-proposals-filter
          :rounds="$store.state['dao-proposals-filter'].fundingRound"
          :filter="$store.state['dao-proposals-filter'].filter"
          :set-filter="setFilter"
          :fetch-metrics-and-proposals="fetchMetricsAndProposals"
        />
      </landing-section-container>

      <landing-section-container
        v-if="$store.state['dao-proposals-filter'].daoProposals.length"
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
          :search-used="$store.state['dao-proposals-filter'].searchUsed"
        />
      </landing-section-container>
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
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import AppResponseWithSearch from '@/components/common/AppResponseWithSearch.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';
import AppPagination from '@/components/common/AppPagination.vue';
import CategoryEnum from '@/enums/Category.enum';
import replaceQueryParams, {
  getFirstInstanceParam,
} from '@/helpers/windowHistory';

export default Vue.extend({
  name: 'DaoProjectOverview',

  components: {
    DaoProposalsHeader,
    RoundMetrics,
    RoundMetricsSkeletonCard,
    DaoProposalsList,
    DaoProposalsFilter,
    LandingSectionContainer,
    AppResponseWithSearch,
    DaoProposalsSkeletonCard,
    AppSkeletonCardList,
    AppPagination,
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
    const page = getFirstInstanceParam(this.$route.query.page);
    const round = getFirstInstanceParam(this.$route.query.round);
    const category = getFirstInstanceParam(this.$route.query.category);
    const search = getFirstInstanceParam(this.$route.query.search);

    if (page || round || category || search) {
      const newFilter = {
        page:
          page && parseInt(page)
            ? parseInt(page)
            : this.$store.state['dao-proposals-filter'].filter.page,
        round:
          round && parseInt(round)
            ? parseInt(round)
            : this.$store.state['dao-proposals-filter'].filter.round,
        category: Object.values(CategoryEnum).includes(category)
          ? category
          : this.$store.state['dao-proposals-filter'].filter.category,
        search:
          search || search === ''
            ? search
            : this.$store.state['dao-proposals-filter'].filter.search,
      };

      this.setPending(true).then(() =>
        this.setFilter(newFilter).then(() =>
          this.fetchMetricsAndProposals().then((query) =>
            replaceQueryParams(this, query),
          ),
        ),
      );
    }

    this.setPending(true).then(this.fetchMetricsAndProposals);
  },

  methods: {
    setPending(pending) {
      return this.$store.dispatch('dao-proposals-filter/setPending', pending);
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

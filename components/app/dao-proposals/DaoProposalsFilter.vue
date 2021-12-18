<template>
  <div class="my-8 flex flex-col justify-between md:flex-row md:items-center">
    <DaoProposalsDropdowns
      class="flex flex-col 2sm:flex-row md:flex-col lg:flex-row"
      :filter="filter"
      :rounds="rounds"
      @selected-items="setFilterAndFetch"
    />
    <AppSearchBar
      class="rw-1/1 mt-2 md:w-1/2 xl:w-1/3 md:m-0"
      placeholder="Search Proposals"
      :initial-value="filter.search"
      @search="setFilterAndFetch"
    />
  </div>
</template>

<script>
import DaoProposalsDropdowns from './DaoProposalsDropdowns.vue';
import AppSearchBar from '@/components/common/AppSearchbar.vue';
import CategoryEnum from '@/enums/Category.enum';
import replaceQueryParams from '@/helpers/windowHistory.ts';

export default {
  name: 'DaoProposalsFilter',

  components: {
    AppSearchBar,
    DaoProposalsDropdowns,
  },

  props: {
    rounds: {
      type: Number,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
    setFilter: {
      type: Function,
      required: true,
    },
    fetchDaoRoundMetrics: {
      type: Function,
      required: true,
    },
    fetchDaoProposals: {
      type: Function,
      required: true,
    },
  },

  methods: {
    setFilterAndFetch(payload) {
      const { round, category, search } = payload;

      // set new filter
      const newFilter = {
        page: 1,
        round: round || round === 0 ? round : this.filter.round,
        category: Object.values(CategoryEnum).includes(category)
          ? category
          : this.filter.category,
        search: search || search === '' ? search : this.filter.search,
      };

      this.setFilter(newFilter).then(
        this.fetchDaoRoundMetrics().then(
          this.fetchDaoProposals().then((query) => {
            replaceQueryParams(this, query);
          }),
        ),
      );
    },
  },
};
</script>

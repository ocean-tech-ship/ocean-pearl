<template>
  <div class="my-8 flex flex-col justify-between md:flex-row md:items-center">
    <DaoProposalsDropdowns
      class="flex flex-col 2sm:flex-row md:flex-col lg:flex-row"
      :rounds="rounds"
      @selected-items="setFilter"
    />
    <DaoProposalsSearchbar
      class="rw-1/1 mt-2 md:w-1/2 xl:w-1/3 md:m-0"
      @search-projects="setFilter"
    />
  </div>
</template>

<script>
import DaoProposalsDropdowns from './DaoProposalsDropdowns.vue';
import DaoProposalsSearchbar from './DaoProposalsSearchbar.vue';

export default {
  name: 'DaoProjectsFilter',

  components: {
    DaoProposalsSearchbar,
    DaoProposalsDropdowns,
  },
  props: {
    rounds: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      filter: {
        round: 0,
        category: 'all',
        search: '',
      },
    };
  },
  watch: {
    filter: {
      deep: true,
      handler: function emit() {
        // restructure filter items for backend compatibility
        const { filter } = this;
        if (filter.round === 0) delete filter.round;
        if (filter.category === 'all') delete filter.category;
        if (filter.search === '') delete filter.search;

        this.$emit('filter', filter);
      },
    },
  },
  methods: {
    setFilter(payload) {
      const { round, category, searchValue } = payload;

      // set new filter
      this.filter = {
        round: round || round === 0 ? round : this.filter.round,
        category: category || category === 0 ? category : this.filter.category,
        search:
          searchValue || searchValue === '' ? searchValue : this.filter.search,
      };
    },
  },
};
</script>

<style scoped></style>

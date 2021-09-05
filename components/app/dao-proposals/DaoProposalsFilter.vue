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
import { CategoryMap } from '~/components/constants/CategoryMap.constant';

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
        const filterRestructed = { ...this.filter };
        if (filterRestructed.round === 0) delete filterRestructed.round;
        if (filterRestructed.category === 'all')
          delete filterRestructed.category;
        if (filterRestructed.search === '') delete filterRestructed.search;

        this.$emit('filter', filterRestructed);
      },
    },
  },
  created() {
    if (Object.keys(this.$route.query).length) {
      const { round, category, search } = this.$route.query;

      // set new filter
      this.filter = {
        round: round <= this.rounds && round > 0 ? round : this.filter.round,
        category: Object.prototype.hasOwnProperty.call(CategoryMap, category)
          ? category
          : this.filter.category,
        search: search || search === '' ? search : this.filter.search,
      };
    }

    // replace history state
    if (!process.server) {
      const url =
        window.location.origin +
        this.$nuxt.$router.resolve({ query: this.filter }).href;
      history.replaceState({}, null, url);
    }
  },
  methods: {
    setFilter(payload) {
      const { round, category, searchValue } = payload;

      // set new filter
      this.filter = {
        round: round || round === 0 ? round : this.filter.round,
        category: category || this.filter.category,
        search:
          searchValue || searchValue === '' ? searchValue : this.filter.search,
      };

      // replace history state
      if (!process.server) {
        const url =
          window.location.origin +
          this.$nuxt.$router.resolve({
            query: this.filter,
          }).href;
        history.replaceState({}, null, url);
      }
    },
  },
};
</script>

<style scoped></style>

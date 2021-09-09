<template>
  <div class="my-8 flex flex-col justify-between md:flex-row md:items-center">
    <ProjectsDropdowns
      class="flex flex-col 2sm:flex-row md:flex-col lg:flex-row"
      :filter="filter"
      @selected-items="setFilter"
    />
    <AppSearchBar
      class="rw-1/1 mt-2 md:w-1/2 xl:w-1/3 md:m-0"
      placeholder="Search Project"
      :initial-value="filter.search"
      @search="setFilter"
    />
  </div>
</template>

<script>
import ProjectsDropdowns from './ProjectsDropdowns.vue';
import AppSearchBar from '@/components/common/AppSearchbar.vue';
import CategoryEnum from '@/components/enums/Category.enum';
import replaceQueryParams from '@/helpers/windowHistory.ts';

export default {
  name: 'ProjectsFilter',

  components: {
    AppSearchBar,
    ProjectsDropdowns,
  },
  data() {
    return {
      filter: {
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
        if (filterRestructed.category === 'all')
          delete filterRestructed.category;
        if (filterRestructed.search === '') delete filterRestructed.search;

        this.$emit('filter', filterRestructed);
      },
    },
  },
  created() {
    if (Object.keys(this.$route.query).length) {
      const { category, search } = this.$route.query;

      // set new filter
      this.filter = {
        category: Object.values(CategoryEnum).includes(category)
          ? category
          : this.filter.category,
        search: search || search === '' ? search : this.filter.search,
      };
    }

    // replace history state
    replaceQueryParams(this, this.filter);
  },
  methods: {
    setFilter(payload) {
      const { category, searchValue } = payload;

      // set new filter
      this.filter = {
        category: category || this.filter.category,
        search:
          searchValue || searchValue === '' ? searchValue : this.filter.search,
      };

      // replace history state
      replaceQueryParams(this, this.filter);
    },
  },
};
</script>

<style scoped></style>

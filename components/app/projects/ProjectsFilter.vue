<template>
  <div class="my-8 flex flex-col justify-between md:flex-row md:items-center">
    <ProjectsDropdowns
      class="flex flex-col 2sm:flex-row md:flex-col lg:flex-row"
      :filter="filter"
      @selected-items="setFilterAndFetch"
    />
    <AppSearchBar
      class="rw-1/1 mt-2 md:w-1/2 xl:w-1/3 md:m-0"
      label="Search Project"
      :initial-value="filter.search"
      @search="setFilterAndFetch"
    />
  </div>
</template>

<script>
import ProjectsDropdowns from './ProjectsDropdowns.vue';
import AppSearchBar from '@/components/common/AppSearchbar.vue';
import CategoryEnum from '@/enums/Category.enum';
import replaceQueryParams from '@/helpers/windowHistory';

export default {
  name: 'ProjectsFilter',

  components: {
    AppSearchBar,
    ProjectsDropdowns,
  },

  props: {
    filter: {
      type: Object,
      required: true,
    },
    setFilter: {
      type: Function,
      required: true,
    },
    fetchProjects: {
      type: Function,
      required: true,
    },
  },

  methods: {
    setFilterAndFetch(payload) {
      const { category, search } = payload;

      // set new filter
      const newFilter = {
        page: 1,
        category: Object.values(CategoryEnum).includes(category)
          ? category
          : this.filter.category,
        search: search || search === '' ? search : this.filter.search,
      };

      this.setFilter(newFilter).then(() =>
        this.fetchProjects().then((query) => replaceQueryParams(this, query)),
      );
    },
  },
};
</script>

<template>
  <div v-if="totalPages > 1" class="my-12 flex justify-center">
    <div class="btn-group">
      <button
        class="btn btn-xs sm:btn-sm md:btn-md"
        :disabled="page === 1"
        @click="goToPage(page - 1)"
      >
        «
      </button>
      <button
        v-for="i in displayedPages"
        :id="`page${i}`"
        :key="`btn-pagination-${i === '...' ? i + Math.random() : i}`"
        class="btn btn-xs sm:btn-sm md:btn-md"
        name="pagination"
        :class="{ 'btn-active': page === i }"
        :disabled="i === '...'"
        @click="goToPage(i)"
      >
        {{ i }}
      </button>
      <button
        class="btn btn-xs sm:btn-sm md:btn-md"
        :disabled="page === totalPages"
        @click="goToPage(page + 1)"
      >
        »
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',

  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    pagination: {
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

  data() {
    return {
      displayedPages: null,
    };
  },

  watch: {
    pagination: {
      deep: true,
      handler() {
        this.buildPages();
      },
    },
  },

  mounted() {
    this.buildPages();
  },

  methods: {
    goToPage(page) {
      this.setFilter({ page: page - 1 }).then(this.fetchProjects);
    },
    buildPages() {
      if (this.totalPages > 9 && this.totalPages - 4 <= this.page) {
        this.displayedPages = this.buildEndPages();
      } else if (this.totalPages > 9 && this.page > 5) {
        this.displayedPages = this.buildCenterPages();
      } else {
        this.displayedPages = this.buildStartPages();
      }
    },
    buildStartPages() {
      const pagesArr = [];
      for (let i = 1; i <= (this.totalPages > 9 ? 7 : this.totalPages); i++) {
        pagesArr.push(i);
      }
      if (this.totalPages > 9) {
        pagesArr.push('...');
        pagesArr.push(this.totalPages);
      }
      return pagesArr;
    },
    buildCenterPages() {
      return [
        1,
        '...',
        this.page - 2,
        this.page - 1,
        this.page,
        this.page + 1,
        this.page + 2,
        '...',
        this.totalPages,
      ];
    },
    buildEndPages() {
      return [
        1,
        '...',
        this.totalPages - 6,
        this.totalPages - 5,
        this.totalPages - 4,
        this.totalPages - 3,
        this.totalPages - 2,
        this.totalPages - 1,
        this.totalPages,
      ];
    },
  },
};
</script>

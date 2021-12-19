<template>
  <div
    v-if="pagination.totalPages > 1"
    ref="paginationWrapper"
    class="my-12 flex justify-center"
  >
    <div class="btn-group flex-nowrap">
      <button
        class="btn btn-outline no-animation btn-xs mr-1 sm:btn-sm md:btn-md"
        :class="{ 'btn-primary': pagination.page !== 1 }"
        :disabled="pagination.page === 1"
        @click="goToPage(pagination.page - 1)"
      >
        «
      </button>
      <button
        v-for="i in displayedPages"
        :id="`page${i}`"
        :key="`btn-pagination-${i === '...' ? i + Math.random() : i}`"
        class="btn btn-outline no-animation btn-xs mx-1 sm:btn-sm md:btn-md"
        name="pagination"
        :class="{
          'btn-active': pagination.page === i,
          'btn-primary': i !== '...',
        }"
        :disabled="i === '...'"
        @click="goToPage(i)"
      >
        {{ i }}
      </button>
      <button
        class="btn btn-outline no-animation btn-xs ml-1 sm:btn-sm md:btn-md"
        :class="{ 'btn-primary': pagination.page !== pagination.totalPages }"
        :disabled="pagination.page === pagination.totalPages"
        @click="goToPage(pagination.page + 1)"
      >
        »
      </button>
    </div>
  </div>
</template>

<script>
import replaceQueryParams from '@/helpers/windowHistory';

export default {
  name: 'AppPagination',

  props: {
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

  created() {
    this.buildPages();
  },

  methods: {
    goToPage(page) {
      this.setFilter({ page }).then(() =>
        this.fetchProjects().then((query) => {
          const paginationWrapper = this.$refs.paginationWrapper;
          const top = paginationWrapper.offsetTop;
          window.scrollTo(0, top);
          replaceQueryParams(this, query);
        }),
      );
    },

    buildPages() {
      if (
        this.pagination.totalPages > 9 &&
        this.pagination.totalPages - 4 <= this.pagination.page
      ) {
        this.displayedPages = this.buildEndPages();
      } else if (this.pagination.totalPages > 9 && this.pagination.page > 5) {
        this.displayedPages = this.buildCenterPages();
      } else {
        this.displayedPages = this.buildStartPages();
      }
    },

    buildStartPages() {
      const pagesArr = [];
      for (
        let i = 1;
        i <= (this.pagination.totalPages > 9 ? 7 : this.pagination.totalPages);
        i++
      ) {
        pagesArr.push(i);
      }
      if (this.pagination.totalPages > 9) {
        pagesArr.push('...');
        pagesArr.push(this.pagination.totalPages);
      }
      return pagesArr;
    },

    buildCenterPages() {
      return [
        1,
        '...',
        this.pagination.page - 2,
        this.pagination.page - 1,
        this.pagination.page,
        this.pagination.page + 1,
        this.pagination.page + 2,
        '...',
        this.pagination.totalPages,
      ];
    },

    buildEndPages() {
      return [
        1,
        '...',
        this.pagination.totalPages - 6,
        this.pagination.totalPages - 5,
        this.pagination.totalPages - 4,
        this.pagination.totalPages - 3,
        this.pagination.totalPages - 2,
        this.pagination.totalPages - 1,
        this.pagination.totalPages,
      ];
    },
  },
};
</script>

<style lang="scss">
.btn-group {
  button:disabled {
    background: #ffffff;
    border-color: #c4c4c4;
    color: #c4c4c4;
  }
}
</style>

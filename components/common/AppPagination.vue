<template>
  <div
    v-if="pagination.totalPages > 1"
    ref="paginationWrapper"
    class="mt-12 flex justify-center"
  >
    <div class="btn-group">
      <button
        class="btn btn-xs btn-outline no-animation w-[30px] h-[30px] mr-1 mb-1 sm:btn-sm md:btn-md sm:w-[40px] sm:h-auto"
        :class="{ 'btn-primary': pagination.page !== 1 }"
        :disabled="pagination.page === 1"
        @click="goToPage(pagination.page - 1)"
      >
        «
      </button>
      <button
        v-for="(page, index) in displayedPages"
        :id="`page${page}`"
        :key="index"
        class="btn btn-xs btn-outline no-animation w-[30px] h-[30px] mx-1 mb-1 sm:btn-sm md:btn-md sm:w-[40px] sm:h-auto"
        name="pagination"
        :class="{
          'btn-active': pagination.page === page,
          'btn-primary': page !== '...',
        }"
        :disabled="page === '...'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        class="btn btn-xs btn-outline no-animation w-[30px] h-[30px] ml-1 mb-1 sm:btn-sm md:btn-md sm:w-[40px] sm:h-auto"
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
    fetchPage: {
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
        this.fetchPage().then((query) => {
          const paginationWrapper = this.$refs.paginationWrapper;
          const top = paginationWrapper.offsetTop;
          window.scrollTo(0, top);
          replaceQueryParams(this, query);
        }),
      );
    },

    buildPages() {
      let pagesArr = [1, 2, 3, 4, 5, '...', this.pagination.totalPages];

      if (this.pagination.totalPages <= 7) {
        pagesArr = [];
        for (let i = 1; i <= this.pagination.totalPages; i++) {
          pagesArr.push(i);
        }
      } else if (
        this.pagination.totalPages > 7 &&
        this.pagination.page > 3 &&
        !(this.pagination.totalPages - 2 <= this.pagination.page)
      ) {
        pagesArr = [
          1,
          '...',
          this.pagination.page - 1,
          this.pagination.page,
          this.pagination.page + 1,
          '...',
          this.pagination.totalPages,
        ];
      } else if (
        this.pagination.totalPages > 7 &&
        this.pagination.totalPages - 2 <= this.pagination.page
      ) {
        pagesArr = [
          1,
          '...',
          this.pagination.totalPages - 4,
          this.pagination.totalPages - 3,
          this.pagination.totalPages - 2,
          this.pagination.totalPages - 1,
          this.pagination.totalPages,
        ];
      }

      this.displayedPages = pagesArr;
    },
  },
};
</script>

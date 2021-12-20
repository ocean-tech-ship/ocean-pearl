<template>
  <div
    v-if="pagination.totalPages > 1"
    ref="paginationWrapper"
    class="my-12 flex justify-center"
  >
    <div class="btn-group">
      <button
        class="btn btn-outline no-animation mr-1 mb-1 btn-sm md:btn-md"
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
        class="btn btn-outline no-animation mx-1 mb-1 btn-sm md:btn-md"
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
        class="btn btn-outline no-animation ml-1 mb-1 btn-sm md:btn-md"
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
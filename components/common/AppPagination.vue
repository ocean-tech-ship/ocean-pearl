<template>
  <div class="my-10">
    <div class="btn-group">
      <input
        id="page1"
        class="btn"
        type="radio"
        data-title="1"
        name="pagination"
        :checked="currentPage === 1"
        @click="goToPage(1, 'down')"
      />
      <button
        class="btn"
        :disabled="currentPage === 1"
        @click="
          goToPage(currentPage <= 1 ? currentPage : currentPage - 1, 'down')
        "
      >
        «
      </button>
      <input
        v-for="i in centerPages"
        :id="`page${i}`"
        :key="`btn-pagination-${i}`"
        class="btn"
        type="radio"
        :data-title="i"
        name="pagination"
        :checked="currentPage === i"
        @click="goToPage(i, i < centerPages[1] ? 'down' : 'up')"
      />
      <button
        class="btn"
        :disabled="currentPage === pages"
        @click="
          goToPage(currentPage >= pages ? currentPage : currentPage + 1, 'up')
        "
      >
        »
      </button>
      <input
        :id="`page${pages}`"
        class="btn"
        type="radio"
        :data-title="pages"
        name="pagination"
        :checked="currentPage === pages"
        @click="goToPage(pages, 'up')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',

  props: {
    pages: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      centerPages: [2, 3, 4],
      currentPage: 1,
    };
  },

  methods: {
    goToPage(page, direction) {
      this.currentPage = page;
      if (page === 1) {
        this.centerPages = [2, 3, 4];
      } else if (page === this.pages) {
        this.centerPages = [this.pages - 3, this.pages - 2, this.pages - 1];
      } else if (
        direction === 'down' &&
        this.centerPages.indexOf(this.currentPage) === 0
      ) {
        this.centerPages = [
          this.currentPage - 1 === 1 ? 2 : this.currentPage - 1,
          this.currentPage - 1 === 1 ? 3 : this.currentPage,
          this.currentPage - 1 === 1 ? 4 : this.currentPage + 1,
        ];
      } else if (
        direction === 'up' &&
        this.centerPages.indexOf(this.currentPage) === 2
      ) {
        this.centerPages = [
          this.currentPage + 1 === this.pages
            ? this.pages - 3
            : this.currentPage - 1,
          this.currentPage + 1 === this.pages
            ? this.pages - 2
            : this.currentPage,
          this.currentPage + 1 === this.pages
            ? this.pages - 1
            : this.currentPage + 1,
        ];
      }
    },
  },
};
</script>

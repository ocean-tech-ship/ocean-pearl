<template>
  <div v-if="pages > 1" class="my-10">
    <div class="btn-group">
      <button
        class="btn-sm sm:btn"
        :disabled="activePage === 1"
        @click="goToPage(activePage <= 1 ? activePage : activePage - 1)"
      >
        «
      </button>
      <button
        v-for="i in displayedPages"
        :id="`page${i}`"
        :key="`btn-pagination-${i}`"
        class="btn-sm sm:btn"
        name="pagination"
        :class="{ 'btn-active': activePage === i }"
        :disabled="i === '...'"
        @click="goToPage(i)"
      >
        {{ i }}
      </button>
      <button
        class="btn-sm sm:btn"
        :disabled="activePage === pages"
        @click="goToPage(activePage >= pages ? activePage : activePage + 1)"
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
    activePage: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
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
      displayedPages:
        this.pages > 6
          ? [1, 2, 3, 4, 5, '...', this.pages]
          : [1, 2, 3, 4, 5, 6],
    };
  },

  watch: {
    activePage: {
      handler() {
        this.startPage = this.activePage - 2;
        this.endPage = this.activePage + 4;

        if (this.startPage < 1) this.startPage = 1;
        if (this.endPage > this.pages) this.endPage = this.pages;
      },
    },
  },

  methods: {
    goToPage(page) {
      this.setFilter({ page: page - 1 }).then();
    },
  },
};
</script>

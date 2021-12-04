<template>
  <div v-if="pages > 1" class="my-10">
    <div class="btn-group">
      <button
        class="btn"
        :disabled="activePage === 1"
        @click="goToPage(activePage <= 1 ? activePage : activePage - 1)"
      >
        «
      </button>
      <button
        v-for="i in pages"
        :id="`page${i}`"
        :key="`btn-pagination-${i}`"
        class="btn"
        name="pagination"
        :class="{ 'btn-active': activePage === i }"
        @click="goToPage(i)"
      >
        {{ i }}
      </button>
      <button
        class="btn"
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
  },

  data() {
    return {
      displayedPages: [],
    };
  },

  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

/* eslint-disable prettier/prettier */
<template>
  <div class="space-x-4 flex hidden lg:flex">
    <form>
      <input
        v-model="searchValue"
        type="text"
        placeholder="search project..."
        class="py-3 pl-3 w-96 border-primary rounded border"
        @input="handleSearch"
      />
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search-projects', { searchValue: this.searchValue })
    },
  },
}
</script>

<style></style>

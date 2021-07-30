<template>
  <div class="space-x-4 flex hidden lg:flex">
    <form>
      <input
        v-model="searchValue"
        type="text"
        placeholder="search project..."
        class="py-3 pl-3 w-96 border-primary rounded border"
      />
    </form>
  </div>
</template>

<script>
import debounce from '~/helpers/debounce.ts'

export default {
  data() {
    return {
      searchValue: '',
    }
  },
  watch: {
    searchValue: debounce(function () {
      this.$emit('search-projects', { searchValue: this.searchValue })
    }, 500),
  },
}
</script>

<style></style>

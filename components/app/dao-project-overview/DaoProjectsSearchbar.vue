<template>
  <div class="space-x-4 min-w-full mt-6 2sm:mt-3 flex lg:mt-0 lg:min-w-0">
    <input
      v-model="searchValue"
      type="text"
      placeholder="search project..."
      class="py-3 pl-3 w-96 border-primary rounded border min-w-full"
    />
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

<style lang="scss" scoped></style>
>

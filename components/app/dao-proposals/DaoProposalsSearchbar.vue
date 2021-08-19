<template>
  <div class="w-full">
    <input
      id="dao-projects-search"
      v-model="searchValue"
      type="text"
      class="py-3 pl-3 w-96 border-primary rounded border min-w-full"
      @focus="focused = true"
      @blur="focused = false"
    />
    <label
      class="absolute text-primary p-1"
      :class="{ isFocused: focused || searchValue }"
      for="dao-projects-search"
      >Search Projects</label
    >
  </div>
</template>

<script>
import debounce from '~/helpers/debounce.ts';

export default {
  data() {
    return {
      searchValue: '',
      focused: false,
    };
  },
  watch: {
    searchValue: debounce(function () {
      this.$emit('search-projects', { searchValue: this.searchValue });
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
label {
  top: 9.2px;
  left: 12px;
  transition: 200ms;
  z-index: 50;
  background: #fff;
}
.isFocused {
  font-size: 0.7rem;
  top: -11.7px;
}
</style>

<template>
  <div class="w-full relative">
    <input
      id="search-bar"
      v-model="searchValue"
      type="text"
      class="py-3 pl-3 w-1/1 border-primary rounded border min-w-full"
      @focus="focused = true"
      @blur="focused = false"
    />
    <label
      class="absolute text-primary p-1"
      :class="{ isFocused: focused || searchValue }"
      for="search-bar"
      >{{ placeholder }}</label
    >
  </div>
</template>

<script>
import debounce from '~/helpers/debounce.ts';

export default {
  props: {
    placeholder: {
      type: String,
      default: () => 'Search Projects',
    },
    initialValue: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      searchValue: this.initialValue,
      focused: false,
    };
  },
  watch: {
    searchValue: debounce(function () {
      this.$emit('search', { searchValue: this.searchValue });
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
label {
  top: 9.2px;
  left: 12px;
  transition: 200ms;
  z-index: 30;
  background: #fff;
}
.isFocused {
  font-size: 0.7rem;
  top: -11.7px;
}
</style>

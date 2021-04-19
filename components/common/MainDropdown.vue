<template>
  <div class="flex justify-center">
    <div class="relative">
      <div v-if="open" @click="open = false" class="fixed inset-0"></div>
      <slot :open="open" :toggleOpen="toggleOpen"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    }
  }
};
</script>
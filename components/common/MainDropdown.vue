<template>
  <div class="flex justify-center">
    <div class="relative">
      <div v-if="open" class="fixed inset-0" @click="open = false"></div>
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
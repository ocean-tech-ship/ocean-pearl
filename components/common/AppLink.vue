<template>
  <nuxt-link v-if="isNuxtLink" :to="to"><slot></slot></nuxt-link>
  <a v-else :href="to" target="_blank" rel="noopener noreferrer"
    ><slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppLink',
  props: ['to'],
  computed: {
    isNuxtLink() {
      if (this.to) {
        return this.to.substring(0, 1) === '/';
      }
      return false;
    },
  },
};
</script>

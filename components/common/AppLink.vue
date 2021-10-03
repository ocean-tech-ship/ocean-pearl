<template>
  <nuxt-link v-if="isNuxtLink" :to="to" :data-analytics="dataAnalytics"><slot></slot></nuxt-link>
  <a v-else :href="to" :data-analytics="dataAnalytics" target="_blank" rel="noopener noreferrer"
    ><slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppLink',

  props: {
    to: {
      type: String,
      required: true
    },

    dataAnalytics: {
      type: String,
      required: false,
      default: null,
    },
  },

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

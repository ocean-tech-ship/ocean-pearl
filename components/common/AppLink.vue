<template>
  <span v-if="isNuxtLink && storeName" @click="resetStateOf(to)">
    <nuxt-link
      :to="to"
      :data-analytics="dataAnalytics"
      :active-class="activeClass"
      ><slot></slot
    ></nuxt-link>
  </span>
  <nuxt-link
    v-else-if="isNuxtLink"
    :to="to"
    :data-analytics="dataAnalytics"
    :active-class="activeClass"
    ><slot></slot
  ></nuxt-link>
  <a
    v-else
    :href="to"
    :data-analytics="dataAnalytics"
    target="_blank"
    rel="noopener noreferrer"
    ><slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppLink',

  props: {
    to: {
      type: String,
      required: true,
    },

    storeName: {
      type: String,
      required: false,
      default: '',
    },

    dataAnalytics: {
      type: String,
      required: false,
      default: null,
    },

    activeClass: {
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

  methods: {
    resetStateOf(route) {
      if (this.$route.path === route) {
        this.$store
          .dispatch(`${this.storeName}/resetState`)
          .then(() => this.$store.dispatch(`${this.storeName}/fetchAll`));
      }
    },
  },
};
</script>

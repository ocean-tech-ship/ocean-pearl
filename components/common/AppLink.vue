<template>
  <!-- Links with daisyUI link styling -->
  <nuxt-link
    v-if="isNuxtLink && linkStyle"
    class="link"
    :class="{
      'link-hover': linkHover,
      'link-primary': linkPrimary,
      'link-secondary': linkSecondary,
      'link-accent': linkAccent,
      'link-neutral': linkNeutral,
    }"
    :to="to"
    :data-analytics="dataAnalytics"
    :active-class="activeClass"
    ><slot></slot
  ></nuxt-link>
  <a
    v-else-if="!isNuxtLink && linkStyle"
    class="link"
    :class="{
      'link-hover': linkHover,
      'link-primary': linkPrimary,
      'link-secondary': linkSecondary,
      'link-accent': linkAccent,
      'link-neutral': linkNeutral,
    }"
    :href="to"
    :data-analytics="dataAnalytics"
    target="_blank"
    rel="noopener noreferrer"
    ><slot></slot>
  </a>

  <!-- Links without daisyUI link styling -->
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

    linkStyle: {
      type: Boolean,
      default: false,
    },

    linkHover: {
      type: Boolean,
      default: true,
    },

    linkPrimary: {
      type: Boolean,
      default: false,
    },

    linkSecondary: {
      type: Boolean,
      default: false,
    },

    linkAccent: {
      type: Boolean,
      default: false,
    },

    linkNeutral: {
      type: Boolean,
      default: false,
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

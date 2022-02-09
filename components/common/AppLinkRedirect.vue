<!-- This component should ONLY be used for user generated content urls -->
<template>
  <nuxt-link
    :target="isInternalLink(to) ? '' : '_blank'"
    :to="getTargetLink(to)"
    :data-analytics="dataAnalytics"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppLinkRedirect',

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
  },

  methods: {
    getTargetLink(to) {
      if (this.isInternalLink(to)) {
        // Internal nuxt link
        return to;
      } else {
        return `/redirect?url=${encodeURIComponent(to)}`;
      }
    },

    isInternalLink(to) {
      return to && to.startsWith('/');
    },
  },
};
</script>

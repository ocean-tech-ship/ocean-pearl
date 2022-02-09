<!-- This component should ONLY be used for user generated content urls -->
<template>
  <nuxt-link
    v-if="internal || !whitelisted"
    :target="internal ? '' : '_blank'"
    :to="getTargetLink(to)"
    :data-analytics="dataAnalytics"
  >
    <slot />
  </nuxt-link>

  <a
    v-else
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    :data-analytics="dataAnalytics"
  >
    <slot />
  </a>
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

  computed: {
    internal() {
      return this.to && this.to.startsWith('/');
    },

    whitelisted() {
      const hostname = new URL(this.to).hostname.toLowerCase();

      // Whitelisted hostnames - see SocialMedia
      return [
        'github.com',
        'twitter.com',
        'linkedin.com',
        'reddit.com',
        'facebook.com',
        'telegram.org',
        't.me',
        'discord.com',
        'discord.gg',
        'medium.com',
        'youtube.com',
      ].includes(hostname);
    },
  },

  methods: {
    getTargetLink(to) {
      return this.internal || this.whitelisted
        ? to
        : `/redirect?url=${encodeURIComponent(to)}`;
    },
  },
};
</script>

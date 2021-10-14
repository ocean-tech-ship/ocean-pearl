<template>
  <section-container>
    Welcome to the newly created leaderboard.
  </section-container>
</template>

<script>
import Vue from 'vue';
import SectionContainer from '@/components/common/SectionContainer.vue';

export default Vue.extend({
  components: { SectionContainer },

  head() {
    return {
      title: this.$t('leaderboard.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('leaderboard.meta.description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('leaderboard.meta.title'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('leaderboard.meta.description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.rootURL}/leaderboard`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('leaderboard.meta.title')} | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$t('leaderboard.meta.description'),
        },
      ],
      link: [
        { rel: 'canonical', href: `${this.$config.rootURL}/leaderboard` },
      ]
    }
  }
});
</script>

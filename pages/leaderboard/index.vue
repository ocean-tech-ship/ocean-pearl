<template>
  <section-container>
    Welcome to the newly created leaderboard.
  </section-container>
</template>

<script>
import createHead from '@/pages/leaderboard/index.head';
import Vue from 'vue';
import SectionContainer from '@/components/common/SectionContainer.vue';

export default Vue.extend({
  components: { SectionContainer },

  head() {
    return createHead(this.$config, this.$i18n)
  }
});
</script>

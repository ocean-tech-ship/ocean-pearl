<template>
  <section-container>
    <div v-if="$fetchState.pending">
      TODO: Skeleton-Loader
    </div>

    <div v-else>
      TODO: Display content
    </div>
  </section-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { getLeaderboard } from '@/api';
import { Leaderboard } from '@/models/Leaderboard.model';
import createHead from '@/pages/leaderboard/index.head';
import SectionContainer from '@/components/common/SectionContainer.vue';

export default Vue.extend({
  components: { SectionContainer },

  data() {
    return {
      leaderboard: {} as Leaderboard,
    };
  },

  async fetch() {
    this.$data.leaderboard = await getLeaderboard(this.$axios);
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },
});
</script>

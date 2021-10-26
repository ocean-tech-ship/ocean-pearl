<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
    <div
      v-for="(metric, index) in metrics"
      :key="index"
      class="rounded shadow flex items-center p-2"
    >
      <app-icon
        class="text-primary pr-2"
        :data="metric.icon"
      />

      <div>
        <p class="text-primary small-text line-clamp-1">{{ metric.title }}</p>
        <span class="text-third small-text">{{ metric.subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import hashtag from '@iconify/icons-la/hashtag';
import coins from '@iconify/icons-la/coins';
import vote from '@iconify/icons-la/vote-yea';
import rocket from '@iconify/icons-la/rocket';
import bomb from '@iconify/icons-la/bomb';
import AppIcon from '@/components/common/AppIcon.vue';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'LeaderboardMetrics',

  components: { AppIcon },

  mixins: [Numbers],

  props: {
    leaderboard: {
      type: Object,
      required: true,
    },
  },

  computed: {
    metrics() {
      const board = this.$props.leaderboard;
      const amount = board.fundedProposals?.length + board.notFundedProposals?.length;
      const burned = board.remainingGeneralFunding + board.remainingEarmarkFunding;

      return [
        {
          icon: hashtag,
          title: this.$t('leaderboard.metrics.amount.title'),
          subtitle: this.$tc('leaderboard.metrics.amount.subtitle', amount, {
            n: this.addPunctuation(amount),
          }),
        },
        {
          icon: coins,
          title: this.$t('leaderboard.metrics.available.title'),
          subtitle: this.$t('general.usd', {
            usd: this.addPunctuation(-60000000),
          }),
        },
        {
          icon: rocket,
          title: this.$t('leaderboard.metrics.requested.title'),
          subtitle: this.$t('general.usd', {
            usd: this.addPunctuation(-60000000),
          }),
        },
        {
          icon: vote,
          title: this.$t('leaderboard.metrics.votes.title'),
          subtitle: this.$t('general.ocean', {
            ocean: this.addPunctuation(-60000000),
          }),
        },
        {
          icon: bomb,
          title: this.$t('leaderboard.metrics.burned.title'),
          subtitle: this.$t('general.ocean', {
            ocean: this.addPunctuation(burned),
          }),
        },
      ];
    },
  },
};
</script>

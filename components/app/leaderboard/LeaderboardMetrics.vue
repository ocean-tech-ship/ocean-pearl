<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4"
  >
    <div
      v-for="(metric, index) in metrics"
      :key="index"
      class="rounded shadow flex items-center p-2"
    >
      <app-icon class="text-primary pr-2" :data="metric.icon" />

      <div>
        <p class="text-primary small-text line-clamp-1">{{ metric.title }}</p>
        <p class="text-third small-text">{{ metric.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import hashtag from '@iconify/icons-la/hashtag';
import coins from '@iconify/icons-la/coins';
import vote from '@iconify/icons-la/vote-yea';
import rocket from '@iconify/icons-la/rocket';
import fire from '@iconify/icons-la/fire';
import AppIcon from '@/components/common/AppIcon.vue';
import Numbers from '@/mixins/Numbers';
import PaymentOptionEnum from '~/enums/PaymentOption.enum';
import RoundStatusEnum from '~/enums/RoundStatus.enum';

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

      return [
        {
          icon: hashtag,
          title: this.$t('leaderboard.metrics.amount.title'),
          subtitle: this.$tc(
            'leaderboard.metrics.amount.subtitle',
            board.amountProposals,
            {
              n: this.addPunctuation(board.amountProposals),
            },
          ),
        },
        {
          icon: coins,
          title: this.$t('leaderboard.metrics.available.title'),
          subtitle:
            board.paymentOption === PaymentOptionEnum.Usd
              ? this.$t('general.usd', {
                  usd: this.addPunctuation(board.overallFunding),
                })
              : this.$t('general.ocean', {
                  ocean: this.addPunctuation(board.overallFunding),
                }),
        },
        {
          icon: rocket,
          title: this.$t('leaderboard.metrics.requested.title'),
          subtitle:
            board.paymentOption === PaymentOptionEnum.Usd
              ? this.$t('general.usd', {
                  usd: this.addPunctuation(board.overallRequestedFunding),
                })
              : this.$t('general.ocean', {
                  ocean: this.addPunctuation(board.overallRequestedFunding),
                }),
        },
        {
          icon: vote,
          title: this.$t('leaderboard.metrics.votes.title'),
          subtitle: this.$t('general.ocean', {
            ocean: this.addPunctuation(board.totalVotes),
          }),
        },
        {
          icon: fire,
          title:
            board.status === RoundStatusEnum.VotingFinished
              ? this.$t('leaderboard.metrics.burned.past')
              : this.$t('leaderboard.metrics.burned.future'),
          subtitle:
            board.paymentOption === PaymentOptionEnum.Usd
              ? this.$t('general.usd', {
                  usd: this.addPunctuation(
                    Object.values(board.earmarks).reduce(
                      (previous, current) =>
                        previous + current.remainingFunding,
                      board.remainingGeneralFunding,
                    ),
                  ),
                })
              : this.$t('general.ocean', {
                  ocean: this.addPunctuation(
                    Object.values(board.earmarks).reduce(
                      (previous, current) =>
                        previous + current.remainingFunding,
                      board.remainingGeneralFunding,
                    ),
                  ),
                }),
        },
      ];
    },
  },
};
</script>

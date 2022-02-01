<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4"
  >
    <div
      v-for="(metric, index) in metrics"
      :key="index"
      class="rounded shadow flex items-center p-2"
    >
      <app-icon class="w-12 text-primary pr-2" :data="metric.icon" />

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
import recycle from '@iconify/icons-la/recycle';
import fire from '@iconify/icons-la/fire';
import AppIcon from '@/components/common/AppIcon.vue';
import Numbers from '@/mixins/Numbers';
import PaymentOptionEnum from '~/enums/PaymentOption.enum';
import RoundStatusEnum from '~/enums/RoundStatus.enum';
import { RemainingFundingStrategyEnum } from '~/enums/RemainingFundingStrategy.enum';

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
      let remainingFunding = 0;

      for (const [index, grantPool] of Object.entries(board.grantPools)) {
        remainingFunding += grantPool.remainingFunding;
      }

      const remainingFundingMetric = {};

      if (
        board.remainingFundingStrategy === RemainingFundingStrategyEnum.Recycle
      ) {
        const isVotingFinished =
          board.status === RoundStatusEnum.VotingFinished;
        remainingFundingMetric.icon = isVotingFinished ? recycle : coins;
        remainingFundingMetric.title = isVotingFinished
          ? this.$t('leaderboard.metrics.unused.past')
          : this.$t('leaderboard.metrics.unused.future');
      } else {
        remainingFundingMetric.icon = fire;
        remainingFundingMetric.title = this.$t(
          'leaderboard.metrics.unused.burn',
        );
      }

      remainingFundingMetric.subtitle =
        board.paymentOption === PaymentOptionEnum.Usd
          ? this.$t('general.usd', {
              usd: this.addPunctuation(remainingFunding),
            })
          : this.$t('general.ocean', {
              ocean: this.addPunctuation(remainingFunding),
            });

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
          icon: remainingFundingMetric.icon,
          title: remainingFundingMetric.title,
          subtitle: remainingFundingMetric.subtitle,
        },
      ];
    },
  },
};
</script>

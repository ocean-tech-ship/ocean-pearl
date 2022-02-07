<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <app-tooltip v-for="card in cards" :key="card.title" :hint="card.tooltip">
      <div class="shadow bg-white rounded p-4 pb-4">
        <div class="flex align-center">
          <div class="mr-3 mt-3 text-primary">
            <app-icon :data="card.icon" />
          </div>
          <div class="text-left">
            <p class="text-primary small-text line-clamp-1">
              {{ card.title }}
            </p>
            <p class="small-text">{{ card.subtitle }}</p>
          </div>
        </div>
      </div>
    </app-tooltip>
  </div>
</template>

<script>
import projectDiagram from '@iconify/icons-la/project-diagram';
import hashtag from '@iconify/icons-la/hashtag';
import rocket from '@iconify/icons-la/rocket';
import clock from '@iconify/icons-la/clock';
import coins from '@iconify/icons-la/coins';
import vote from '@iconify/icons-la/vote-yea';
import AppTooltip from '@/components/common/AppTooltip.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'RoundMetrics',

  components: {
    AppIcon,
    AppTooltip,
  },

  mixins: [Numbers],

  props: {
    metrics: {
      type: Object,
      required: true,
      default: () => ({
        fundingRound: '',
        totalDaoProposals: '',
        currentRound: {
          startDate: new Date(),
          submissionEndDate: new Date(),
          votingStartDate: new Date(),
          endDate: new Date(),
        },
        nextRound: {
          startDate: new Date(),
          submissionEndDate: new Date(),
          votingStartDate: new Date(),
          endDate: new Date(),
        },
        totalRequestedFundingOcean: '',
        totalVotes: '',
      }),
    },
  },

  computed: {
    cards() {
      return [
        {
          title: this.$t('daoRoundData.fundingRound'),
          subtitle: this.$t('project.proposal.round.numbered', {
            round: this.$props.metrics.fundingRound,
          }),
          icon: projectDiagram,
        },
        {
          title: this.$t('daoRoundData.amountProposals'),
          subtitle: this.$t('daoRoundData.numberedProjects', {
            projects: this.$props.metrics.totalDaoProposals,
          }),
          icon: hashtag,
        },
        {
          title: this.$i18n.t(this.getSubmissionState().key),
          subtitle: this.$dateFns.formatDistanceToNow(
            this.getSubmissionState().timestamp,
            { locale: this.$i18n.locale, addSuffix: true },
          ),
          icon: rocket,
          tooltip:
            this.getSubmissionState().tooltip &&
            this.$i18n.t(this.getSubmissionState().tooltip, {
              timestamp: this.getSubmissionState().timestamp.toLocaleString(),
            }),
        },
        {
          title: this.$i18n.t(this.getVoteState().key),
          subtitle: this.$dateFns.formatDistanceToNow(
            this.getVoteState().timestamp,
            { locale: this.$i18n.locale, addSuffix: true },
          ),
          icon: clock,
          tooltip:
            this.getVoteState().tooltip &&
            this.$i18n.t(this.getVoteState().tooltip, {
              timestamp: this.getVoteState().timestamp.toLocaleString(),
            }),
        },
        {
          title: this.$t('daoRoundData.totalAmount'),
          subtitle:
            this.$props.metrics.paymentOption === 'ocean'
              ? this.$t('general.ocean', {
                  ocean: this.addPunctuation(
                    this.$props.metrics.totalRequestedFundingOcean,
                  ),
                })
              : this.$t('general.usd', {
                  usd: this.addPunctuation(
                    this.$props.metrics.totalRequestedFundingUsd,
                  ),
                }),
          icon: coins,
        },
        {
          title: this.$t('daoRoundData.totalVotes'),
          subtitle: this.$t('general.ocean', {
            ocean: this.addPunctuation(this.$props.metrics.totalVotes),
          }),
          icon: vote,
        },
      ];
    },
  },

  methods: {
    getSubmissionState() {
      const now = Date.now();
      const { metrics } = this.$props;
      const startDate = new Date(metrics.currentRound.startDate);
      const submissionEndDate = new Date(
        metrics.currentRound.submissionEndDate,
      );

      if (now < startDate) {
        // Submission has not started yet
        return {
          key: 'daoRoundData.submission.before.title',
          tooltip: 'daoRoundData.submission.before.tooltip',
          timestamp: startDate,
        };
      }

      if (now < submissionEndDate) {
        // Submission is active
        return {
          key: 'daoRoundData.submission.active.title',
          tooltip: 'daoRoundData.submission.active.tooltip',
          timestamp: submissionEndDate,
        };
      }

      if (now > new Date(metrics.currentRound.endDate)) {
        // Round ended. Show next round if possible
        if (metrics.nextRound && metrics.nextRound.endDate) {
          return {
            key: 'daoRoundData.submission.next.title',
            tooltip: 'daoRoundData.submission.next.tooltip',
            timestamp: new Date(metrics.nextRound.endDate),
          };
        }
      }

      // Submission ended
      return {
        key: 'daoRoundData.submission.after.title',
        tooltip: 'daoRoundData.submission.after.tooltip',
        timestamp: submissionEndDate,
      };
    },

    getVoteState() {
      const now = Date.now();
      const { metrics } = this.$props;
      const votingStartDate = new Date(metrics.currentRound.votingStartDate);
      const endDate = new Date(metrics.currentRound.endDate);

      if (now < votingStartDate) {
        // Voting has not started yet
        return {
          key: 'daoRoundData.vote.before.title',
          tooltip: 'daoRoundData.vote.before.tooltip',
          timestamp: votingStartDate,
        };
      }

      if (now < endDate) {
        // Voting is active
        return {
          key: 'daoRoundData.vote.active.title',
          tooltip: 'daoRoundData.vote.active.tooltip',
          timestamp: endDate,
        };
      }

      if (metrics.nextRound && metrics.nextRound.votingStartDate) {
        // Voting ended. Show next round if possible
        return {
          key: 'daoRoundData.vote.next.title',
          tooltip: 'daoRoundData.vote.next.tooltip',
          timestamp: new Date(metrics.nextRound.votingStartDate),
        };
      }

      // Voting ended
      return {
        key: 'daoRoundData.vote.after.title',
        tooltip: 'daoRoundData.vote.after.tooltip',
        timestamp: endDate,
      };
    },
  },
};
</script>

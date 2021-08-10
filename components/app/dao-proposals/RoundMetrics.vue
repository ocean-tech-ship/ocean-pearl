<template>
  <LandingSectionContainer>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-5
        gap-4
        mt-10
      "
    >
      <div v-for="card in daoInfoCards" :key="card.title">
        <div class="shadow rounded p-4 pb-4">
          <div class="flex align-center">
            <div class="mr-3">
              <img
                class="inline-block mt-3 h-6 w-6"
                :src="card.imageURL"
                :alt="card.title"
              />
            </div>
            <div>
              <p class="text-primary small-text line-clamp-1">
                {{ card.title }}
              </p>
              <p class="small-text">{{ card.daoInfo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="text-primary my-16" />
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer';

export default {
  name: 'RoundMetrics',

  components: {
    LandingSectionContainer,
  },

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
    daoInfoCards() {
      return [
        {
          title: this.$t('daoRoundData.fundingRound'),
          daoInfo: this.$t('project.proposal.round.numbered', {
            round: this.$props.metrics.fundingRound,
          }),
          imageURL: require('@/assets/images/icons/fund-round.svg'),
        },
        {
          title: this.$t('daoRoundData.amountProposals'),
          daoInfo: this.$t('daoRoundData.numberedProjects', {
            projects: this.$props.metrics.totalDaoProposals,
          }),
          imageURL: require('@/assets/images/icons/amount.svg'),
        },
        {
          title: this.$i18n.t(this.getSubmissionState().key),
          daoInfo: this.$dateFns.formatDistanceToNowStrict(
            this.getSubmissionState().timestamp,
            { locale: this.$i18n.locale, addSuffix: true },
          ),
          imageURL: require('@/assets/images/icons/rocket.svg'),
        },
        {
          title: this.$i18n.t(this.getVoteState().key),
          daoInfo: this.$dateFns.formatDistanceToNowStrict(
            this.getVoteState().timestamp,
            { locale: this.$i18n.locale, addSuffix: true },
          ),
          imageURL: require('@/assets/images/icons/countdown.svg'),
        },
        {
          title: this.$t('daoRoundData.totalAmount'),
          daoInfo:
            this.$props.metrics.paymentOption === 'ocean'
              ? this.$t('general.ocean', {
                  ocean: this.$props.metrics.totalRequestedFundingOcean,
                })
              : this.$t('general.usd', {
                  usd: this.$props.metrics.totalRequestedFundingUsd,
                }),
          imageURL: require('@/assets/images/icons/transaction.svg'),
        },
        {
          title: this.$t('daoRoundData.totalVotes'),
          daoInfo: this.$t('general.ocean', {
            ocean: this.$props.metrics.totalVotes,
          }),
          imageURL: require('@/assets/images/icons/vote.svg'),
        },
      ];
    },
  },

  methods: {
    getSubmissionState() {
      const now = Date.now();
      const metrics = this.$props.metrics;
      const startDate = new Date(metrics.currentRound.startDate);
      const submissionEndDate = new Date(
        metrics.currentRound.submissionEndDate,
      );

      if (now < startDate) {
        // Submission has not started yet
        return {
          key: 'daoRoundData.submit.before',
          timestamp: startDate,
        };
      }

      if (now < submissionEndDate) {
        // Submission is active
        return {
          key: 'daoRoundData.submit.active',
          timestamp: submissionEndDate,
        };
      }

      if (now > new Date(metrics.currentRound.endDate)) {
        // Round ended. Show next round if possible
        if (metrics.nextRound && metrics.nextRound.startDate) {
          return {
            key: 'daoRoundData.submit.next',
            timestamp: new Date(metrics.nextRound.startDate),
          };
        }
      }

      // Submission ended
      return {
        key: 'daoRoundData.submit.after',
        timestamp: submissionEndDate,
      };
    },

    getVoteState() {
      const now = Date.now();
      const metrics = this.$props.metrics;
      const votingStartDate = new Date(metrics.currentRound.votingStartDate);
      const endDate = new Date(metrics.currentRound.endDate);

      if (now < votingStartDate) {
        // Voting has not started yet
        return {
          key: 'daoRoundData.vote.before',
          timestamp: votingStartDate,
        };
      }

      if (now < endDate) {
        // Voting is active
        return {
          key: 'daoRoundData.vote.active',
          timestamp: endDate,
        };
      }

      if (metrics.nextRound && metrics.nextRound.votingStartDate) {
        // Voting ended. Show next round if possible
        return {
          key: 'daoRoundData.vote.next',
          timestamp: new Date(metrics.nextRound.votingStartDate),
        };
      }

      // Voting ended
      return {
        key: 'daoRoundData.vote.after',
        timestamp: endDate,
      };
    },
  },
};
</script>

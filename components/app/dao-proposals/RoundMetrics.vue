<template>
  <LandingSectionContainer>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-10"
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
import LandingSectionContainer from '../landing/LandingSectionContainer'

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
        metrics: {
          fundingRound: '',
          totalDaoProposals: '',
          endDate: Date.now(),
          totalRequestedFunding: '',
          totalVotes: '',
        },
      }),
    },
  },

  data() {
    return {
      daoInfoCards: [
        {
          title: this.$i18n.t('daoRoundData.fundingRound'),
          daoInfo: this.$t('project.proposal.round.numbered', {
            round: this.metrics.fundingRound,
          }),
          imageURL: require('@/assets/images/icons/fund-round.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.amountProposals'),
          daoInfo: `${this.metrics.totalDaoProposals} proposals`,
          imageURL: require('@/assets/images/icons/amount.svg'),
        },
        {
          title: this.$i18n.t(
            this.$dateFns.isPast(new Date(this.metrics.endDate))
              ? 'daoRoundData.countdown.after'
              : 'daoRoundData.countdown.before'
          ),
          daoInfo: this.$dateFns.formatDistanceToNowStrict(
            new Date(this.metrics.endDate),
            { locale: this.$i18n.locale, addSuffix: true }
          ),
          imageURL: require('@/assets/images/icons/countdown.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.totalAmount'),
          daoInfo: `${this.$i18n.t('general.ocean', {
            ocean: this.metrics.totalRequestedFunding,
          })}`,
          imageURL: require('@/assets/images/icons/transaction.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.totalVotes'),
          daoInfo: `${this.$i18n.t('general.ocean', {
            ocean: this.metrics.totalVotes,
          })}`,
          imageURL: require('@/assets/images/icons/vote.svg'),
        },
      ],
    }
  },
}
</script>

<style scoped></style>

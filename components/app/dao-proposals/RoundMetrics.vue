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
            default: () => null,
        },
    },

    computed: {
        daoInfoCards() {
            if (Object.keys(this.metrics).length === 0) {
                return []
            }

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
                title: this.$i18n.t(
                    this.$dateFns.isPast(new Date(this.metrics.endDate))
                    ? 'daoRoundData.countdown.after'
                    : 'daoRoundData.countdown.before'
                ),
                daoInfo: this.$dateFns.formatDistanceToNowStrict(
                    new Date(this.$props.metrics.endDate),
                    { locale: this.$i18n.locale, addSuffix: true }
                ),
                imageURL: require('@/assets/images/icons/countdown.svg'),
                },
                {
                title: this.$t('daoRoundData.totalAmount'),
                daoInfo: this.$t('general.ocean', {
                    ocean: this.$props.metrics.totalRequestedFunding,
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
            ]
        },
    },
}
</script>

<template>
  <LandingSectionContainer class="my-32">
    <hr class="text-primary mb-32" />
    <h2>
      {{ $t('landing.pearl_dao.title') }}
      <span class="text-primary">{{
        $t('landing.pearl_dao.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.pearl_dao.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-10"
    >
      <div v-for="card in daoInfoCards" :key="card.title">
        <div class="shadow p-4 pb-4">
          <div class="flex align-center">
            <div class="mr-3">
              <img
                class="inline-block mt-3 h-6 w-6 rounded-full ring-2 ring-white"
                :src="card.imageURL"
                :alt="card.title"
              />
            </div>
            <div>
              <p class="text-primary small-text text-primary truncate">
                {{ card.title | truncate(18) }}
              </p>
              <p class="small-text">{{ card.daoInfo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'

export default {
  name: 'LandingPearlDao',

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
        endDate: Date.now(),
        totalRequestedFunding: '',
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
          title: this.$t('daoRoundData.countdown'),
          daoInfo: this.$dateFns.formatDistanceToNowStrict(
            new Date(this.$props.metrics.endDate),
            { locale: this.$i18n.locale }
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

<style scoped></style>

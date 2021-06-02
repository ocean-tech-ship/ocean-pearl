<template>
  <LandingSectionContainer>
    <h2>
      {{ $t('dao-projects.header.title') }}
      <span class="text-primary">{{
        $t('dao-projects.header.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('dao-projects.header.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-10"
    >
      <div v-for="card in daoInfoCards" :key="card.title">
        <div class="shadow rounded p-4 pb-4">
          <div class="flex align-center">
            <div class="mr-3">
              <img
                class="inline-block mt-3 h-6 w-6 rounded-full ring-2 ring-white"
                :src="card.imageURL"
                :alt="card.title"
              />
            </div>
            <div>
              <p class="text-primary small-text truncate">
                {{ card.title | truncate(18) }}
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
  name: 'DaoProjectsHeader',

  components: {
    LandingSectionContainer,
  },
  props: {
    daoData: {
      type: Object,
      required: true,
      default: {
        metrics: {
          fundingRound: '',
          totalDaoProposals: '',
          endDate: '',
          totalRequestedFunding: '',
          totalVotes: '',
        },
      },
    },
  },
  data() {
    return {
      daoInfoCards: [
        {
          title: this.$i18n.t('daoRoundData.fundingRound'),
          daoInfo: `${this.daoData.metrics.fundingRound}`,
          imageURL: require('@/assets/images/icons/fund-round.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.amountProposals'),
          daoInfo: `${this.daoData.metrics.totalDaoProposals} proposals`,
          imageURL: require('@/assets/images/icons/amount.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.countdown'),
          daoInfo: this.$dateFns.formatDistanceStrict(
            new Date(this.daoData.metrics.endDate),
            Date.now(),
            { addSuffix: true, locale: this.$i18n.locale }
          ),
          imageURL: require('@/assets/images/icons/countdown.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.totalAmount'),
          daoInfo: `${this.$i18n.t('general.ocean', {
            ocean: this.daoData.metrics.totalRequestedFunding,
          })}`,
          imageURL: require('@/assets/images/icons/transaction.svg'),
        },
        {
          title: this.$i18n.t('daoRoundData.totalVotes'),
          daoInfo: `${this.$i18n.t('general.ocean', {
            ocean: this.daoData.metrics.totalVotes,
          })}`,
          imageURL: require('@/assets/images/icons/vote.svg'),
        },
      ],
    }
  },
}
</script>

<style scoped></style>

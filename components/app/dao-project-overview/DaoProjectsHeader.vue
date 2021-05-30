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
    },
  },
  data() {
    return {
      daoInfoCards: [
        {
          title: 'Funding Round',
          daoInfo: `${this.daoData.metrics.fundingRound} OCEAN`,
          imageURL: require('@/assets/images/icons/fund-round.svg'),
        },
        {
          title: 'Amount proposals',
          daoInfo: `${this.daoData.metrics.totalDaoProposals} proposals`,
          imageURL: require('@/assets/images/icons/amount.svg'),
        },
        {
          title: 'Countdown',
          daoInfo: this.daoData.metrics.endDate,
          imageURL: require('@/assets/images/icons/countdown.svg'),
        },
        {
          title: 'Total Amount',
          daoInfo: `${this.daoData.metrics.totalRequestedFunding} OCEAN`,
          imageURL: require('@/assets/images/icons/transaction.svg'),
        },
        {
          title: 'Total Votes',
          daoInfo: this.daoData.metrics.totalVotes,
          imageURL: require('@/assets/images/icons/vote.svg'),
        },
      ],
    }
  },
}
</script>

<style scoped></style>

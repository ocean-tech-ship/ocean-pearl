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
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingPearlDao',

  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      daoInfoCards: [
        {
          title: 'Funding Round',
          daoInfo: 'Round 6',
          imageURL: require('@/assets/images/icons/fund-round.svg'),
        },
        {
          title: 'Amount proposals',
          daoInfo: '24 projects',
          imageURL: require('@/assets/images/icons/amount.svg'),
        },
        {
          title: 'Voting ends in',
          daoInfo: '01d 3h 23min',
          imageURL: require('@/assets/images/icons/countdown.svg'),
        },
        {
          title: 'Total Amount',
          daoInfo: '1800000 OCEAN',
          imageURL: require('@/assets/images/icons/transaction.svg'),
        },
        {
          title: 'Total Votes',
          daoInfo: '30032992 OCEAN',
          imageURL: require('@/assets/images/icons/vote.svg'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

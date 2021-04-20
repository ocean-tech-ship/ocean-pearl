<template>
  <LandingSectionContainer class="my-32">
    <h2>{{ $t('landing.dao_proposals.title') }} <span class="text-primary">{{ $t('landing.dao_proposals.titleHighlight') }}</span></h2>
    <p>{{ $t('landing.dao_proposals.text') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10">
     <div v-for="daoProposal in daoProposals" :key="daoProposal.id">
        <NuxtLink to="/project-overview">
          <div class="shadow p-8">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="daoProposal.logo"
                  :alt="daoProposal.title"
                />
              </div>
              <div>
                <p class="text-primary p-line-head">{{ daoProposal.title }}</p>
                <p class="small-text">{{ daoProposal.category }}</p>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/start-fund.png"
                  alt="funding-start"
                />
                <p class="small-text text-primary">Start</p>
              </div>
              <p class="small-text">{{ daoProposal.startDate }}</p>
            </div>
            <div class="mt-3">
              <div class="flex">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/finish-fund.png"
                  alt="funding-finish"
                />
                <p class="small-text text-primary">Finish</p>
              </div>
              <p class="small-text">{{ daoProposal.endDate }}</p>
            </div>
            <div class="mt-3">
              <div class="flex">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/fund-round.png"
                  alt="funding-round"
                />
                <p class="small-text text-primary">Fund round</p>
              </div>
              <p class="small-text">Round {{ daoProposal.fundRound }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/project-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">{{ $t('landing.dao_proposals.link_text') }}</p>
        <img src="@/assets/images/icons/check-out.png" alt="">
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>
<script>
import { getDaoProposals } from '~/api'
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingDaoProposal',

  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      daoProposals: [
      ],
    }
  },
  async created() {
    this.daoProposals = (await getDaoProposals()).slice(0, 5)
  },
}
</script>

<style scoped>
  .p-line-head {
    line-height: 20px;
  }
</style>

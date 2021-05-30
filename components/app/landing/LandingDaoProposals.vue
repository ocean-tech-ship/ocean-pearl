<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.dao_proposals.title') }}
      <span class="text-primary">
        {{ $t('landing.dao_proposals.titleHighlight') }}</span
      >
    </h2>
    <p>{{ $t('landing.dao_proposals.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10"
    >
      <div v-for="daoProposal in daoProposals" :key="daoProposal._id">
        <NuxtLink :prefetch="false" to="/project-detail">
          <div class="shadow rounded h-275px p-8">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="daoProposal.imageURL"
                  :alt="daoProposal.title"
                />
              </div>
              <div>
                <p class="text-primary p-line-head">
                  {{ daoProposal.title | truncate(14) }}
                </p>
                <p class="small-text">{{ daoProposal.category }}</p>
              </div>
            </div>
            <div class="mt-5">
              <p class="small-text">
                {{ daoProposal.description | truncate(90) }}
              </p>
            </div>
            <div class="mt-5">
              <div class="flex">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/transaction.svg"
                  alt="funding-finish"
                />
                <p class="small-text text-primary">
                  {{ $t('landing.dao_proposals.requestedAmount') }}
                </p>
              </div>
              <p class="small-text">
                {{ $t('general.ocean', { ocean: daoProposal.fundAmount }) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/dao-project-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">
          {{ $t('landing.dao_proposals.link_text') }}
        </p>
        <img src="@/assets/images/landing/check-out.svg" alt="" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>
<script>
import { getFeaturedDaoProposals } from '@/api'
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingDaoProposal',

  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      daoProposals: [],
    }
  },
  async fetch() {
    await getFeaturedDaoProposals(this.$axios, 4)
      .then((daoProposals) => {
        this.projects = this.daoProposals =
          process.env.useMirage === 'true'
            ? daoProposals.daoproposals
            : daoProposals
      })
      .catch(() => {
        this.daoProposals = []
      })
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

<template>
  <LandingSectionContainer>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10"
    >
      <div v-for="daoProposal in daoData.daoProposals" :key="daoProposal._id">
        <NuxtLink :prefetch="false" :to="`/projects/${daoProposal.project._id}`">
          <div class="shadow rounded pb-10 p-8">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="daoProposal.project.logo"
                  :alt="`${daoProposal.project.title} ${$t('general.logo')}`"
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
                  :alt="`${$t('dao-projects.projects.requestedAmount')} icon`"
                />
                <p class="small-text text-primary">
                  {{ $t('dao-projects.projects.requestedAmount') }}
                </p>
              </div>
              <p class="small-text">
                {{ $t('general.ocean', { ocean: daoProposal.requestedGrantToken}) }}
              </p>
            </div>
            <div class="mt-5">
              <div class="flex">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/yes-vote.svg"
                  :alt="`${$t('dao-projects.projects.votes')} icon`"
                />
                <p class="small-text text-primary">
                  {{ $t('dao-projects.projects.votes') }}
                </p>
              </div>
              <p class="small-text">
                {{ $t('general.ocean', { ocean: daoProposal.votes}) }}
              </p>
            </div>
            <div class="mt-5">
              <div class="flex">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/no-vote.svg"
                  :alt="`${$t('dao-projects.projects.counterVotes')} icon`"
                />
                <p class="small-text text-primary">
                  {{ $t('dao-projects.projects.counterVotes') }}
                </p>
              </div>
              <p class="small-text">
                {{ $t('general.ocean', { ocean: daoProposal.counterVotes}) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer'

export default {
  name: 'DaoProjectsList',
  components: {
    LandingSectionContainer,
  },
  props: {
    daoData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

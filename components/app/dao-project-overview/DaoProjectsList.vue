<template>
  <LandingSectionContainer>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10"
    >
      <div v-for="daoProposal in daoProposals" :key="daoProposal._id">
        <NuxtLink
          :prefetch="false"
          :to="`/projects/${daoProposal.project._id}`"
        >
          <div class="shadow rounded p-8 h-full">
            <div class="flex">
              <div class="mr-3">
                <app-logo
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="daoProposal.project.logo"
                  :alt="daoProposal.project.title"
                />
              </div>
              <div>
                <p class="text-primary leading-snug line-clamp-1 break-all">
                  {{ daoProposal.project.title }}
                </p>
                <p class="small-text">{{ daoProposal.category }}</p>
              </div>
            </div>
            <div class="mt-5 h-112px">
              <p class="small-text line-clamp-4">
                {{ daoProposal.description }}
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
                {{
                  $t('general.ocean', {
                    ocean: daoProposal.requestedGrantToken,
                  })
                }}
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
                {{ $t('general.ocean', { ocean: daoProposal.votes }) }}
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
                {{ $t('general.ocean', { ocean: daoProposal.counterVotes }) }}
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
import AppLogo from '~/components/common/AppLogo'

export default {
  name: 'DaoProjectsList',
  components: {
    AppLogo,
    LandingSectionContainer,
  },
  props: {
    daoProposals: {
      type: Array,
      required: true,
      default: [],
    },
  },
}
</script>

<style scoped></style>

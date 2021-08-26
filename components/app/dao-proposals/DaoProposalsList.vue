<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-4
      2xl:grid-cols-4
      gap-4
      mt-10
    "
  >
    <div v-for="daoProposal in daoProposals" :key="daoProposal._id">
      <NuxtLink
        :prefetch="false"
        :to="`/projects/${beautifyProjectId(daoProposal.project)}`"
      >
        <div class="shadow rounded p-8 h-full">
          <div class="flex">
            <div class="mr-3">
              <app-logo
                class="inline-block"
                :src="daoProposal.project.logo"
                :alt="daoProposal.project.title"
                :size="45"
              />
            </div>
            <div>
              <p class="text-primary leading-snug line-clamp-1 break-all">
                {{ daoProposal.project.title }}
              </p>
              <p class="small-text">
                {{ categoryMap[daoProposal.category] }}
              </p>
            </div>
          </div>
          <div class="mt-5 h-112px">
            <p class="small-text line-clamp-4">
              {{ daoProposal.oneLiner }}
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
</template>

<script>
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppLogo from '~/components/common/AppLogo';
import ProjectBeautifyId from '~/mixins/ProjectBeautifyId';

export default {
  name: 'DaoProposalsList',

  components: {
    AppLogo,
  },

  mixins: [ProjectBeautifyId],

  props: {
    daoProposals: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      categoryMap: CategoryMap,
    };
  },
};
</script>

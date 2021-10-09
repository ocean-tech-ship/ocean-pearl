<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.dao_proposals.title') }}
      <span class="text-primary">
        {{ $t('landing.dao_proposals.titleHighlight') }}</span
      >
    </h2>
    <p>{{ $t('landing.dao_proposals.text') }}</p>

    <app-skeleton-card-list
      v-if="daoProposals === null"
      custom-class="grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-4
        2xl:grid-cols-4
        gap-4
        mt-10"
      :quantity="4"
    >
      <landing-dao-proposals-skeleton-card />
    </app-skeleton-card-list>

    <div
      v-else
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
          <div class="shadow rounded h-330px p-8">
            <div class="flex">
              <div class="mr-3">
                <app-logo
                  class="inline-block"
                  :src="
                    daoProposal.project.logo && daoProposal.project.logo.url
                  "
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

            <div class="mt-5 h-128px">
              <p class="small-text line-clamp-3">
                {{ daoProposal.oneLiner }}
              </p>
            </div>

            <div>
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
              <p
                v-if="
                  daoProposal.requestedGrantUsd &&
                  daoProposal.requestedGrantUsd > 0
                "
                class="small-text"
              >
                {{ $t('general.usd', { usd: daoProposal.requestedGrantUsd }) }}
              </p>

              <p v-else class="small-text">
                {{
                  $t('general.ocean', {
                    ocean: daoProposal.requestedGrantToken,
                  })
                }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <NuxtLink to="/dao-proposals">
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
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer';
import AppLogo from '@/components/common/AppLogo';
import ProjectBeautifyId from '~/mixins/ProjectBeautifyId';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import LandingDaoProposalsSkeletonCard from '@/components/app/landing/LandingDaoProposalsSkeletonCard.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';

export default {
  name: 'LandingDaoProposal',

  components: {
    AppLogo,
    LandingSectionContainer,
    LandingDaoProposalsSkeletonCard,
    AppSkeletonCardList,
  },

  mixins: [ProjectBeautifyId],

  props: {
    daoProposals: {
      type: Array || null,
      required: true,
      default: null,
    },
  },

  data() {
    return {
      categoryMap: CategoryMap,
    };
  },
};
</script>

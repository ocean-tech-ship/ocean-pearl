<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.dao_proposals.title') }}
      <span class="text-primary">
        {{ $t('landing.dao_proposals.titleHighlight') }}</span
      >
    </h2>
    <p>{{ $t('landing.dao_proposals.text') }}</p>

    <div v-if="daoProposals === null" class="mt-10 h-275px">
      {{ $t('general.fetchingLoading') }}
    </div>

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
        <app-link-card
          :prefetch="false"
          :to="`/projects/${beautifyProjectId(daoProposal.project)}`"
          card-class="card shadow rounded h-330px p-8"
        >
          <div class="flex">
            <div class="mr-3">
              <app-logo
                class="inline-block"
                :src="daoProposal.project.logo && daoProposal.project.logo.url"
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
            <div class="flex items-center">
              <app-icon class="text-primary pr-2" :data="icons.coins" />

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
              {{
                $t('general.usd', {
                  usd: addPunctuation(daoProposal.requestedGrantUsd),
                })
              }}
            </p>

            <p v-else class="small-text">
              {{
                $t('general.ocean', {
                  ocean: addPunctuation(daoProposal.requestedGrantToken),
                })
              }}
            </p>
          </div>
        </app-link-card>
      </div>
    </div>

    <app-link-icon-right to="/dao-proposals">
      {{ $t('landing.dao_proposals.link_text') }}
    </app-link-icon-right>
  </LandingSectionContainer>
</template>

<script>
import coins from '@iconify/icons-la/coins';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import AppLinkCard from '~/components/common/AppLinkCard.vue';
import ProjectBeautifyId from '~/mixins/ProjectBeautifyId';
import Numbers from '@/mixins/Numbers';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppIcon from '@/components/common/AppIcon.vue';
import AppLinkIconRight from '@/components/common/AppLinkIconRight.vue';

export default {
  name: 'LandingDaoProposal',

  components: {
    AppIcon,
    AppLogo,
    AppLinkCard,
    AppLinkIconRight,
    LandingSectionContainer,
  },

  mixins: [ProjectBeautifyId, Numbers],

  props: {
    daoProposals: {
      type: Array,
      required: true,
      default: null,
    },
  },

  data() {
    return {
      icons: {
        coins,
      },
      categoryMap: CategoryMap,
    };
  },
};
</script>

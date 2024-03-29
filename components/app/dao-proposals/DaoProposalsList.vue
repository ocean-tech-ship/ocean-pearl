<template>
  <div class="mt-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
    >
      <div v-for="daoProposal in daoProposals" :key="daoProposal.id">
        <app-link-card
          :to="`/projects/${beautifyProjectId(daoProposal.project)}`"
          card-class="shadow bg-base-200 rounded p-8 h-full"
        >
          <div class="flex">
            <div class="mr-3">
              <app-logo
                class="inline-block"
                :project="daoProposal.project"
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
          <div>
            <app-label class="mt-5">
              <span class="text-third">{{
                $t('project.proposal.round.numbered', {
                  round: daoProposal.fundingRound.round,
                })
              }}</span>
            </app-label>
          </div>
          <div class="mt-5 h-112px">
            <p class="small-text line-clamp-4">
              {{ daoProposal.oneLiner }}
            </p>
          </div>
          <div class="mt-5">
            <div class="flex items-center text-primary">
              <app-icon class="pr-2" :size="20" :data="icons.coins" />

              <p class="small-text">
                {{ $t('dao-projects.projects.requestedAmount') }}
              </p>
            </div>
            <p
              v-if="
                daoProposal.requestedFunding.usd &&
                daoProposal.requestedFunding.usd > 0
              "
              class="small-text"
            >
              {{
                $t('general.usd', {
                  usd: addPunctuation(daoProposal.requestedFunding.usd),
                })
              }}
            </p>

            <p v-else class="small-text">
              {{
                $t('general.ocean', {
                  ocean: addPunctuation(daoProposal.requestedFunding.ocean),
                })
              }}
            </p>
          </div>
          <div class="mt-5">
            <div class="flex items-center text-primary">
              <app-icon class="pr-2" :size="20" :data="icons.check" />
              <p class="small-text">
                {{ $t('dao-projects.projects.yesVotes') }}
              </p>
            </div>
            <p class="small-text">
              {{
                $t('general.ocean', {
                  ocean: addPunctuation(daoProposal.yesVotes),
                })
              }}
            </p>
          </div>
          <div class="mt-5">
            <div class="flex items-center text-primary">
              <app-icon class="pr-2" :size="20" :data="icons.times" />
              <p class="small-text">
                {{ $t('dao-projects.projects.noVotes') }}
              </p>
            </div>
            <p class="small-text">
              {{
                $t('general.ocean', {
                  ocean: addPunctuation(daoProposal.noVotes),
                })
              }}
            </p>
          </div>
        </app-link-card>
      </div>
    </div>
  </div>
</template>

<script>
import coins from '@iconify/icons-la/coins';
import check from '@iconify/icons-la/check';
import times from '@iconify/icons-la/times';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppLogo from '@/components/common/AppLogo.vue';
import AppLabel from '@/components/common/AppLabel.vue';
import AppLinkCard from '@/components/common/AppLinkCard.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'DaoProposalsList',

  components: {
    AppIcon,
    AppLogo,
    AppLabel,
    AppLinkCard,
  },

  mixins: [ProjectBeautifyId, Numbers],

  props: {
    daoProposals: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      icons: {
        coins,
        check,
        times,
      },
      categoryMap: CategoryMap,
    };
  },
};
</script>

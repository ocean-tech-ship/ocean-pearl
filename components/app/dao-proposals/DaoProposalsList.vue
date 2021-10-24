<template>
  <div class="mt-10">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-4
        2xl:grid-cols-4
        gap-4
      "
    >
      <div v-for="daoProposal in daoProposals" :key="daoProposal.id">
        <app-settings-dropdown
          :menu-items="[
            {
              ...settingsMeunItems[0],
              value: { type: 'report', id: daoProposal.id },
            },
          ]"
          @selected="handleSettingsSelection"
        />
        <NuxtLink
          :prefetch="false"
          :to="`/projects/${beautifyProjectId(daoProposal.project)}`"
        >
          <div class="shadow rounded p-8 h-full">
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
            <app-label class="mt-5">
              <span class="text-third">{{
                $t('project.proposal.round.numbered', {
                  round: daoProposal.fundingRound.round,
                })
              }}</span>
            </app-label>
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
                {{
                  $t('general.ocean', {
                    ocean: addPunctuation(daoProposal.votes),
                  })
                }}
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
                {{
                  $t('general.ocean', {
                    ocean: addPunctuation(daoProposal.counterVotes),
                  })
                }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <app-report-modal ref="reportModal" :dao-proposal="reportProposal" />
  </div>
</template>

<script>
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppLogo from '@/components/common/AppLogo.vue';
import AppLabel from '@/components/common/AppLabel.vue';
import AppReportModal from '@/components/common/AppReportModal.vue';
import AppSettingsDropdown from '@/components/common/AppSettingsDropdown.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import Numbers from '@/mixins/Numbers';

export default {
  name: 'DaoProposalsList',

  components: {
    AppLogo,
    AppLabel,
    AppReportModal,
    AppSettingsDropdown,
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
      settingsMeunItems: [
        {
          content: 'Report this project',
          iconClass: 'mdi-alert-circle-outline',
        },
      ],
      categoryMap: CategoryMap,
      reportProposal: {},
    };
  },

  methods: {
    handleSettingsSelection(payload) {
      const { type, id } = payload;
      switch (type) {
        case 'report':
          this.daoProposals.forEach((daoProposal) => {
            if (daoProposal.id === id) {
              this.reportProposal = daoProposal;
              this.$refs.reportModal.toggleOpen();
            }
          });
          break;
        default:
      }
    },
  },
};
</script>

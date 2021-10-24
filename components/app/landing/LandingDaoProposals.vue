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
        <app-settings-dropdown
          :menu-items="[
            {
              content: 'Report this project',
              iconClass: 'mdi-alert-circle-outline',
              value: { type: 'report', id: daoProposal.id },
            },
          ]"
          @selected="handleSettingsSelection"
        />
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

    <app-report-modal
      ref="reportModal"
      :project-title="
        reportProposal ? reportProposal.project.title : 'this project'
      "
    />
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import AppReportModal from '@/components/common/AppReportModal.vue';
import AppSettingsDropdown from '@/components/common/AppSettingsDropdown.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import Numbers from '@/mixins/Numbers';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';

export default {
  name: 'LandingDaoProposal',

  components: {
    AppLogo,
    LandingSectionContainer,
    AppReportModal,
    AppSettingsDropdown,
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
      reportProposal: null,
      categoryMap: CategoryMap,
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

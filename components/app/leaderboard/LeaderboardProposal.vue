<template>
  <div class="bg-base-200 flex lg:divide-x lg:divide-base-300">
    <div class="w-full md:w-4/6 lg:w-1/2 flex p-2">
      <div class="flex-1 space-y-1">
        <div class="flex">
          <!-- logo -->
          <div class="self-center">
            <app-link
              :to="targetProjectLink(proposal.project, beautifyProjectId)"
            >
              <app-logo
                class="lg:hidden"
                :size="48"
                :project="proposal.project"
              />

              <app-logo
                class="hidden lg:block"
                :size="64"
                :project="proposal.project"
              />
            </app-link>
          </div>

          <!-- details -->
          <div class="px-2 flex-grow space-y-1">
            <div class="flex">
              <app-link
                :to="targetProjectLink(proposal.project, beautifyProjectId)"
              >
                <span class="line-clamp-1 break-all">
                  <span
                    :class="{ 'text-primary': primary && proposal.index === 0 }"
                    class="font-bold pr-1"
                  >
                    {{ `#${proposal.index + 1}` }}
                  </span>
                  {{ proposal.title }}
                </span>
              </app-link>

              <button
                type="button"
                class="btn btn-xs btn-circle ml-2"
                @click="$emit('expand')"
              >
                <app-icon :data="icons.info" :size="18" />
              </button>
            </div>

            <!-- progress bars -->
            <div v-if="primary" class="space-y-1 hidden lg:block">
              <app-progressbar
                :percent="calcPercent(maxVotes, proposal.yesVotes)"
                gradient="bg-gradient-primary-variant"
              />
              <app-progressbar
                :percent="calcPercent(maxVotes, proposal.noVotes)"
                gradient="bg-gradient-accent"
              />
            </div>

            <!-- tags -->
            <proposal-tags :proposal="proposal" />
          </div>
        </div>

        <!-- votes & funding (until lg) -->
        <mobile-proposal-figures
          class="lg:hidden"
          :proposal="proposal"
          :payment-option="paymentOption"
        />
      </div>
    </div>

    <!-- votes (from lg) -->
    <proposal-votes class="hidden lg:flex" :proposal="proposal" />

    <!-- amount requested / received -->
    <proposal-funding
      class="hidden lg:flex"
      :requested-funding="proposal.requestedFunding"
      :received-funding="proposal.receivedFunding"
      :minimum-requested-funding="proposal.minimumRequestedFunding"
      :payment-option="paymentOption"
    />

    <!-- completed proposals gamification -->
    <div class="hidden w-16 md:flex items-center justify-center flex-grow">
      <project-tier :proposal="proposal" :background="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import info from '@iconify/icons-la/info';
import {
  LeaderboardProject,
  LeaderboardProposal,
} from '@/models/LeaderboardProposal.model';
import AppLogo from '@/components/common/AppLogo.vue';
import AppProgressbar from '@/components/common/AppProgressbar.vue';
import Numbers from '@/mixins/Numbers';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import ProjectTier from '@/components/app/leaderboard/ProjectTier.vue';
import ProposalTags from '@/components/app/leaderboard/ProposalTags.vue';
import ProposalVotes from '@/components/app/leaderboard/ProposalVotes.vue';
import AppLink from '@/components/common/AppLink.vue';
import ProposalFunding from '@/components/app/leaderboard/ProposalFunding.vue';
import PaymentOptionEnum from '@/enums/PaymentOption.enum';
import MobileProposalFigures from '@/components/app/leaderboard/MobileProposalFigures.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'LeaderboardProposal',

  components: {
    AppIcon,
    MobileProposalFigures,
    AppLink,
    ProposalVotes,
    ProposalTags,
    ProjectTier,
    AppProgressbar,
    AppLogo,
    ProposalFunding,
  },

  mixins: [Numbers, ProjectBeautifyId],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    paymentOption: {
      type: String as () => PaymentOptionEnum,
      required: false,
      default: () => PaymentOptionEnum.Ocean,
    },

    maxVotes: {
      type: Number,
      required: true,
    },

    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      icons: {
        info,
      },
    };
  },

  methods: {
    calcPercent(maxVotes: number, votes: number): number {
      const percent = (100 / maxVotes) * votes;
      return percent < 0.5 ? 0.5 : percent;
    },

    targetProjectLink(
      project: LeaderboardProject,
      beautifyProjectId: Function,
    ): string {
      return `/projects/${beautifyProjectId({
        id: project.id,
        title: project.title,
      })}`;
    },
  },
};
</script>

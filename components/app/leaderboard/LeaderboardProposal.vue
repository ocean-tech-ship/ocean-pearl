<template>
  <div class="bg-white flex lg:divide-x lg:divide-darkgrey">
    <div
      :class="{
        'w-full md:w-4/6 lg:w-1/2': primary,
        'w-full md:w-4/6 lg:w-2/5': !primary,
      }"
      class="flex p-2"
    >
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
                :src="proposal.project.logoUrl"
                :alt="proposal.project.title"
              />

              <app-logo
                class="hidden lg:block"
                :size="64"
                :src="proposal.project.logoUrl"
                :alt="proposal.project.title"
              />
            </app-link>
          </div>

          <!-- details -->
          <div class="px-2 flex-grow space-y-1">
            <div>
              <app-link
                :to="targetProjectLink(proposal.project, beautifyProjectId)"
              >
                <span class="line-clamp-1 break-all">
                  <span
                    :class="{ 'text-primary': primary && index === 0 }"
                    class="font-bold pr-1"
                  >
                    {{ `#${index + indexOffset + 1}` }}
                  </span>
                  {{ proposal.title }}
                </span>
              </app-link>
            </div>

            <!-- progress bars -->
            <div v-if="primary" class="space-y-1 hidden lg:block">
              <app-progressbar
                :percent="calcPercent(maxVotes, proposal.yesVotes)"
              />
              <app-progressbar
                secondary
                :percent="calcPercent(maxVotes, proposal.noVotes)"
              />
            </div>

            <!-- tags -->
            <proposal-tags class="flex flex-wrap" :proposal="proposal" />
          </div>
        </div>

        <!-- votes & funding (until lg) -->
        <mobile-proposal-figures
          class="flex lg:hidden"
          :proposal="proposal"
          :payment-option="paymentOption"
        />
      </div>
    </div>

    <!-- votes (from lg) -->
    <div class="hidden lg:flex items-center justify-center flex-grow">
      <proposal-votes class="w-48" :proposal="proposal" />
    </div>

    <!-- votes needed (non primary!) -->
    <div
      v-if="!primary"
      class="hidden w-28 lg:flex items-center justify-center flex-grow"
    >
      <span>{{ addPunctuation(proposal.neededVotes) }}</span>
    </div>

    <!-- amount requested / received -->
    <div class="hidden lg:flex items-center justify-center flex-grow">
      <proposal-funding
        class="w-28"
        :proposal="proposal"
        :primary="primary"
        :payment-option="paymentOption"
      />
    </div>

    <!-- completed proposals gamification -->
    <div class="hidden w-14 md:flex items-center justify-center flex-grow">
      <project-tier :proposal="proposal" :background="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  LeaderboardProject,
  LeaderboardProposal,
} from '@/models/Leaderboard.model';
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
import MobileProposalFigures from '~/components/app/leaderboard/MobileProposalFigures.vue';

export default {
  name: 'LeaderboardProposal',

  components: {
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

    indexOffset: {
      type: Number,
      required: true,
    },

    index: {
      type: Number,
      required: true,
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

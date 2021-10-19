<template>
  <div class="bg-white flex lg:divide-x lg:divide-darkgrey">
    <div
      :class="{ 'w-3/4 sm:w-3/5 md:w-2/4 lg:w-1/2': primary, 'w-3/5 lg:w-2/5': !primary }"
      class="flex p-2"
    >
      <div class="flex-1">
        <div class="flex">
          <!-- logo -->
          <div class="self-center">
            <app-logo class="lg:hidden" :size="48" :src="proposal.logoUrl" :alt="proposal.title" />
            <app-logo class="hidden lg:block" :size="64" :src="proposal.logoUrl" :alt="proposal.title" />
          </div>

          <!-- details -->
          <div class="px-2 flex-grow">
            <span class="line-clamp-1 break-all">
              <span
                :class="{ 'text-primary': primary && index === 0 }"
                class="font-bold pr-1"
              >
                {{ `#${index + indexOffset + 1}` }}
              </span>
              {{ proposal.title }}
            </span>

            <div v-if="primary" class="space-y-1 py-2 hidden lg:block">
              <app-progressbar :level="calcPct(maxVotes, proposal.yesVotes)" />
              <app-progressbar secondary :level="calcPct(maxVotes, proposal.noVotes)" />
            </div>

            <div class="py-1">
              <proposal-tags
                class="flex flex-wrap"
                :proposal="proposal"
              />
            </div>
          </div>
        </div>

        <!-- votes (until lg) -->
        <div class="flex lg:hidden">
          <proposal-votes class="leading-tight rounded border border-darkgrey p-1 px-2" :proposal="proposal" />
        </div>
      </div>
    </div>

    <!-- votes (from lg) -->
    <div
      class="p-2 xl:px-5 hidden lg:flex items-center justify-center"
    >
      <proposal-votes :proposal="proposal" />
    </div>

    <!-- votes needed (non primary!) -->
    <div v-if="!primary" class="p-2 xl:px-5 hidden lg:flex items-center justify-center w-1/6">
      <span>{{ addPunctuation(proposal.neededVotes) }}</span>
    </div>

    <!-- completed proposals gamification -->
    <div class="p-2 xl:px-5 hidden sm:flex items-center justify-center flex-grow">
      <proposal-badge background :proposal="proposal" />
    </div>

    <!-- vote action -->
    <div class="p-2 xl:px-5 flex items-center justify-center flex-grow">
      <proposal-vote-action :proposal="proposal" background />
    </div>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal} from '@/models/Leaderboard.model';
import AppLogo from '@/components/common/AppLogo.vue';
import AppProgressbar from '@/components/common/AppProgressbar.vue';
import Numbers from '@/mixins/Numbers';
import ProposalBadge from '@/components/app/leaderboard/ProposalBadge.vue';
import ProposalTags from '@/components/app/leaderboard/ProposalTags.vue';
import ProposalVoteAction from '@/components/app/leaderboard/ProposalVoteAction.vue';
import ProposalVotes from '@/components/app/leaderboard/ProposalVotes.vue';

export default {
  name: 'LeaderboardProposal',

  components: { ProposalVotes, ProposalVoteAction, ProposalTags, ProposalBadge, AppProgressbar, AppLogo },

  mixins: [Numbers],

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
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
    calcPct(maxVotes: number, votes: number): number {
      const pct = (100 / maxVotes) * votes;
      return pct < 0.5 ? 0.5 : pct;
    }
  }
};
</script>

<template>
  <div class="bg-white flex items-stretch divide-x divide-darkgrey">
    <div
      :class="{ 'w-1/2': primary, 'w-2/5': !primary }"
      class="p-2 px-5 flex items-center"
    >
      <!-- logo -->
      <div class="pr-5">
        <app-logo
          :src="proposal.logoUrl"
          :alt="proposal.title"
        />
      </div>

      <!-- details -->
      <div class="flex-grow">
        <span class="line-clamp-1 break-all">
          <span
            :class="{ 'text-primary': primary && index === 0 }"
            class="font-bold pr-1"
          >
            {{ `#${index + indexOffset + 1}` }}
          </span>
          {{ proposal.title }}
        </span>

        <div v-if="primary" class="space-y-1 py-2">
          <app-progressbar :level="calcPct(maxVotes, proposal.yesVotes)" />
          <app-progressbar secondary :level="calcPct(maxVotes, proposal.noVotes)" />
        </div>

        <div>
          <proposal-tags
            class="flex flex-wrap"
            :proposal="proposal"
          />
        </div>
      </div>
    </div>

    <!-- votes -->
    <div
      :class="{ 'w-3/12': primary, 'w-1/3 xl:w-1/5': !primary }"
      class="p-2 xl:px-5 flex items-center justify-center"
    >
      <proposal-votes :proposal="proposal" />
    </div>

    <!-- votes needed (non primary!) -->
    <div v-if="!primary" class="p-2 xl:px-5 flex items-center justify-center w-1/5">
      <span>{{ addPunctuation(proposal.neededVotes) }}</span>
    </div>

    <!-- completed proposals gamification -->
    <div class="p-2 xl:px-5 flex items-center justify-center flex-grow">
      <proposal-badge background :proposal="proposal" />
    </div>

    <!-- vote action -->
    <div class="p-2 xl:px-5 flex items-center justify-center flex-grow">
      <proposal-vote-action background :proposal="proposal" />
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
import ProposalVoteAction from '~/components/app/leaderboard/ProposalVoteAction.vue';
import ProposalVotes from '~/components/app/leaderboard/ProposalVotes.vue';

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

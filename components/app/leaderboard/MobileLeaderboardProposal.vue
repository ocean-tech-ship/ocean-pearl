<template>
  <div class="bg-white p-2 flex">
    <!-- logo -->
    <div class="self-start md:self-center">
      <app-logo :size="48" :src="proposal.logoUrl" :alt="proposal.title" />
    </div>

    <!-- details -->
    <div class="flex-grow px-2 md:flex md:justify-between">
      <div class="md:flex-1">
        <span class="line-clamp-1 break-all">
        <span
          :class="{ 'text-primary': primary && index === 0 }"
          class="font-bold pr-1"
        >
          {{ `#${index + indexOffset + 1}` }}
        </span>
        {{ proposal.title }}
      </span>

        <div class="py-1">
          <proposal-tags
            class="flex flex-wrap"
            :proposal="proposal"
          />
        </div>
      </div>

      <div class="md:flex-1 md:self-center">
        <proposal-votes class="leading-tight" :proposal="proposal" />
      </div>
    </div>

    <!-- action -->
    <div class="self-center md:px-5">
      <proposal-vote-action :proposal="proposal" background />
    </div>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal } from '~/models/Leaderboard.model';
import ProposalVoteAction from '~/components/app/leaderboard/ProposalVoteAction.vue';
import AppLogo from '~/components/common/AppLogo.vue';
import ProposalVotes from '~/components/app/leaderboard/ProposalVotes.vue';
import ProposalTags from '~/components/app/leaderboard/ProposalTags.vue';

export default {
  name: 'MobileLeaderboardProposal',
  components: { ProposalTags, ProposalVotes, AppLogo, ProposalVoteAction },
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
  }
};
</script>

<style scoped>

</style>

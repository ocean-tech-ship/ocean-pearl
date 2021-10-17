<template>
  <div
    :class="{ 'bg-primary bg-opacity-10': background }"
    class="
      relative
      rounded
      w-12
      h-12
      flex
      items-center
      justify-center
      transition
      duration-300
      ease-in-out
      hover:scale-125
    "
  >
    <img
      class="pb-1"
      :src="getIcon(proposal.completedProposals)"
      :alt="$t('leaderboard.proposal.rank')"
    />

    <span class="absolute -bottom-2 text-primary font-bold">
      {{ proposal.completedProposals }}
    </span>
  </div>
</template>

<script lang="ts">
import { LeaderboardProposal } from '@/models/Leaderboard.model';

export default {
  name: 'ProposalBadge',

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    background: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

  methods: {
    getIcon(grants: number): string {
      if (grants >= 3) {
        // eslint-disable-next-line global-require
        return require('@/assets/images/leaderboard/rank-3.svg');
      }

      if (grants === 2) {
        // eslint-disable-next-line global-require
        return require('@/assets/images/leaderboard/rank-2.svg');
      }

      // eslint-disable-next-line global-require
      return require('@/assets/images/leaderboard/rank-1.svg')
    },
  },
};
</script>

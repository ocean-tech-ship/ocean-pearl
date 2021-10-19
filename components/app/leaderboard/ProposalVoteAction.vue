<template>
  <app-link :to="proposal.voteUrl || ''">
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
      lg:hover:scale-125
    "
    >
      <app-icon class="text-primary" :path="mdiVote" />
    </div>
  </app-link>
</template>

<script lang="ts">
import { mdiVote } from '@mdi/js';
import { LeaderboardProposal } from '@/models/Leaderboard.model';
import AppIcon from '@/components/common/AppIcon.vue';
import AppLink from '@/components/common/AppLink.vue';

export default {
  name: 'ProposalVoteAction',

  components: { AppLink, AppIcon },

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

  data() {
    return {
      mdiVote,
    };
  },
};
</script>

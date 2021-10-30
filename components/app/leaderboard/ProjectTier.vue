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
      lg:hover:scale-125
    "
  >
    <img
      class="pb-1"
      :src="getTier(proposal.project.completedProposals, $i18n).iconSrc"
      :alt="getTier(proposal.project.completedProposals, $i18n).title"
    />

    <span class="absolute -bottom-2 text-primary font-bold">
      {{ proposal.project.completedProposals }}
    </span>
  </div>
</template>

<script lang="ts">
import mapByNumOfGrants from '@/mapper/ProjectTier.mapper';
import { LeaderboardProposal } from '@/models/Leaderboard.model';
import { ProjectTier } from '@/models/Project.model';

export default {
  name: 'ProposalTier',

  props: {
    proposal: {
      type: Object as () => LeaderboardProposal,
      required: true,
    },

    background: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    getTier(grants: number, i18n: any): ProjectTier {
      return mapByNumOfGrants(grants, i18n);
    },
  },
};
</script>

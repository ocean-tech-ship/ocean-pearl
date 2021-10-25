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
      :src="getTier(proposal.completedProposals).iconSrc"
      :alt="getTier(proposal.completedProposals).title"
    />

    <span class="absolute -bottom-2 text-primary font-bold">
      {{ proposal.completedProposals }}
    </span>
  </div>
</template>

<script>
import mapByNumOfGrants from '@/mapper/ProjectTier.mapper';

export default {
  name: 'ProposalTier',

  props: {
    proposal: {
      type: Object,
      required: true,
    },

    background: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

  methods: {
    getTier(grants) {
      return mapByNumOfGrants(grants, this.$i18n);
    }
  }
};
</script>

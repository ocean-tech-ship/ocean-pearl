<template>
  <div
    :class="{ 'text-white': primary }"
    class="flex items-center text-primary font-bold text-center"
  >
    <div
      :class="{ 'w-2/5': !primary, 'w-1/2': primary }"
      class="pl-20 text-left"
    >
      {{ $t('leaderboard.proposal.header.name') }}
    </div>

    <div class="w-48 flex-grow">
      {{ $t('leaderboard.proposal.header.votes') }}
    </div>

    <div v-if="!primary" class="w-28 flex-grow">
      {{ $t('leaderboard.proposal.header.needed') }}
    </div>

    <div class="w-28 flex-grow">
      {{ $t('leaderboard.proposal.header.funding') }}
    </div>

    <div class="w-14 flex-grow">
      {{ $t('leaderboard.proposal.header.completed') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProposalHeader',

  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

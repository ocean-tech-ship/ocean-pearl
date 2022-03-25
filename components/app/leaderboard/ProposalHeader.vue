<template>
  <div
    :class="{ 'text-primary-content': primary, 'text-primary': !primary }"
    class="flex items-center font-bold text-center text-sm"
  >
    <div
      :class="{ 'w-2/5': displayNeededVotes, 'w-1/2': !displayNeededVotes }"
      class="pl-20 text-left"
    >
      {{ $t('leaderboard.proposal.header.name') }}
    </div>

    <div class="w-52 flex-grow">
      {{ $t('leaderboard.proposal.header.votes') }}
    </div>

    <div v-if="displayNeededVotes" class="w-40 flex-grow">
      {{ $t('leaderboard.proposal.header.needed') }}
    </div>

    <div class="w-44 flex-grow">
      {{ $t('leaderboard.proposal.header.funding') }}
    </div>

    <div class="w-16 flex-grow">
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
      default: false,
    },
    displayNeededVotes: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

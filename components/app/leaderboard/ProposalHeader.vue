<template>
  <div
    :class="{ 'text-primary-content': primary, 'text-primary': !primary }"
    class="flex items-center font-bold text-center text-sm"
  >
    <div class="w-1/2 pl-20 text-left">
      {{ $t('leaderboard.proposal.header.name') }}
    </div>

    <div class="w-52 flex-grow">
      {{ $t('leaderboard.proposal.header.votes') }}
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
  },
};
</script>

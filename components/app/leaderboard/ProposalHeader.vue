<template>
  <div
    :class="{ 'text-white': primary }"
    class="flex items-center text-primary font-bold"
  >
    <div
      :class="{ 'w-3/4 sm:w-3/5 md:w-2/4 lg:w-1/2': primary, 'w-3/4 sm:w-3/5 md:w-2/4 lg:w-2/5': !primary }"
      class="px-5"
    >
      <span>{{ $t('leaderboard.proposal.header.name') }}</span>
    </div>

    <div class="text-center w-48 mx-2 xl:mx-5">
      <span>{{ $t('leaderboard.proposal.header.votes') }}</span>
    </div>

    <div v-if="!primary" class="px-2 w-1/6 xl:px-5 text-center">
      <span>{{ $t('leaderboard.proposal.header.needed') }}</span>
    </div>

    <div class="flex-1 text-center break-words">
      <span>{{ $t('leaderboard.proposal.header.completed') }}</span>
    </div>

    <div class="flex-1 text-center">
      <span>{{ $t('leaderboard.proposal.header.action') }}</span>
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

<style scoped>

</style>

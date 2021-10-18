<template>
  <div
    :class="{ 'text-white': primary }"
    class="flex items-center text-primary font-bold"
  >
    <div :class="{ 'w-1/2': primary, 'w-2/5': !primary }" class="px-5">
      <span>{{ $t('leaderboard.proposal.header.name') }}</span>
    </div>

    <div :class="{ 'w-3/12': primary, 'w-1/3 xl:w-1/5': !primary }" class="text-center">
      <span>{{ $t('leaderboard.proposal.header.votes') }}</span>
    </div>

    <div v-if="!primary" class="w-1/5 text-center">
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

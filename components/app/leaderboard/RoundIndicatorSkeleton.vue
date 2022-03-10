<template>
  <div
    :class="{ 'drop-shadow-lg': primary, 'border border-primary': !primary }"
    class="rounded bg-base-200 px-4 py-2 flex flex-col items-center justify-center"
  >
    <div>{{ $t('leaderboard.round.title') }}</div>
    <div class="w-9 h-9 mx-9 rounded bg-primary opacity-70 animate-pulse" />
  </div>
</template>

<script>
export default {
  name: 'RoundIndicatorSkeleton',

  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

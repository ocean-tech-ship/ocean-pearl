<template>
  <div
    :class="{ 'drop-shadow-lg': primary, 'border border-primary': !primary }"
    class="rounded bg-base-200 px-4 py-2 flex flex-col items-center justify-center"
  >
    <div class="text-third">{{ $t('leaderboard.round.title') }}</div>
    <div class="text-primary text-xl font-bold leading-none">
      {{ leaderboard.round }}
    </div>
  </div>
</template>

<script lang="ts">
import { Leaderboard } from '@/models/Leaderboard.model';

export default {
  name: 'RoundIndicator',

  props: {
    leaderboard: {
      type: Object as () => Leaderboard,
      required: true,
    },

    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

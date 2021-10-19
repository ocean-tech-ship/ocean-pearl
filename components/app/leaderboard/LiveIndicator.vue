<template>
  <div>
    <button
      class="px-2 py-1 rounded bg-white drop-shadow-lg flex items-center"
      @click="$emit('click')"
    >
      <div class="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span class="pl-2 text-third font-bold">{{ $t('leaderboard.live') }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LiveIndicator',
};
</script>

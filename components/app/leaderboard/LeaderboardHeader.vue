<template>
  <div>
    <h2>
      {{ $t('leaderboard.title[0]') }}
      <span class="text-primary">
        {{ $t('leaderboard.title[1]') }}
      </span>
    </h2>

    <p>{{ $t('leaderboard.subtitle') }}</p>

    <!-- TODO: metrics -->
  </div>
</template>

<script>
export default {
  name: 'LeaderboardHeader',
};
</script>

<style scoped>

</style>

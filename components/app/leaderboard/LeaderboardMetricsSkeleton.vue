<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4"
  >
    <div
      v-for="i in 5"
      :key="i"
      class="rounded shadow bg-base-200 flex items-center p-2 animate-pulse"
    >
      <div class="w-12 h-12 mr-2 bg-primary rounded opacity-70" />
      <div class="flex-grow space-y-3 py-2">
        <div class="h-3 w-1/4 rounded bg-primary opacity-70" />
        <div class="h-3 w-2/5 rounded bg-primary opacity-70" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardMetricsSkeleton',
};
</script>

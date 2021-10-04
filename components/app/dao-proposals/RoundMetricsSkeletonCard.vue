<template>
  <div class="shadow bg-white rounded p-4 pb-4">
    <div class="h-full flex items-center">
      <div class="mr-3">
        <div class="mr-2 w-6 h-6 bg-darkgrey rounded bg-primary opacity-70" />
      </div>
      <div class="flex-1 flex flex-col">
        <div class="w-2/5 h-3 rounded bg-primary opacity-70" />
        <div class="mt-3 w-1/4 h-3 rounded bg-primary opacity-70" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundMetricsSkeletonCard',
};
</script>

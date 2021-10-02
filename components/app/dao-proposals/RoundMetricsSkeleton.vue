<template>
  <div class="shadow bg-white rounded p-4 pb-4">
    <div class="h-full flex items-center">
      <div class="mr-3">
        <div
          :style="{ background: color }"
          class="mr-2 w-6 h-6 bg-darkgrey rounded"
        />
      </div>
      <div class="flex-1 flex flex-col">
        <div :style="{ background: color }" class="w-2/5 h-3 rounded" />
        <div :style="{ background: color }" class="mt-3 w-1/4 h-3 rounded" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundMetricsSkeleton',

  props: {
    color: {
      type: String,
      default: () => 'rgba(187, 44, 117, 0.7)',
    },
  },
};
</script>

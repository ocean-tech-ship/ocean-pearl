<template>
  <div class="shadow rounded p-8 h-full">
    <div class="animate-pulse">
      <div class="flex">
        <div class="mr-4">
          <div
            :style="{ background: color }"
            class="w-10 h-10 bg-darkgrey rounded"
          />
        </div>
        <div class="flex-1">
          <div :style="{ background: color }" class="w-4/5 h-4 rounded" />
          <div :style="{ background: color }" class="mt-3 w-2/5 h-3 rounded" />
        </div>
      </div>
      <div :style="{ background: color }" class="mt-9 w-1/3 h-8 rounded" />
      <div class="mt-5 h-112px">
        <div :style="{ background: color }" class="mt-8 w-4/5 h-3 rounded" />
        <div :style="{ background: color }" class="mt-3 w-2/4 h-3 rounded" />
        <div :style="{ background: color }" class="mt-3 w-full h-3 rounded" />
        <div :style="{ background: color }" class="mt-3 w-2/3 h-3 rounded" />
      </div>
      <div class="mt-4">
        <div class="flex items-center">
          <div
            :style="{ background: color }"
            class="mr-2 w-4 h-4 bg-darkgrey rounded"
          />
          <div :style="{ background: color }" class="w-2/3 h-3 rounded" />
        </div>
        <div :style="{ background: color }" class="mt-3 w-2/5 h-3 rounded" />
      </div>
      <div class="mt-8">
        <div class="flex items-center">
          <div
            :style="{ background: color }"
            class="mr-2 w-4 h-4 bg-darkgrey rounded"
          />
          <div :style="{ background: color }" class="w-2/5 h-3 rounded" />
        </div>
        <div :style="{ background: color }" class="mt-3 w-2/5 h-3 rounded" />
      </div>
      <div class="mt-8">
        <div class="flex items-center">
          <div
            :style="{ background: color }"
            class="mr-2 w-4 h-4 bg-darkgrey rounded"
          />
          <div :style="{ background: color }" class="w-2/5 h-3 rounded" />
        </div>
        <div :style="{ background: color }" class="mt-3 w-1/5 h-3 rounded" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaoProposalsSkeletonCard',

  props: {
    color: {
      type: String,
      default: () => 'rgba(187, 44, 117, 0.7)',
    },
  },
};
</script>

<template>
  <div>
    <div
      class="flex items-center justify-around rounded border border-primary-content"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="p-2 md:p-4 flex flex-col items-center"
      >
        <div
          class="rounded opacity-70 bg-primary-content animate-pulse w-8 h-8 mb-1"
        />

        <div
          class="rounded opacity-70 bg-primary-content animate-pulse w-12 h-6"
        />
      </div>
    </div>

    <div class="flex justify-center h-10">
      <div
        class="w-1/3 h-4 m-2 rounded opacity-70 bg-primary-content animate-pulse"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotingCountdownSkeleton',
};
</script>

<template>
  <div>
    <div
      :class="{ 'border-white': primary }"
      class="flex items-center justify-around rounded border border-primary"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="p-2 md:p-4 flex flex-col items-center"
      >
        <div
          :class="{ 'bg-white': primary, 'bg-primary': !primary }"
          class="rounded opacity-70 animate-pulse w-8 h-8 mb-1"
        />

        <div
          :class="{ 'bg-white': primary, 'bg-primary': !primary }"
          class="rounded opacity-70 animate-pulse w-12 h-6"
        />
      </div>
    </div>

    <div class="flex justify-center h-10">
      <div
        :class="{ 'bg-white': primary, 'bg-primary': !primary }"
        class="w-1/3 h-4 m-2 rounded opacity-70 animate-pulse"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotingCountdownSkeleton',

  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>


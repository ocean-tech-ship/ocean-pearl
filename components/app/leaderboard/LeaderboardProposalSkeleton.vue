<template>
  <div class="bg-white flex lg:divide-x lg:divide-darkgrey">
    <div
      :class="{
        'w-full md:w-4/6 lg:w-1/2': primary,
        'w-full md:w-4/6 lg:w-2/5': !primary,
      }"
      class="flex p-2"
    >
      <div class="flex-1 space-y-1">
        <div class="flex">
          <!-- logo -->
          <div class="self-center">
            <div
              class="
                w-12
                h-12
                lg:w-16 lg:h-16
                rounded
                bg-primary
                opacity-70
                animate-pulse
              "
            />
          </div>

          <!-- details -->
          <div
            :class="{
              'flex flex-col justify-center space-y-2 flex-grow': !primary,
            }"
            class="px-2 flex-grow space-y-1"
          >
            <div
              class="
                w-full
                md:w-3/5
                h-4
                py-2
                rounded
                bg-primary
                opacity-70
                animate-pulse
              "
            />

            <!-- progress bars -->
            <div v-if="primary" class="space-y-1 py-1 hidden lg:block">
              <div
                class="w-4/5 h-2 rounded bg-primary opacity-70 animate-pulse"
              />
              <div
                class="w-2/5 h-2 rounded bg-primary opacity-70 animate-pulse"
              />
            </div>

            <!-- tags -->
            <div class="flex space-x-1">
              <div
                class="rounded bg-primary opacity-70 animate-pulse h-6 w-20"
              />
              <div
                class="rounded bg-primary opacity-70 animate-pulse h-6 w-20"
              />
            </div>
          </div>
        </div>

        <!-- votes & funding (until lg) -->
        <div class="flex justify-between sm:justify-around lg:hidden">
          <div
            class="rounded border border-darkgrey w-1/3 p-1 px-2 space-y-0.5"
          >
            <div class="h-3 rounded bg-primary opacity-70 animate-pulse" />
            <div class="h-3 rounded bg-primary opacity-70 animate-pulse" />
          </div>

          <div
            class="border border-darkgrey rounded w-1/3 p-1 px-2 space-y-0.5"
          >
            <div class="h-3 rounded bg-primary opacity-70 animate-pulse" />
            <div class="h-3 rounded bg-primary opacity-70 animate-pulse" />
          </div>
        </div>
      </div>
    </div>

    <!-- votes (from lg) -->
    <div class="hidden lg:flex items-center justify-center flex-grow">
      <div class="w-48 flex flex-col items-center justify-center space-y-1">
        <div class="w-1/2 h-3 rounded bg-primary opacity-70 animate-pulse" />
        <div class="w-1/2 h-3 rounded bg-primary opacity-70 animate-pulse" />
      </div>
    </div>

    <!-- votes needed (non primary!) -->
    <div
      v-if="!primary"
      class="hidden w-28 lg:flex items-center justify-center flex-grow"
    >
      <div class="w-2/5 h-3 rounded bg-primary opacity-70" />
    </div>

    <!-- amount requested / received -->
    <div class="hidden lg:flex items-center justify-center flex-grow">
      <div class="w-28 h-3 rounded bg-primary opacity-70 animate-pulse" />
    </div>

    <!-- completed proposals gamification -->
    <div class="hidden w-14 md:flex items-center justify-center flex-grow">
      <div class="w-12 h-12 flex items-center justify-center">
        <div class="w-8 h-8 rounded bg-primary opacity-70 animate-pulse" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardProposalSkeleton',

  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

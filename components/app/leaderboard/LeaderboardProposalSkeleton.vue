<template>
  <div class="bg-white flex lg:divide-x lg:divide-darkgrey">
    <div
      :class="{
        'w-3/4 sm:w-3/5 md:w-2/4 lg:w-1/2': primary,
        'w-3/4 sm:w-3/5 md:w-2/4 lg:w-2/5': !primary,
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
                class="rounded bg-primary opacity-70 animate-pulse h-4 w-16"
              />
              <div
                class="rounded bg-primary opacity-70 animate-pulse h-4 w-16"
              />
            </div>
          </div>
        </div>

        <!-- votes (until lg) -->
        <div class="flex lg:hidden">
          <div class="w-48 flex flex-col space-y-1">
            <div
              class="w-1/2 h-3 rounded bg-primary opacity-70 animate-pulse"
            />
            <div
              class="w-1/2 h-3 rounded bg-primary opacity-70 animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- votes (from lg) -->
    <div class="p-2 xl:px-5 hidden lg:flex items-center justify-center">
      <div class="w-48 flex flex-col items-center justify-center space-y-1">
        <div class="w-1/2 h-3 rounded bg-primary opacity-70 animate-pulse" />
        <div class="w-1/2 h-3 rounded bg-primary opacity-70 animate-pulse" />
      </div>
    </div>

    <!-- votes needed (non primary!) -->
    <div
      v-if="!primary"
      class="p-2 xl:px-5 hidden lg:flex items-center justify-center w-1/6"
    >
      <div class="w-2/5 h-3 rounded bg-primary opacity-70" />
    </div>

    <!-- completed proposals gamification -->
    <div
      class="p-2 xl:px-5 hidden sm:flex items-center justify-center flex-grow"
    >
      <div class="w-12 h-12 flex items-center justify-center">
        <div class="w-8 h-8 rounded bg-primary opacity-70 animate-pulse" />
      </div>
    </div>

    <!-- vote action -->
    <div class="p-2 xl:px-5 flex items-center justify-center flex-grow">
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

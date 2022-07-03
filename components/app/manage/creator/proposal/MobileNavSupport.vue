<template>
  <div>
    <div class="flex items-center px-4 md:px-8">
      <div class="flex-grow text-primary small-text font-bold py-1">
        <!-- step information -->
        <p class="line-clamp-1 break-all">
          {{
            $t('creator.step.detailed', {
              index: step + 1,
              title: $t('creator.proposal.steps')[step],
            })
          }}
        </p>
        <!-- progress figures -->
        <div class="flex justify-between sm:justify-start sm:space-x-6">
          <span>
            {{ $t('creator.progress', { progress: progressPercentage }) }}
          </span>
          <span>{{ `${step + 1} / ${totalSteps}` }}</span>
        </div>
      </div>

      <!-- exit -->
      <button
        type="button"
        class="btn btn-ghost btn-sm m-2"
        @click="$router.go(-1)"
      >
        {{ $t('general.exit') }}
      </button>

      <!-- overview -->
      <button
        type="button"
        class="btn btn-primary btn-outline btn-sm m-2"
        @click="$emit('overview')"
      >
        {{ $t('creator.overview') }}
      </button>
    </div>

    <!-- progress bar indicator -->
    <div
      class="bg-primary h-[2px]"
      :style="{ width: `${progressPercentage}%` }"
    />
  </div>
</template>

<script>
export default {
  name: 'MobileNavSupport',

  props: {
    step: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
    progressPercentage: {
      type: Number,
      required: true,
    },
  },
};
</script>

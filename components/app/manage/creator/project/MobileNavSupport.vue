<template>
  <div>
    <div class="flex items-center px-4 md:px-8">
      <span class="flex-grow text-primary font-bold line-clamp-1">
        {{
          $t('creator.step.detailed', {
            index: step + 1,
            title: $t('creator.project.steps')[step],
          })
        }}
      </span>

      <button
        type="button"
        class="btn btn-ghost btn-sm m-2"
        @click="$router.go(-1)"
      >
        {{ $t('general.exit') }}
      </button>

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
    progressPercentage: {
      type: Number,
      required: true,
    },
  },
};
</script>

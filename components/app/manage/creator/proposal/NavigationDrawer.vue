<template>
  <div class="flex flex-col items-center">
    <!-- step information -->
    <div class="w-full my-8">
      <span class="small-text">
        {{
          $t('creator.step.detailed', {
            index: step + 1,
            title: $t('creator.proposal.steps')[step],
          })
        }}
      </span>
      <p class="leading-tight text-smbase">
        {{ $t('creator.proposal.motivate') }}
      </p>
    </div>

    <!-- progress animation -->
    <progress-circle class="my-4" :step="step" />

    <!-- progress figures -->
    <div class="my-8 w-full">
      <span class="text-base">
        {{ $t('creator.progress', { progress: progressPercentage }) }}
      </span>

      <div class="my-2 w-full rounded bg-purple-800">
        <div
          class="h-4 rounded bg-primary-content"
          :style="{ width: `${progressPercentage}%` }"
        />
      </div>

      <div class="flex justify-between small-text">
        <span>{{ $t('creator.step.short', { step: step + 1 }) }}</span>
        <span>{{ $t('creator.step.total', { total: totalSteps }) }}</span>
      </div>
    </div>

    <hr class="my-8 w-full bg-primary-content" />

    <!-- actions -->
    <div class="my-8 w-full flex justify-between">
      <button type="button" class="btn btn-ghost gap-2" @click="$emit('back')">
        <app-icon :data="icons.arrowLeft" />
        {{ $t('general.back') }}
      </button>

      <button
        type="button"
        class="btn btn-ghost gap-2"
        @click="$emit('continue')"
      >
        {{ $t('general.next') }}
        <app-icon :data="icons.arrowRight" />
      </button>
    </div>

    <button type="button" class="btn" @click="$emit('overview')">
      {{ $t('creator.overview') }}
    </button>
  </div>
</template>

<script>
import arrowLeft from '@iconify/icons-la/arrow-left';
import arrowRight from '@iconify/icons-la/arrow-right';
import AppIcon from '@/components/common/AppIcon';
import ProgressCircle from '@/components/app/manage/creator/proposal/ProgressCircle';

export default {
  name: 'NavigationDrawer',

  components: { ProgressCircle, AppIcon },

  props: {
    step: {
      type: [Number, String],
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

  data() {
    return {
      icons: {
        arrowLeft,
        arrowRight,
      },
    };
  },
};
</script>

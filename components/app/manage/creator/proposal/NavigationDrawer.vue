<template>
  <div class="w-full flex flex-col items-center">
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

    <!-- divider -->
    <hr class="my-8 w-full bg-primary-content" />

    <!-- actions -->
    <div class="my-8 w-full flex justify-between">
      <button
        type="button"
        class="btn btn-ghost gap-2"
        @click="$emit('navigate', -1)"
      >
        <app-icon :data="icons.arrowLeft" />
        {{ $t('general.back') }}
      </button>

      <button
        type="button"
        class="btn btn-ghost gap-2"
        @click="$emit('navigate', +1)"
      >
        {{ $t('general.next') }}
        <app-icon :data="icons.arrowRight" />
      </button>
    </div>

    <app-button
      class="btn-ghost"
      :class="{ 'btn-outline': showOverview }"
      :icon="icons.clipboardList"
      :btn-text="$t('creator.overview')"
      @click="$emit('overview')"
    />
  </div>
</template>

<script>
import clipboardList from '@iconify/icons-la/clipboard-list';
import arrowLeft from '@iconify/icons-la/arrow-left';
import arrowRight from '@iconify/icons-la/arrow-right';
import AppIcon from '@/components/common/AppIcon';
import ProgressCircle from '@/components/app/manage/creator/proposal/ProgressCircle';
import AppButton from '~/components/common/AppButton';

export default {
  name: 'NavigationDrawer',

  components: { AppButton, ProgressCircle, AppIcon },

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
    showOverview: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        clipboardList,
        arrowLeft,
        arrowRight,
      },
    };
  },
};
</script>

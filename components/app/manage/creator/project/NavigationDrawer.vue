<template>
  <div class="w-full flex flex-col items-center">
    <!-- steps -->
    <steps-overview
      class="my-8"
      :steps="steps"
      :step="step"
      @goTo="$emit('goTo', $event)"
    />

    <!-- divider -->
    <hr class="w-full bg-primary-content" />

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
        :disabled="step >= steps.length - 1"
        @click="$emit('navigate', +1)"
      >
        {{ $t('general.next') }}
        <app-icon :data="icons.arrowRight" />
      </button>
    </div>
  </div>
</template>

<script>
import arrowLeft from '@iconify/icons-la/arrow-left';
import arrowRight from '@iconify/icons-la/arrow-right';
import StepsOverview from '@/components/app/manage/creator/project/StepsOverview';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'NavigationDrawer',

  components: { AppIcon, StepsOverview },

  props: {
    steps: {
      type: Array,
      required: true,
    },
    step: {
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

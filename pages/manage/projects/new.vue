<template>
  <creator-scaffold>
    <!-- stepper navigation -->
    <template #navigation>
      <ul class="steps steps-vertical py-8">
        <li
          v-for="(stepName, index) in $t('creator.project.steps')"
          :key="index"
          :class="{ 'step-primary': index === step }"
          class="step"
        >
          <button
            type="button"
            class="btn btn-ghost normal-case font-normal mx-2"
            @click="step = index"
          >
            {{ stepName }}
          </button>
        </li>
      </ul>
    </template>

    <!-- mobile nav support -->
    <template #mobile-nav-support>
      <div class="flex items-center">
        <span class="text-primary font-bold flex-grow">
          Step {{ step + 1 }}: {{ $t('creator.project.steps')[step] }}
        </span>

        <button type="button" class="btn btn-ghost btn-sm m-2">
          {{ $t('general.exit') }}
        </button>

        <button type="button" class="btn btn-primary btn-outline btn-sm m-2">
          {{ $t('creator.project.overview') }}
        </button>
      </div>
    </template>

    <!-- walk through project creation -->
    <!-- every step needs to be registered here -->
    <main class="px-8">
      <app-stepper :step="step">
        <template #0>
          <div>first</div>
        </template>
        <template #1>
          <div>second</div>
        </template>
      </app-stepper>
    </main>
  </creator-scaffold>
</template>

<script>
import Vue from 'vue';
import CreatorScaffold from '@/components/app/manage/CreatorScaffold';
import AppStepper from '@/components/common/AppStepper';

export default Vue.extend({
  components: { AppStepper, CreatorScaffold },

  layout: 'creator',

  data() {
    return {
      step: 0,
    };
  },
});
</script>

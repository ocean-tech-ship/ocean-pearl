<template>
  <manage-scaffold>
    <template #navigation>
      <!-- stepper navigation -->
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
    <main class="px-8">
      <!-- walk through project creation -->
      <!-- every step needs to be registered here -->
      <app-stepper :step="step">
        <template #0>
          <div>first</div>
        </template>
        <template #1>
          <div>second</div>
        </template>
      </app-stepper>
    </main>
  </manage-scaffold>
</template>

<script>
import Vue from 'vue';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import AppStepper from '@/components/common/AppStepper';

export default Vue.extend({
  components: { AppStepper, ManageScaffold },

  layout: 'manage',

  data() {
    return {
      step: 0,
    };
  },
});
</script>

<template>
  <creator-scaffold @back="goTo(-1)" @continue="goTo(+1)">
    <!-- stepper navigation -->
    <template #navigation>
      <ul class="steps steps-vertical py-8">
        <!-- TODO: could be replaced by StepsOverview right now but might be kept if StepsOverview changes -->
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
        <div class="flex-grow text-primary font-bold">
          <span v-if="isNaN(step)">{{ $t('creator.project.overview') }}</span>
          <span v-else>
            Step {{ step + 1 }}: {{ $t('creator.project.steps')[step] }}
          </span>
        </div>

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
          @click="toggleOverview()"
        >
          {{ $t('creator.project.overview') }}
        </button>
      </div>
    </template>

    <!-- walk through project creation -->
    <!-- every step needs to be registered here -->
    <main class="p-2 px-4 md:px-8">
      <app-stepper :step="step">
        <template #overview>
          <div class="flex justify-center">
            <steps-overview
              :steps="$t('creator.project.steps')"
              :active="lastStep"
              @click="step = $event"
            />
          </div>
        </template>
        <template #0>
          <div>first</div>
        </template>
        <template #1>
          <div>second</div>
        </template>
        <template #2>
          <div class="text-primary-content">
            content
            <div v-for="n in 100" :key="n">{{ n }}</div>
          </div>
        </template>
      </app-stepper>
    </main>
  </creator-scaffold>
</template>

<script>
import Vue from 'vue';
import CreatorScaffold from '@/components/app/manage/creator/CreatorScaffold';
import AppStepper from '@/components/common/AppStepper';
import StepsOverview from '@/components/app/manage/creator/project/StepsOverview';
import createHead from '@/pages/manage/projects/new.head';

export default Vue.extend({
  components: { StepsOverview, AppStepper, CreatorScaffold },

  layout: 'creator',

  data() {
    return {
      lastStep: 0,
      step: 0,
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  watch: {
    step(_newVal, oldVal) {
      this.lastStep = oldVal;
    },
  },

  methods: {
    toggleOverview() {
      this.step = this.step === 'overview' ? this.lastStep : 'overview';
    },
    goTo(increment) {
      if (this.step + increment < 0) {
        this.$router.go(-1);
        return;
      }
      // TODO: apply logic for last page
      this.step += increment;
    },
  },
});
</script>

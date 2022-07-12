<template>
  <manage-scaffold mobile-footer @navigate="navigate($event)">
    <!-- navigation -->
    <template #navigation>
      <navigation-drawer
        :steps="steps"
        :step="step"
        @goTo="
          showOverview = false;
          step = $event;
        "
        @navigate="navigate($event)"
      />
    </template>

    <!-- mobile nav support -->
    <template #mobile-nav-support>
      <mobile-nav-support
        :step="step"
        :progress-percentage="progressPercentage"
        @overview="toggleOverview()"
      />
    </template>

    <main class="p-2 px-4 md:px-8">
      <!-- overview -->
      <steps-overview
        v-if="showOverview"
        :steps="$t('creator.project.steps')"
        :step="step"
        @goTo="
          showOverview = false;
          step = $event;
        "
      />

      <!-- walk through project creation -->
      <!-- every step needs to be registered here -->
      <app-stepper-content v-else :step="step">
        <template #0>
          <BasicStep :project="project" @update="updateData" />
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
      </app-stepper-content>
    </main>
  </manage-scaffold>
</template>

<script>
import Vue from 'vue';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import MobileNavSupport from '@/components/app/manage/creator/project/MobileNavSupport';
import NavigationDrawer from '@/components/app/manage/creator/project/NavigationDrawer';
import AppStepperContent from '@/components/common/AppStepperContent';
import StepsOverview from '@/components/app/manage/creator/project/StepsOverview';
import createHead from '@/pages/manage/projects/new.head';
import BasicStep from '~/components/app/manage/creator/project/steps/BasicStep';

export default Vue.extend({
  components: {
    BasicStep,
    MobileNavSupport,
    NavigationDrawer,
    StepsOverview,
    AppStepperContent,
    ManageScaffold,
  },

  layout: 'creator',

  middleware: 'session',

  data() {
    return {
      // TODO: Maybe we need to create a better steps list
      steps: this.$t('creator.project.steps'),
      showOverview: false,
      lastStep: 0,
      step: 0,
      project: {
        title: '',
        oneLiner: null,
      },
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  computed: {
    progressPercentage() {
      return Math.round((100 / this.steps.length) * this.step);
    },
  },

  watch: {
    step(_newVal, oldVal) {
      this.lastStep = oldVal;
    },
  },

  methods: {
    toggleOverview() {
      this.showOverview = !this.showOverview;
    },
    navigate(increment) {
      if (this.showOverview) {
        this.toggleOverview();
      }
      if (this.step + increment < 0) {
        this.$router.go(-1);
        return;
      }
      // TODO: apply logic for last page
      this.step += increment;
    },
    updateData(payload) {
      this.$data.project = { ...this.$data.project, ...payload };
    },
  },
});
</script>

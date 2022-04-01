<template>
  <manage-scaffold mobile-footer @navigate="navigate($event)">
    <!-- navigation -->
    <template #navigation>
      <navigation-drawer
        :step="step"
        :total-steps="totalSteps"
        :progress-percentage="progressPercentage"
        :show-overview="showOverview"
        @navigate="navigate($event)"
        @overview="toggleOverview()"
      />
    </template>

    <!-- mobile nav support -->
    <template #mobile-nav-support>
      <mobile-nav-support
        :step="step"
        :total-steps="totalSteps"
        :progress-percentage="progressPercentage"
        @overview="toggleOverview()"
      />
    </template>

    <main class="p-2 px-4 md:px-8">
      <!-- overview -->
      <steps-overview
        v-if="showOverview"
        :step="step"
        :steps="$t('creator.proposal.steps2')"
        @goTo="
          showOverview = false;
          step = $event;
        "
      />

      <!-- walk through proposal creation -->
      <!-- every step needs to be registered here -->
      <app-stepper-content v-else :step="step">
        <!-- TODO: we should invent an optional step '#1 - project' if project has not been specified yet -->
        <template #0> first </template>
        <template #1> second </template>
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
import createHead from '@/pages/manage/proposals/new.head';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import NavigationDrawer from '@/components/app/manage/creator/proposal/NavigationDrawer';
import MobileNavSupport from '@/components/app/manage/creator/proposal/MobileNavSupport';
import AppStepperContent from '@/components/common/AppStepperContent';
import StepsOverview from '@/components/app/manage/creator/proposal/StepsOverview';

export default Vue.extend({
  components: {
    StepsOverview,
    AppStepperContent,
    MobileNavSupport,
    ManageScaffold,
    NavigationDrawer,
  },

  layout: 'creator',

  data() {
    return {
      // TODO: We might need to invent a data list for all steps
      showOverview: false,
      totalSteps: this.$t('creator.proposal.steps').length,
      lastStep: 0,
      step: 0,
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  computed: {
    progressPercentage() {
      return Math.round((100 / this.totalSteps) * this.step);
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
  },
});
</script>

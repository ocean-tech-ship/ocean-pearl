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

      <div v-else>
        <!-- desktop step sub-title -->
        <span class="hidden xl:block text-primary pl-1">
          {{ `Step ${step + 1}: ${steps[step]}` }}
        </span>

        <!-- walk through project creation -->
        <!-- every step needs to be registered here -->
        <app-stepper-content :step="step">
          <template #0>
            <WalletStep
              :checks="walletChecks"
              @change="walletChecks = $event"
            />
          </template>
          <template #1>
            <BasicStep :project="project" @change="updateProperty" />
          </template>
          <template #2>
            <DescriptionStep :project="project" @change="updateProperty" />
          </template>
          <template #3>
            <CategoryStep :project="project" @change="updateProperty" />
          </template>
          <template #4>
            <SocialsStep :project="project" @change="updateProperty" />
          </template>
          <template #5>
            <ImagesStep :project="project" @change="updateProperty" />
          </template>
          <template #6>
            <FinalStep :project="project" />
          </template>
        </app-stepper-content>
      </div>
    </main>
  </manage-scaffold>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import createHead from '@/pages/manage/projects/new.head';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import MobileNavSupport from '@/components/app/manage/creator/project/MobileNavSupport';
import NavigationDrawer from '@/components/app/manage/creator/project/NavigationDrawer';
import AppStepperContent from '@/components/common/AppStepperContent';
import StepsOverview from '@/components/app/manage/creator/project/StepsOverview';
import BasicStep from '@/components/app/manage/creator/project/steps/BasicStep';
import WalletStep from '@/components/app/manage/creator/project/steps/WalletStep';
import CategoryStep from '@/components/app/manage/creator/project/steps/CategoryStep';
import SocialsStep from '@/components/app/manage/creator/project/steps/SocialsStep';
import ImagesStep from '@/components/app/manage/creator/project/steps/ImagesStep';
import DescriptionStep from '@/components/app/manage/creator/project/steps/DescriptionStep';
import FinalStep from '@/components/app/manage/creator/project/steps/FinalStep';

export default Vue.extend({
  components: {
    FinalStep,
    DescriptionStep,
    ImagesStep,
    SocialsStep,
    CategoryStep,
    WalletStep,
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
      walletChecks: {},
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  computed: {
    ...mapState('creator', {
      project: 'project',
    }),
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
    updateProperty(payload) {
      this.$store.commit('creator/updateProperty', payload);
    },
  },
});
</script>

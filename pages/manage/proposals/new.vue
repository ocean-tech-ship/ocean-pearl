<template>
  <manage-scaffold mobile-footer @back="goTo(-1)" @continue="goTo(+1)">
    <!-- navigation -->
    <template #navigation>
      <navigation-drawer
        :step="step"
        :total-steps="totalSteps"
        :progress-percentage="progressPercentage"
      />
    </template>
  </manage-scaffold>
</template>

<script>
import Vue from 'vue';
import createHead from '@/pages/manage/proposals/new.head';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import NavigationDrawer from '@/components/app/manage/creator/proposal/NavigationDrawer';

export default Vue.extend({
  components: { ManageScaffold, NavigationDrawer },

  layout: 'creator',

  data() {
    return {
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
      // TODO: handle overview
      return Math.round((100 / this.totalSteps) * (this.step + 1));
    },
  },

  watch: {
    step(_newVal, oldVal) {
      this.lastStep = oldVal;
    },
  },

  methods: {
    goTo(increment) {
      // TODO
    },
  },
});
</script>

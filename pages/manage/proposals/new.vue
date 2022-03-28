<template>
  <manage-scaffold mobile-footer @back="goTo(-1)" @continue="goTo(+1)">

  </manage-scaffold>
</template>

<script>
import Vue from 'vue';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import createHead from '@/pages/manage/proposals/new.head';

export default Vue.extend({
  components: { ManageScaffold },

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
    goTo(increment) {
      // TODO
    }
  }
});
</script>

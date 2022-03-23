<template>
  <div>
    {{ $route.params.project }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import createHead from '@/pages/manage/projects/_project.head';

export default Vue.extend({
  layout: 'project-manager',

  head() {
    return createHead(this.$config, this.$i18n, this.project);
  },

  computed: {
    ...mapState('profile', {
      loading: 'loading',
      projects: 'projects',
    }),
    project() {
      return this.projects.find(
        (project) => project.id === this.$route.params.project,
      );
    },
  },
});
</script>

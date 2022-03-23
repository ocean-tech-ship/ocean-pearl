<template>
  <div class="flex flex-col justify-center items-center h-full space-y-8">
    <p>{{ $t('manage.projects.empty') }}</p>
    <img src="@/assets/images/manage/projects/whale.svg" alt="" />
  </div>
</template>

<script>
import Vue from 'vue';
import createHead from '@/pages/manage/projects/index.head';

export default Vue.extend({
  layout: 'project-manager',

  middleware({ store, redirect }) {
    // Redirect to project at first index
    if (store.state.profile.projects.length > 0) {
      redirect(`/manage/projects/${store.state.profile.projects[0].id}`);
    }
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  mounted() {
    // Redirect to project at first index
    if (this.$store.state.profile.projects.length > 0) {
      this.$router.push(
        `/manage/projects/${this.$store.state.profile.projects[0].id}`,
      );
    }
  },
});
</script>


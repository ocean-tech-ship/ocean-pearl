<template>
  <div class="space-y-6">
    <h4>
      {{ $t('manage.updates.title')[0] }}
      <span class="text-primary">
        {{ $t('manage.updates.title')[1] }}
      </span>
    </h4>

    <span>
      {{ $t('manage.updates.subtitle') }}
    </span>

    <project-updates-input />

    <h4>
      {{ $t('manage.updates.history.title')[0] }}
      <span class="text-primary">
        {{ $t('manage.updates.history.title')[1] }}
      </span>
    </h4>

    <span>
      {{ $t('manage.updates.history.subtitle') }}
    </span>

    <!-- TODO: use brian's components here and wrap them with a review status badge + review message -->
  </div>
</template>

<script>
import Vue from 'vue';
import ProjectUpdatesInput from '@/components/app/manage/project/ProjectUpdatesInput';

export default Vue.extend({
  components: { ProjectUpdatesInput },

  async fetch(ctx) {
    await ctx.store.dispatch('posts/load', ctx.params.project);
  },
});
</script>

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

    <project-updates-input :posts="project.posts" />

    <div>
      <h4>
        {{ $t('manage.updates.history.title')[0] }}
        <span class="text-primary">
          {{ $t('manage.updates.history.title')[1] }}
        </span>
      </h4>

      <span>
        {{ $t('manage.updates.history.subtitle') }}
      </span>
    </div>

    <alert-box v-if="project.posts.length === 0" type="info" icon>
      {{ $t('manage.updates.history.empty') }}
    </alert-box>

    <div v-for="post in project.posts" :key="post.id">
      <project-post-card :post="{ ...post, project }" single-col-variant />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ProjectUpdatesInput from '@/components/app/manage/project/ProjectUpdatesInput';
import ProjectPostCard from '@/components/app/feed/ProjectPostCard';
import AlertBox from '~/components/common/AlertBox';

export default Vue.extend({
  components: { AlertBox, ProjectPostCard, ProjectUpdatesInput },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
});
</script>

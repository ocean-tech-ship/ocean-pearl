<template>
  <div v-if="project.posts.length">
    <h4 class="pt-16 pb-6">
      {{ $t('project.posts.title') }}
      <span class="text-primary">
        {{ $t('project.posts.titleHighlight') }}
      </span>
    </h4>

    <div class="grid grid-cols-1 gap-4">
      <div v-for="post in project.posts" :key="post.id">
        <project-post-card :post="{ ...post, project }" single-col-variant />
      </div>
    </div>

    <div class="flex justify-center pt-12">
      <app-button
        class="btn-md btn-gradient-primary-variant border-0"
        as="button"
      >
        {{ $t('project.posts.btnLoadMore') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import ProjectPostCard from '@/components/app/feed/ProjectPostCard';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'ProjectSinglePosts',

  components: { AppButton, ProjectPostCard },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

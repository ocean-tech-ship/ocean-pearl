<template>
  <div v-if="project.posts.length">
    <h4 class="pt-16 pb-6">
      {{ $t('project.posts.title') }}
      <span class="text-primary">
        {{ $t('project.posts.titleHighlight') }}
      </span>
    </h4>

    <div class="grid grid-cols-1 gap-4">
      <div v-for="projectPost in project.posts" :key="projectPost.id">
        <project-post-card :project-post="projectPost" single-col-variant />
      </div>
    </div>

    <div class="flex justify-center pt-12">
      <app-button
        class="btn-md btn-gradient-primary-variant border-0"
        as="button"
        >{{ $t('project.posts.btnLoadMore') }}</app-button
      >
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
      default: () => {},
    },
  },
};
</script>

<style scoped></style>

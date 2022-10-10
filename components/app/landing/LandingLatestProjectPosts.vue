<template>
  <div>
    <h2>
      {{ $t('landing.latest_project_posts.title') }}
      <span class="text-primary">
        {{ $t('landing.latest_project_posts.titleHighlight') }}
      </span>
    </h2>
    <p>{{ $t('landing.latest_project_posts.text') }}</p>

    <app-skeleton-card-list
      v-if="posts === null"
      custom-class="grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3
        gap-4
        mt-10"
      :quantity="3"
    >
      <project-post-skeleton-card />
    </app-skeleton-card-list>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10"
    >
      <div v-for="post in posts" :key="post.id">
        <project-post-card :post="post" />
      </div>
    </div>

    <app-link-icon-right to="/feed">
      {{ $t('landing.latest_project_posts.link_text') }}
    </app-link-icon-right>
  </div>
</template>

<script>
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import AppLinkIconRight from '@/components/common/AppLinkIconRight.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';
import ProjectPostSkeletonCard from '@/components/app/feed/ProjectPostSkeletonCard';
import ProjectPostCard from '@/components/app/feed/ProjectPostCard';

export default {
  name: 'LandingLatestProjectPosts',

  components: {
    ProjectPostCard,
    ProjectPostSkeletonCard,
    AppLinkIconRight,
    AppSkeletonCardList,
  },

  mixins: [ProjectBeautifyId],

  props: {
    posts: {
      type: [Array, null],
      default: null,
    },
  },
};
</script>

<template>
  <div>
    <!--  Feed header  -->
    <section-container>
      <feed-header />
    </section-container>

    <!-- Project post feed   -->
    <section-container class="pb-4 xl:pb-16">
      <app-skeleton-card-list
        v-if="posts === null"
        custom-class="grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3
        gap-4
        mt-10"
        :quantity="3"
      >
        <project-post-skeleton-card single-col-variant />
      </app-skeleton-card-list>

      <div v-else class="grid grid-cols-1 gap-4 mt-10">
        <div v-for="post in posts" :key="post.id">
          <project-post-card :post="post" single-col-variant />
        </div>
      </div>
    </section-container>
  </div>
</template>

<script>
import SectionContainer from '@/components/common/SectionContainer';
import FeedHeader from '@/components/app/feed/FeedHeader';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList';
import ProjectPostSkeletonCard from '@/components/app/feed/ProjectPostSkeletonCard';
import ProjectPostCard from '@/components/app/feed/ProjectPostCard';
import createHead from '@/pages/feed/index.head';
import { getPosts } from '@/api';

export default {
  components: {
    ProjectPostCard,
    ProjectPostSkeletonCard,
    AppSkeletonCardList,
    FeedHeader,
    SectionContainer,
  },

  data() {
    return {
      posts: null,
    };
  },

  async fetch() {
    try {
      this.posts = await getPosts(this.$axios);
    } catch (error) {
      await this.$store.dispatch(
        'alert/error',
        this.$i18n.t('general.error.retry'),
      );
    }
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },
};
</script>

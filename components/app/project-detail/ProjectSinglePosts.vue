<template>
  <div v-if="project.posts && project.posts.length">
    <h4 class="pt-16 pb-6">
      {{ $t('project.posts.title') }}
      <span class="text-primary">
        {{ $t('project.posts.titleHighlight') }}
      </span>
    </h4>

    <div ref="postsWrapper" class="grid grid-cols-1 gap-4">
      <div v-for="post in currentPosts" :key="post.id">
        <project-post-card :post="{ ...post, project }" single-col-variant />
      </div>
    </div>

    <div
      v-if="currentPage + 1 < postsPaginated.length"
      class="flex justify-center pt-12"
    >
      <app-button
        class="btn-md btn-gradient-primary-variant border-0"
        as="button"
        @click="handleLoadMore()"
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

  data() {
    return {
      currentPage: 0,
      currentPosts: null,
    };
  },

  computed: {
    postsPaginated() {
      return this.paginate(this.project.posts, 5);
    },
  },

  created() {
    this.currentPosts = this.postsPaginated[this.currentPage];
  },

  methods: {
    paginate(arr, size) {
      return arr.reduce((acc, val, i) => {
        const idx = Math.floor(i / size);
        const page = acc[idx] || (acc[idx] = []);
        page.push(val);

        return acc;
      }, []);
    },
    handleLoadMore() {
      if (this.currentPage + 1 < this.postsPaginated.length) {
        this.currentPage++;
        this.currentPosts = [
          ...this.currentPosts,
          ...this.postsPaginated[this.currentPage],
        ];
      }
    },
  },
};
</script>

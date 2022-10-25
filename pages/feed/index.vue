<template>
  <div>
    <!--  Feed header  -->
    <section-container>
      <feed-header />
    </section-container>

    <!-- Project post feed   -->
    <section-container ref="postsWrapper" class="pb-4 xl:pb-16">
      <div v-if="$store.state['feed-filter'].error">
        <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
        <p class="small-text">
          {{ $t($store.state['projects-filter'].error) }}
        </p>
      </div>

      <app-skeleton-card-list
        v-else-if="$store.state['feed-filter'].pending"
        custom-class="grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3
        gap-4
        mt-10"
        :quantity="3"
      >
        <project-post-skeleton-card single-col-variant />
      </app-skeleton-card-list>

      <div v-else class="grid grid-cols-1 gap-4 mt-10">
        <div v-for="post in $store.state['feed-filter'].posts" :key="post.id">
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
import debounce from '~/helpers/debounce';

export default {
  name: 'Feed',

  components: {
    ProjectPostCard,
    ProjectPostSkeletonCard,
    AppSkeletonCardList,
    FeedHeader,
    SectionContainer,
  },

  mounted() {
    this.setPending(true).then(() =>
      this.fetchPosts().then(this.handleScrolling),
    );
  },

  beforeDestroy() {
    this.resetState();
    window.onscroll = null;
  },

  methods: {
    handleScrolling() {
      const _this = this;
      window.onscroll = debounce(function () {
        const filterLimit = _this.$store.state['feed-filter'].filter.limit;
        const paginationLimit =
          _this.$store.state['feed-filter'].pagination.limit;
        const limit = filterLimit + paginationLimit;
        const scrollTop = document.documentElement.scrollTop;
        const postsWrapperBottom =
          _this.$refs.postsWrapper.$el.getBoundingClientRect().bottom;

        if (scrollTop > postsWrapperBottom) {
          _this.setFilter({ limit }).then(() => _this.fetchPosts());
        }
      }, 100);
    },
    resetState() {
      return this.$store.dispatch('feed-filter/resetState');
    },
    setPending(payload) {
      return this.$store.dispatch('feed-filter/setPending', payload);
    },
    setFilter(payload) {
      return this.$store.dispatch('feed-filter/setFilter', payload);
    },
    fetchPosts() {
      return this.$store.dispatch('feed-filter/fetchAll');
    },
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },
};
</script>

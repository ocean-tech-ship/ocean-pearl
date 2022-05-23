<template>
  <section-container>
    <h2 class="text-primary">{{ doc.title }}</h2>
    <blog-meta :article="doc" class="pb-3" />

    <nuxt-content :document="doc" tag="article" class="prose max-w-none" />

    <div class="divider" />

    <p class="small-text pb-4">
      Did you like this post? Discover also our other
      <nuxt-link to="/blog" class="link">blog posts</nuxt-link>.
    </p>
  </section-container>
</template>

<script>
import arrowLeft from '@iconify/icons-la/arrow-left';
import Vue from 'vue';
import SectionContainer from '@/components/common/SectionContainer';
import BlogMeta from '@/components/app/blog/BlogMeta';
import createHead from '~/pages/blog/_article.head';

export default Vue.extend({
  components: { BlogMeta, SectionContainer },

  async asyncData({ $content, params, redirect }) {
    try {
      const doc = await $content('blog', params.article).fetch();
      return { doc };
    } catch {
      redirect('/blog');
    }
  },

  data() {
    return {
      icons: {
        arrowLeft,
      },
    };
  },

  head() {
    return createHead(this.$config, this.$i18n, this.doc);
  },
});
</script>

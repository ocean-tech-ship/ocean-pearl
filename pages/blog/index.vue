<template>
  <section-container>
    <h2>Blog <span class="text-primary">Posts</span></h2>

    <p>{{ $t('blog.meta.description') }}</p>

    <div class="pt-4 pb-8">
      <div v-for="(doc, index) in docs" :key="index" class="py-4">
        <h3 class="text-primary">
          <nuxt-link :to="doc.path" class="">{{ doc.title }}</nuxt-link>
        </h3>

        <blog-meta class="pb-3" :article="doc" />

        <p class="small-text">{{ doc.oneLiner }}</p>
        <nuxt-link :to="doc.path" class="link small-text">{{
          $t('blog.action')
        }}</nuxt-link>

        <div v-if="index + 1 < docs.length" class="divider" />
      </div>
    </div>
  </section-container>
</template>

<script>
import Vue from 'vue';
import SectionContainer from '~/components/common/SectionContainer';
import BlogMeta from '~/components/app/blog/BlogMeta';
import createHead from '~/pages/blog/index.head';

export default Vue.extend({
  components: { BlogMeta, SectionContainer },

  async asyncData({ $content }) {
    const docs = await $content('blog').fetch();
    return { docs };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },
});
</script>

<template>
  <div>
    <section-container class="pb-4 xl:pb-16">
      <div
        class="flex mb-4 flex-col-reverse lg:flex-row lg:items-center lg:justify-between"
      >
        <project-post-meta
          :post="post"
          :to="`/projects/${beautifyProjectId(post.project)}`"
          single-col-variant
        />

        <div class="flex gap-4 py-5">
          <app-button
            class="btn-sm lg:btn-md btn-gradient-primary border-0"
            as="link"
            to="/feed"
            :icon="icons.arrowLeft"
          >
            {{ $t('feed.post.btnProject') }}
          </app-button>
          <app-button
            class="btn-sm lg:btn-md btn-primary btn-outline"
            as="link"
            :to="`/projects/${beautifyProjectId(post.project)}`"
            >{{ $t('feed.post.btnProject') }}</app-button
          >
        </div>
      </div>

      <div v-dompurify-html="post.text" class="prose max-w-none" />
    </section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import arrowLeft from '@iconify/icons-la/arrow-left';
import SectionContainer from '@/components/common/SectionContainer.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId.js';
import ProjectPostMeta from '@/components/app/feed/ProjectPostMeta';
import AppButton from '@/components/common/AppButton';
import createHead from '@/pages/feed/_post.head';
import { getPostById } from '@/api';

export default Vue.extend({
  components: {
    AppButton,
    ProjectPostMeta,
    SectionContainer,
  },

  mixins: [ProjectBeautifyId],

  async asyncData({ $axios, params, error, i18n }) {
    try {
      const response = await getPostById(
        $axios,
        ProjectBeautifyId.methods.readBeautifiedProjectId(params.post),
      );

      return {
        post: response.data,
      };
    } catch (ex) {
      if (ex?.response?.status === 404) {
        return error({
          statusCode: 404,
          message: i18n.t('feed.post.unknown'),
        });
      }

      return error({ statusCode: 500, message: i18n.t('general.error.retry') });
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
    return createHead(this.$config, this.$i18n, this.post);
  },
});
</script>

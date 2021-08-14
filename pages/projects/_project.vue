<template>
  <div>
    <landing-section-container v-if="error">
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </landing-section-container>

    <div v-if="project">
      <project-single-header :project="project" />

      <div class="bg-grey pt-8 pb-1 mb-8">
        <landing-section-container
          class="grid gap-12 lg:mb-0"
          :class="coverImage ? 'lg:grid-cols-1' : 'lg:grid-cols-2'"
        >
          <project-single-details :project="project" />

          <hr v-if="coverImage" class="text-primary" />

          <project-single-dao-proposal :project="project" />
        </landing-section-container>
      </div>

      <!--<project-single-roi-strategy :project="project" />-->
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getProjectById } from '@/api.js';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import ProjectSingleDaoProposal from '@/components/app/project-detail/ProjectSingleDaoProposal.vue';
import ProjectSingleDetails from '@/components/app/project-detail/ProjectSingleDetails.vue';
import ProjectSingleHeader from '@/components/app/project-detail/ProjectSingleHeader.vue';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';

export default Vue.extend({
  name: 'ProjectDetail',

  components: {
    // ProjectSingleRoiStrategy,
    ProjectSingleDetails,
    ProjectSingleDaoProposal,
    ProjectSingleHeader,
    LandingSectionContainer,
  },

  mixins: [ProjectBeautifyId],

  async asyncData({ $axios, params }) {
    try {
      const response = await getProjectById(
        $axios,
        ProjectBeautifyId.methods.readBeautifiedProjectId(params.project),
      );

      if (response.status === 204) {
        return {
          error: 'project.unknown',
          project: null,
        };
      }

      return {
        error: null,
        project:
          process.env.NODE_ENV === 'mirage'
            ? response.data.project
            : response.data,
      };
    } catch (error) {
      return {
        error: 'general.error.retry',
        project: null,
      };
    }
  },

  head() {
    return {
      title: `Ocean Pearl | ${this.project.title}`,
      meta: this.createTags(),
    };
  },

  computed: {
    coverImage() {
      return this.project.pictures.length > 0
        ? this.project.pictures[0]
        : null; /* require('@/assets/images/detail/pearl-background.png') */
    },
  },

  mounted() {
    history.replaceState(
      {},
      null,
      `/projects/${this.beautifyProjectId(this.project)}`,
    );
  },

  methods: {
    createTags() {
      const meta = [];

      meta.push(this.addTag('title', `Ocean Pearl | ${this.project.title}`));
      meta.push(this.addTag('description', this.project.description));

      // og tags
      meta.push(this.addTag('og:title', this.project.title));
      meta.push(this.addTag('og:description', this.project.description));
      meta.push(this.addTag('og:site_name', 'Ocean Pearl'));
      meta.push(this.addTag('og:type', 'website'));
      this.coverImage && meta.push(this.addTag('og:image', this.coverImage));

      return meta;
    },

    addTag(property, content) {
      return {
        hid: property,
        property,
        content,
      };
    },
  },
});
</script>

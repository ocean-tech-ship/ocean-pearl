<template>
  <div>
    <!-- error visualization -->
    <section-container v-if="error">
      <h1 class="text-primary">{{ $t('general.fetchingError') }}</h1>
      <p class="small-text">{{ $t(error) }}</p>
    </section-container>

    <!-- content -->
    <div v-if="project">
      <section-container>
        <hr class="text-darkgrey hidden md:block -mt-16" />
        <project-single-header class="my-8" :project="project" />
      </section-container>

      <div class="bg-grey">
        <section-container class="py-8">
          <project-single-description :project="project" />
          <project-single-team :project="project" />
          <project-single-gallery :project="project" />
          <project-single-socials :project="project" />

          <hr class="text-primary my-8" />

          <project-single-dao-proposal-header />

          <project-single-dao-proposal-metrics :project="project" />

          <hr class="my-8" />

          <project-single-dao-proposal-history :project="project" />
        </section-container>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getProjectById } from '@/api.js';
import SectionContainer from '@/components/common/SectionContainer';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import ProjectSingleDaoProposal from '@/components/app/project-detail/ProjectSingleDaoProposal.vue';
import ProjectSingleDetails from '@/components/app/project-detail/ProjectSingleDetails.vue';
import ProjectSingleHeader from '@/components/app/project-detail/ProjectSingleHeader.vue';
import ProjectSingleDescription from '@/components/app/project-detail/ProjectSingleDescription';
import ProjectSingleTeam from '@/components/app/project-detail/ProjectSingleTeam';
import ProjectSingleGallery from '@/components/app/project-detail/ProjectSingleGallery';
import ProjectSingleSocials from '@/components/app/project-detail/ProjectSingleSocials';
import ProjectSingleDaoProposalHeader from '@/components/app/project-detail/ProjectSingleDaoProposalHeader';
import ProjectSingleDaoProposalMetrics from '@/components/app/project-detail/ProjectSingleDaoProposalMetrics';
import ProjectSingleDaoProposalHistory from '@/components/app/project-detail/ProjectSingleDaoProposalHistory';

export default Vue.extend({
  name: 'ProjectDetail',

  components: {
    // ProjectSingleRoiStrategy,
    SectionContainer,
    ProjectSingleDescription,
    ProjectSingleDetails,
    ProjectSingleDaoProposal,
    ProjectSingleHeader,
    ProjectSingleTeam,
    ProjectSingleGallery,
    ProjectSingleSocials,
    ProjectSingleDaoProposalHeader,
    ProjectSingleDaoProposalMetrics,
    ProjectSingleDaoProposalHistory,
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

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
        <hr class="text-darkgrey hidden md:block" />
        <project-single-header class="my-8" :project="project" />
      </section-container>

      <div class="bg-grey py-8 md:py-16">
        <!-- design with gallery -->
        <section-container
          v-if="project.pictures && project.pictures.length > 0"
        >
          <div class="grid gap-8 xl:grid-cols-2">
            <div>
              <project-single-description :project="project" />
              <project-single-team class="py-4" :project="project" />
            </div>

            <div>
              <project-single-gallery :project="project" />
              <project-single-socials
                class="py-4 lg:justify-start"
                :project="project"
              />
            </div>
          </div>

          <hr class="text-primary my-8" />

          <project-single-dao-proposal-header class="pb-4" />

          <div class="block 2xl:flex 2xl:justify-between">
            <div class="pb-8 2xl:pb-0">
              <project-single-dao-proposal-metrics :project="project" />
            </div>
            <div>
              <project-single-dao-proposal-history :project="project" />
            </div>
          </div>
        </section-container>

        <!-- without gallery -->
        <section-container v-else>
          <div class="grid gap-8 xl:gap-12 lg:grid-cols-2">
            <div>
              <project-single-description :project="project" />
              <project-single-socials
                class="py-4 justify-start"
                :project="project"
              />
              <project-single-team class="py-4" :project="project" />
            </div>

            <div>
              <project-single-dao-proposal-header class="pb-4" />
              <project-single-dao-proposal-metrics :project="project" />
            </div>
          </div>

          <project-single-dao-proposal-history
            class="mt-4 xl:mt-8"
            :project="project"
          />
        </section-container>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getProjectById } from '@/api.js';
import SectionContainer from '@/components/common/SectionContainer.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId.js';
import ProjectSingleHeader from '@/components/app/project-detail/ProjectSingleHeader.vue';
import ProjectSingleDescription from '@/components/app/project-detail/ProjectSingleDescription.vue';
import ProjectSingleTeam from '@/components/app/project-detail/ProjectSingleTeam.vue';
import ProjectSingleGallery from '@/components/app/project-detail/ProjectSingleGallery.vue';
import ProjectSingleSocials from '@/components/app/project-detail/ProjectSingleSocials.vue';
import ProjectSingleDaoProposalHeader from '@/components/app/project-detail/ProjectSingleDaoProposalHeader.vue';
import ProjectSingleDaoProposalMetrics from '@/components/app/project-detail/ProjectSingleDaoProposalMetrics.vue';
import ProjectSingleDaoProposalHistory from '@/components/app/project-detail/ProjectSingleDaoProposalHistory.vue';

export default Vue.extend({
  name: 'ProjectDetail',

  components: {
    // ProjectSingleRoiStrategy,
    SectionContainer,
    ProjectSingleDescription,
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
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.project.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.project.logo?.url,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.NUXT_ENV_ROOT_URL}/projects/${this.beautifyProjectId(this.project)}`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.project.title} | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.project.description,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.project.logo?.url,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${process.env.NUXT_ENV_ROOT_URL}/projects/${this.beautifyProjectId(this.project)}`,
        },
      ]
    };
  },

  computed: {
    coverImage() {
      return this.project?.pictures?[0]?.url : null;
    },
  },

  mounted() {
    window.history.replaceState(
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

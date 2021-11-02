<template>
  <div>
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
              class="justify-center ml-4 xl:ml-6"
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
              class="justify-start"
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

  async asyncData({ $axios, params, error, i18n }) {
    try {
      const response = await getProjectById(
        $axios,
        ProjectBeautifyId.methods.readBeautifiedProjectId(params.project),
      );

      return {
        error: null,
        project:
          process.env.NODE_ENV === 'mirage'
            ? response.data.project
            : response.data,
      };
    } catch (ex) {
      if (ex?.response?.status === 404) {
        return error({ statusCode: 404, message: i18n.t('project.unknown') });
      }

      return error({ statusCode: 500, message: i18n.t('general.error.retry') });
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
          content: this.project.logo?.url ? this.project.logo.url : null,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.project.logo?.url ? `${this.project.title} Logo` : null,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: this.project.logo?.url ? 64 : null,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.project.logo?.url ? 64 : null,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.rootURL}/projects/${this.beautifyProjectId(this.project)}`,
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
          content: this.project.logo?.url ? this.project.logo.url : null,
        },
        {
          hid: 'twitter:image:width',
          property: 'twitter:image:width',
          content: this.project.logo?.url ? 64 : null,
        },
        {
          hid: 'twitter:image:height',
          property: 'twitter:image:height',
          content: this.project.logo?.url ? 64 : null,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${this.$config.rootURL}/projects/${this.beautifyProjectId(this.project)}`,
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
});
</script>

<template>
  <div class="relative space-y-6">
    <div class="flex flex-wrap justify-between items-center">
      <project-title class="py-4" :project="project" />

      <project-admins
        class="py-4"
        :project="project"
        @change="updateProperty('accessAddresses', $event)"
      />
    </div>

    <div class="space-y-6 md:space-y-0 md:flex justify-between items-start">
      <project-category
        class="flex-grow md:flex-initial"
        :project="project"
        @change="updateProperty('category', $event)"
      />

      <project-logo
        class="flex-grow md:flex-initial"
        :project="project"
        @change="updateProperty('logo', $event)"
      />
    </div>

    <div class="p-4 shadow rounded bg-base-200">
      <project-one-liner
        :project="project"
        @change="updateProperty('oneLiner', $event)"
      />
      <project-description
        :project="project"
        @change="updateProperty('description', $event)"
      />
    </div>

    <div class="grid gap-6 2xl:grid-cols-2">
      <div>
        <project-team :project="project" />
      </div>
      <div>
        <project-socials
          :project="project"
          @change="updateProperty('socialMedia', $event)"
        />
      </div>
    </div>

    <project-images
      :project="project"
      @change="updateProperty('images', $event)"
    />

    <!-- save action -->
    <div v-if="changesDetected" class="sticky bottom-0 flex justify-center">
      <button
        class="m-4 btn btn-primary"
        :class="{ loading }"
        @click="saveChanges()"
      >
        {{ $t('general.save') }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import createHead from '@/pages/manage/projects/_project.head';
import ProjectCategory from '@/components/app/manage/project/ProjectCategory';
import ProjectLogo from '@/components/app/manage/project/ProjectLogo';
import ProjectOneLiner from '@/components/app/manage/project/ProjectOneLiner';
import ProjectDescription from '@/components/app/manage/project/ProjectDescription';
import ProjectTeam from '@/components/app/manage/project/ProjectTeam';
import ProjectSocials from '@/components/app/manage/project/ProjectSocials';
import ProjectImages from '@/components/app/manage/project/ProjectImages';
import ProjectTitle from '@/components/app/manage/project/ProjectTitle';
import ProjectAdmins from '~/components/app/manage/project/ProjectAdmins';

export default Vue.extend({
  components: {
    ProjectAdmins,
    ProjectTitle,
    ProjectImages,
    ProjectSocials,
    ProjectTeam,
    ProjectDescription,
    ProjectOneLiner,
    ProjectLogo,
    ProjectCategory,
  },

  layout: 'project-manager',

  data() {
    return {
      changes: {},
    };
  },

  head() {
    return createHead(this.$config, this.$i18n, this.project);
  },

  computed: {
    ...mapState('profile', {
      loading: 'loading',
      projects: 'projects',
    }),
    originProject() {
      return this.projects.find(
        (project) => project.id === this.$route.params.project,
      );
    },
    project() {
      const project = { ...this.originProject };
      // Apply changes for preview
      Object.assign(project, this.changes);
      return project;
    },
    changesDetected() {
      return Object.keys(this.changes).length !== 0;
    },
  },

  watch: {
    originProject() {
      // Reset changes only if originProject changes after successfully update
      this.changes = {};
    },
  },

  methods: {
    updateProperty(property, value) {
      const changes = { ...this.changes };
      if (
        JSON.stringify(value) === JSON.stringify(this.originProject[property])
      ) {
        // Discard if updated property matches old state
        delete changes[property];
      } else {
        // Add update to change list
        changes[property] = value;
      }
      this.changes = changes;
    },
    async saveChanges() {
      await this.$store.dispatch('profile/update', {
        id: this.originProject.id,
        ...this.changes,
      });
    },
  },
});
</script>

<template>
  <div class="space-y-6">
    <project-header :project="project" />

    <!-- rendering child views with the desired sub-page -->
    <nuxt-child :project="project" @change="processUpdate($event)" />

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
import ProjectHeader from '@/components/app/manage/project/ProjectHeader';

export default Vue.extend({
  components: {
    ProjectHeader,
  },

  layout: 'project-manager',

  middleware: 'session',

  data() {
    return {
      changes: {},
    };
  },

  head() {
    return createHead(this.$config, this.$i18n, this.project);
  },

  computed: {
    ...mapState('account', {
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
    projects() {
      // Reset changes if the underlying store overrides the state (e.g. by a successful update)
      this.changes = {};
    },
  },

  methods: {
    processUpdate(payload) {
      const property = payload.property;
      const value = payload.value;
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
      await this.$store.dispatch('account/update', {
        id: this.originProject.id,
        ...this.changes,
      });
    },
  },
});
</script>

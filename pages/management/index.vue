<template>
  <div>
    <section-container>
      <account-header
        :wallet="wallet"
        :projects="projects"
        :selected-project="selectedProject"
        @selectProject="
          updateRequest = {}
          projectIndex = $event
        "
      />

      <!-- Loading indication -->
      <p v-if="!wallet">Loading...</p>

      <!-- Info Messages -->
      <div v-if="!!info" class="shadow rounded p-4 my-2">Info: {{ info }}</div>

      <!-- Error Messages -->
      <div v-if="!!error" class="shadow rounded p-4 my-2">Error: {{ error }}</div>

      <!-- Empty Project -->
      <empty-account v-if="!!projects && projects.length === 0" class="pt-16" />
    </section-container>

    <div v-if="!!selectedProject" class="bg-grey py-8">
      <section-container>
        <div class="flex justify-between flex-wrap">
          <project-title class="pb-4" :project="selectedProject" />

          <project-logo
            class="pb-4"
            :project="selectedProject"
            @change="updateRequest.logo = $event"
          />
        </div>

        <project-description
          class="py-8"
          :project="selectedProject"
          @change="updateRequest.description = $event"
          @unset="delete updateRequest.description"
        />

        <project-pictures
          class="py-8"
          :project="selectedProject"
          @delete="updateRequest.deletePictures = $event"
          @change="updateRequest.newPictures = $event"
        />

        <!-- save action -->
        <div class="flex justify-center pt-8">
          <app-button :text="$t('general.save')" @click="saveProject()" />
        </div>
      </section-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import SectionContainer from '@/components/common/SectionContainer';
import AppButton from '@/components/common/AppButton.vue';
import AccountHeader from '@/components/app/account/AccountHeader.vue';
import EmptyAccount from '@/components/app/account/EmptyAccount.vue';
import ProjectTitle from '@/components/app/account/project/ProjectTitle.vue';
import ProjectLogo from '@/components/app/account/project/ProjectLogo.vue';
import ProjectDescription from '@/components/app/account/project/ProjectDescription.vue';
import ProjectPictures from '@/components/app/account/project/ProjectPictures.vue';

export default Vue.extend({
  components: {
    SectionContainer,
    AccountHeader,
    AppButton,
    EmptyAccount,
    ProjectTitle,
    ProjectLogo,
    ProjectDescription,
    ProjectPictures,
  },

  middleware: ['session'],

  data() {
    return {
      projectIndex: 0,
      updateRequest: {},
    }
  },

  async fetch({ redirect, store }) {
    try {
      await store.dispatch('account/loadAccount')
    } catch(error) { // Authentication failure
      redirect('/management/login')
    }
  },

  computed: {
    ...mapState('account', {
      info: 'info',
      error: 'error',
      projects: 'projects',
      wallet: 'wallet',
    }),

    selectedProject() {
      return this.projects?.length > 0 ? this.projects[this.projectIndex] : null
    },
  },

  methods: {
    saveProject() {
      this.updateRequest.project = this.selectedProject.id
      this.$store.dispatch('account/updateProject', this.updateRequest)
    },
  },
})
</script>

<style scoped></style>

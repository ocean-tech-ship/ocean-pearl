<template>
  <div>
    <landing-section-container>
      <account-header
        :projects="projects"
        :selected-project="selectedProject"
        @selectProject="
          updateRequest = {}
          projectIndex = $event
        "
      />

      <!-- Loading indication -->
      <p v-if="$fetchState.pending">Loading...</p>

      <!-- Info Messages -->
      <div v-if="!!info" class="shadow rounded p-4 my-2">Info: {{ info }}</div>

      <!-- Error Messages -->
      <div v-if="!!error" class="shadow rounded p-4 my-2">Error: {{ error }}</div>

      <!-- Empty Project -->
      <empty-account v-if="!!projects && projects.length === 0" />
    </landing-section-container>

    <div v-if="!!selectedProject" class="bg-grey pt-8 pb-1">
      <landing-section-container>
        <div class="flex justify-between flex-wrap">
          <project-title class="pb-4" :project="selectedProject" />
          <project-logo class="pb-4" :project="selectedProject" />
        </div>

        <project-description
          class="py-8"
          :project="selectedProject"
          @change="updateRequest.description = $event"
          @unset="delete updateRequest.description"
        />

        <project-images class="py-8" :project="selectedProject" />

        <!-- save action -->
        <div class="flex justify-center pt-8">
          <app-button :text="$t('general.save')" />
        </div>
      </landing-section-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import AppButton from '@/components/common/AppButton'
import AccountHeader from '@/components/app/account/AccountHeader'
import EmptyAccount from '@/components/app/account/EmptyAccount'
import ProjectTitle from '@/components/app/account/project/ProjectTitle'
import ProjectLogo from '@/components/app/account/project/ProjectLogo'
import ProjectDescription from '@/components/app/account/project/ProjectDescription'
import ProjectImages from '@/components/app/account/project/ProjectImages'

export default Vue.extend({
  components: {
    LandingSectionContainer,
    AccountHeader,
    AppButton,
    EmptyAccount,
    ProjectTitle,
    ProjectLogo,
    ProjectDescription,
    ProjectImages,
  },

  middleware: ['session'],

  async fetch() {
    await this.$store.dispatch('account/loadAccount')
  },

  data() {
    return {
      projectIndex: 0,
      updateRequest: {},
    }
  },

  computed: {
    ...mapState('account', {
      info: 'info',
      error: 'error',
      projects: 'projects',
    }),

    selectedProject() {
      return this.projects ? this.projects[this.projectIndex] : null
    },
  },

  methods: {
    deleteImage(image) {
      const index = this.project.pictures.indexOf(image)
      if (index > -1) {
        this.project.pictures.splice(index, 1)
      }
    },

    setLogo(event) {
      if (event.target.files.length > 0) {
        this.project.logo = URL.createObjectURL(event.target.files[0])
      }
    },

    addImages(event) {
      for (const file of event.target.files) {
        this.project.pictures.push(URL.createObjectURL(file))
      }
    },

    async sign() {
      try {
        const sign = await this.$store.dispatch('wallet/signData', 'payload')
        console.log('sign', sign)
      } catch (e) {
        console.log('error on sign', e)
      }
    },
  },
})
</script>

<style scoped></style>

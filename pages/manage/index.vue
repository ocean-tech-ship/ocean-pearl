<template>
  <landing-section-container>
    <account-header :projects="projects" :selected-project="selectedProject" />

    <!-- Loading indication -->
    <p v-if="$fetchState.pending">Loading...</p>

    <!-- Info Messages -->
    <div v-if="!!info" class="shadow rounded p-4 my-2">Info: {{ info }}</div>

    <!-- Error Messages -->
    <div v-if="!!error" class="shadow rounded p-4 my-2">Error: {{ error }}</div>
  </landing-section-container>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import AppButton from '@/components/common/AppButton'
import AppLogo from '@/components/common/AppLogo'
import AppUpload from '@/components/common/AppUpload'
import AccountHeader from '@/components/app/account/AccountHeader'

export default Vue.extend({
  components: {
    LandingSectionContainer,
    AccountHeader,
    AppButton,
    AppLogo,
    AppUpload,
  },

  middleware: ['session'],

  async fetch() {
    await this.$store.dispatch('account/loadAccount')
  },

  computed: {
    ...mapState('account', {
      info: 'info',
      error: 'error',
      projects: 'projects',
    }),

    selectedProject() {
      return this.projects[0]
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

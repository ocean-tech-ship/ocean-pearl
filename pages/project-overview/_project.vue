<template>
  <div>
    <project-single-header :project="project" />
    <project-single :project="project" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProjectSingleHeader from '~/components/app/project-detail/ProjectSingleHeader.vue'
import ProjectSingle from '~/components/app/project-detail/ProjectSingle.vue'
import { getProjectById } from '@/api.js'

export default Vue.extend({
  name: 'ProjectDetail',
  components: {
    ProjectSingle,
    ProjectSingleHeader,
  },

  async asyncData({ $axios, params }) {
    const project = await getProjectById($axios, params.project)
    return process.env.useMirage === 'true' ? project :  { project }
  }
})
</script>

<style></style>

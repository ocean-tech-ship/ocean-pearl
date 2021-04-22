<template>
  <div>
    
    <project-single-header :project="this.projectObj" />
    <project-single :project="this.projectObj" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProjectSingleHeader from '~/components/app/project-detail/ProjectSingleHeader.vue'
import ProjectSingle from '~/components/app/project-detail/ProjectSingle.vue'
import { getProjectById } from '@/api.js'

export default Vue.extend({

  name: "ProjectDetail",
  components: {
    ProjectSingle,
    ProjectSingleHeader
  },

  async asyncData({ params }) {
      const projectObj = await getProjectById(params.project)
      return { projectObj }
    }
})
</script>

<style>
</style>

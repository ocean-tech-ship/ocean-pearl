<template>
  <div>
    <projects-header />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectsHeader from '@/components/app/project-overview/ProjectsHeader.vue'

export default Vue.extend({

  name: "ProjectOverview",
  components: {
    ProjectsHeader
  },
})
</script>

<style>
</style>

<template>
  <div>
    <projects-header />
    <projects-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectsHeader from '@/components/app/projects/ProjectsHeader.vue'
import ProjectsList from '@/components/app/projects/ProjectsList.vue'

export default Vue.extend({

  name: "ProjectOverview",
  components: {
    ProjectsHeader,
    ProjectsList
  },
})
</script>

<style>
</style>

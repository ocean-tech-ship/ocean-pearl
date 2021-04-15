<template>
  <div>
    <project-single-header />
    <project-single />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProjectSingleHeader from '~/components/app/project-detail/ProjectSingleHeader.vue'
import ProjectSingle from '~/components/app/project-detail/ProjectSingle.vue'

export default Vue.extend({

  name: "ProjectDetail",
  components: {
    ProjectSingle,
    ProjectSingleHeader
  },
})
</script>

<style>
</style>

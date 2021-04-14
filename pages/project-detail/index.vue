<template>
  <div>
    <project-single />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectSingle from '~/components/app/project-detail/ProjectSingle.vue'

export default Vue.extend({

  name: "ProjectDetail",
  components: {
    ProjectSingle
  },
})
</script>

<style>
</style>

<template>
  <div>
    <dao-projects-header />
    <dao-projects-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DaoProjectsHeader from '@/components/app/dao-project-overview/DaoProjectsHeader.vue'
import DaoProjectsList from '@/components/app/dao-project-overview/DaoProjectsList.vue'

export default Vue.extend({

  name: "DaoProjectOverview",
  components: {
    DaoProjectsHeader,
    DaoProjectsList
  },
})
</script>

<style>
</style>

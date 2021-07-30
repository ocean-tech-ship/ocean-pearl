<template>
  <div class="grid lg:grid-cols-2 gap-4">
    <div>
      <h2>
        Management
        <span class="text-primary">panel</span>
      </h2>

      <div class="flex flex-wrap">
        <div
          v-for="project in projects"
          :key="project.id"
          class="rounded border-2 p-2 mr-2 mb-2"
          :class="[
            project.id === selectedProject.id
              ? 'border-primary'
              : 'border-third',
          ]"
        >
          {{ project.title }}
        </div>
      </div>
    </div>

    <div>
      <div class="shadow rounded">
        <h6 class="text-primary pt-4 pl-4 pb-2">Administrators</h6>

        <hr class="text-primary" />

        <div class="p-4">TODO: wallet addresses</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountHeader',

  props: {
    projects: {
      type: Array,
      required: true,
      default: () => [],
    },

    selectedProject: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>

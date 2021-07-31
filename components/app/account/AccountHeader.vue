<template>
  <div class="grid lg:grid-cols-2 gap-4">
    <div>
      <h2>
        {{ $t('manage.title[0]') }}
        <span class="text-primary">{{ $t('manage.title[1]') }}</span>
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

      <p v-if="!!projects && projects.length === 0">
        {{ $t('manage.project.empty') }}
      </p>
    </div>

    <div>
      <div v-if="!!selectedProject" class="shadow rounded">
        <h6 class="text-primary pt-4 pl-4 pb-2">{{ $t('manage.admins') }}</h6>

        <hr class="text-primary" />

        <div class="p-4">
          <p
            v-for="address in selectedProject.admins"
            :key="address"
            class="small-text break-all"
          >
            - {{ address }}
          </p>
        </div>
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

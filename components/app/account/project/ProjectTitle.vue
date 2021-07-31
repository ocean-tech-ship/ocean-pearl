<template>
  <div class="flex">
    <div>
      <span class="text-primary">
        {{ $t('manage.project.title') }}
      </span>

      <h3 class="leading-none">{{ project.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTitle',

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>

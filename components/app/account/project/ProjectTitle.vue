<template>
  <div class="flex">
    <div>
      <p class="text-primary leading-tight">
        {{ $t('manage.project.title') }}
      </p>

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

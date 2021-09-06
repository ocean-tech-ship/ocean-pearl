<template>
  <div class="flex">
    <div>
      <span class="text-primary small-text">
        {{ $t('manage.project.title') }}
      </span>

      <h4 class="leading-none">{{ project.title }}</h4>
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

<template>
  <div class="shadow rounded p-4">
    <p class="text-primary small-text">
      {{ $t('manage.project.description') }}
    </p>

    <textarea
      v-model="description"
      class="w-full small-text bg-grey p-1 border border-primary rounded"
      rows="5"
      @change="$emit('change', description)"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectDescription',

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      description: this.$props.project.description,
    }
  },

  watch: {
    project() {
      // Reset if project gets switched
      this.description = this.$props.project.description
    },
  },
}
</script>

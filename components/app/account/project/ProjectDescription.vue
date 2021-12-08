<template>
  <div class="shadow rounded p-4">
    <label class="label label-text text-primary">
      {{ $t('manage.project.description') }}
    </label>

    <textarea
      v-model="description"
      class="w-full textarea textarea-bordered border-primary h-32"
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
    };
  },

  watch: {
    project() {
      // Reset if project gets switched
      this.description = this.$props.project.description;
    },
  },
};
</script>

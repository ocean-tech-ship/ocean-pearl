<template>
  <img
    v-if="!!coverImageUrl"
    width="100%"
    :src="coverImageUrl"
    :alt="`${project.title} ${$t('general.logo')}`"
  />
</template>

<script>
export default {
  name: 'ProjectSingleGallery',

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  computed: {
    coverImageUrl() {
      const pictures = this.$props.project.pictures;
      return pictures && pictures.length > 0 ? pictures[0] : null;
    },
  },
};
</script>

<style scoped></style>
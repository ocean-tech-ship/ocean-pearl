<template>
  <FormControl solo :label="$t('creator.project.images.label')">
    <ProjectImages
      :project="project"
      @change="$emit('change', { images: $event })"
    />
  </FormControl>
</template>

<script>
import FormControl from '@/components/app/manage/creator/FormControl';
import ProjectImages from '@/components/app/manage/project/ProjectImages';

export default {
  name: 'ImagesStep',

  components: { ProjectImages, FormControl },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

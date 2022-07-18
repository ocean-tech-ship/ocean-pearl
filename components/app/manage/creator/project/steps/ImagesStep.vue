<template>
  <FormControl solo label="Add some images to your project's image gallery">
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

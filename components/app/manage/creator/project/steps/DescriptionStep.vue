<template>
  <TextArea
    label="Describe your project in a few sentences"
    placeholder="Project description..."
    :rows="6"
    :value="project.description"
    :max-length="PROJECT_DESCRIPTION_MAX_LENGTH"
    @input="$emit('change', { description: $event })"
  />
</template>

<script>
import TextArea from '@/components/app/manage/creator/TextArea';
import ProjectConstants from '@/mixins/ProjectConstants';

export default {
  name: 'DescriptionStep',

  components: { TextArea },

  mixins: [ProjectConstants],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

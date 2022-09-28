<template>
  <TextArea
    :label="$t('creator.project.description.label')"
    :placeholder="$t('creator.project.description.placeholder')"
    required
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

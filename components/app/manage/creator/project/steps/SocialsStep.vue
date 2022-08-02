<template>
  <FormControl label="Add the social links of your project">
    <ProjectSocials
      :project="project"
      @change="$emit('change', { mediaHandles: $event })"
    />
  </FormControl>
</template>

<script>
import FormControl from '@/components/app/manage/creator/FormControl';
import ProjectSocials from '@/components/app/manage/project/ProjectSocials';

export default {
  name: 'SocialsStep',

  components: { ProjectSocials, FormControl },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

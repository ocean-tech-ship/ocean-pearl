<template>
  <FormControl label="Describe your project in a few sentences">
    desc
  </FormControl>
</template>

<script>
import FormControl from '@/components/app/manage/creator/FormControl';

export default {
  name: 'DescriptionStep',

  components: { FormControl },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

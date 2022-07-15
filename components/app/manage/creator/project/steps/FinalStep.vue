<template>
  <FormControl label="Last but not least"> finals </FormControl>
</template>

<script>
import FormControl from '@/components/app/manage/creator/FormControl';

export default {
  name: 'FinalStep',
  components: { FormControl },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

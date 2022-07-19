<template>
  <FormControl label="Last but not least">
    <span>
      Ocean Pearl is all about community. We highly appreciate that you want to
      list your project and share updates with the community. <br />
      Together we can improve the entire ecosystem.
    </span>

    <span class="pt-4">
      You are only one step away from submitting your project to Ocean Pearl.
      <br />
      After submission we will take a manual review of your project and list it
      if it does not violate our guidelines.
    </span>
  </FormControl>
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

<template>
  <div class="my-4 p-4 rounded bg-base-200">
    <app-form-control>
      <input type="text" class="input" placeholder="A title" />
    </app-form-control>

    <app-form-control>
      <textarea class="textarea" rows="4" />
    </app-form-control>

    <button type="button" class="btn btn-primary btn-block">
      submit for review
    </button>
  </div>
</template>

<script>
import AppFormControl from '@/components/common/AppFormControl';

export default {
  name: 'ProjectUpdatesInput',

  components: { AppFormControl },

  data() {
    return {
      title: '',
      description: '',
    };
  },
};
</script>

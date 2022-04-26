<template>
  <app-form-control>
    <!-- label -->
    <template #label>
      <span class="label-text text-primary">
        {{ $t('manage.project.one-liner') }}
      </span>
    </template>

    <!-- character counter -->
    <template #altLabel>
      <span class="label-text-alt">
        {{ `(${project.oneLiner.length} / ${PROJECT_ONE_LINER_MAX_LENGTH})` }}
      </span>
    </template>

    <!-- input field -->
    <app-text-input
      :value="project.oneLiner"
      :maxlength="PROJECT_ONE_LINER_MAX_LENGTH"
      @input="$emit('change', $event)"
    />
  </app-form-control>
</template>

<script>
import AppFormControl from '@/components/common/AppFormControl';
import AppTextInput from '@/components/common/AppTextInput';
import ProjectConstants from '@/mixins/ProjectConstants';

export default {
  name: 'ProjectOneLiner',

  components: { AppTextInput, AppFormControl },

  mixins: [ProjectConstants],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <app-form-control>
    <!-- label -->
    <template #label>
      <span class="label-text text-primary">
        {{ $t('manage.project.description') }}
      </span>
    </template>

    <!-- character counter -->
    <template #altLabel>
      <span class="label-text-alt">
        {{
          `(${project.description.length} / ${PROJECT_DESCRIPTION_MAX_LENGTH})`
        }}
      </span>
    </template>

    <!-- input field -->
    <app-textarea
      :rows="3"
      :value="project.description"
      :maxlength="PROJECT_DESCRIPTION_MAX_LENGTH"
      @input="$emit('change', $event)"
    />
  </app-form-control>
</template>

<script>
import AppFormControl from '@/components/common/AppFormControl';
import AppTextarea from '@/components/common/AppTextarea';
import ProjectConstants from '@/mixins/ProjectConstants';

export default {
  name: 'ProjectDescription',

  components: { AppTextarea, AppFormControl },

  mixins: [ProjectConstants],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

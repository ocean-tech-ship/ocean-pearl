<template>
  <div class="space-y-6">
    <!-- title -->
    <TextField
      :value="project.title"
      required
      label="What's the name of your project?"
      placeholder="Write the name of your project..."
      :max-length="PROJECT_TITLE_MAX_LENGTH"
      @input="$emit('change', { title: $event })"
    />

    <!-- one-liner -->
    <TextArea
      :value="project.oneLiner"
      :rows="2"
      required
      label="Your project in one sentence"
      placeholder="Write a short description of your project..."
      :max-length="PROJECT_ONE_LINER_MAX_LENGTH"
      @input="$emit('change', { oneLiner: $event })"
    />

    <!-- logo -->
    <form-control label="Add your wonderful project logo">
      <div class="flex">
        <project-logo
          :project="project"
          @change="$emit('change', { logo: $event })"
        />
      </div>
    </form-control>
  </div>
</template>

<script>
import TextField from '@/components/app/manage/creator/TextField';
import TextArea from '@/components/app/manage/creator/TextArea';
import FormControl from '@/components/app/manage/creator/FormControl';
import ProjectLogo from '@/components/app/manage/project/ProjectLogo';
import ProjectConstants from '@/mixins/ProjectConstants';

export default {
  name: 'BasicStep',

  components: {
    ProjectLogo,
    FormControl,
    TextArea,
    TextField,
  },

  mixins: [ProjectConstants],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

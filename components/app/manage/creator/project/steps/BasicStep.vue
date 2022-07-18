<template>
  <div class="space-y-6">
    <!-- title -->
    <TextField
      :value="project.title"
      label="What's the name of your project?"
      placeholder="Write the name of your project..."
      :max-length="64"
      @input="$emit('change', { title: $event })"
    />

    <!-- one-liner -->
    <TextArea
      :value="project.oneLiner"
      :rows="2"
      label="Your project in one sentence"
      placeholder="Write a short description of your project..."
      :max-length="128"
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
import ImageConstants from '@/mixins/ImageConstants';
import ProjectLogo from '@/components/app/manage/project/ProjectLogo';

export default {
  name: 'BasicStep',

  components: {
    ProjectLogo,
    FormControl,
    TextArea,
    TextField,
  },

  mixins: [ImageConstants],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

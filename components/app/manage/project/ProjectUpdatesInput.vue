<template>
  <div class="my-4 p-4 rounded shadow bg-base-200">
    <text-field
      required
      :label="$t('manage.updates.new.title.label')"
      :placeholder="$t('manage.updates.new.title.placeholder')"
      :max-length="PROJECT_UPDATE_TITLE_MAX_LENGTH"
      :value="title"
      @input="title = $event"
    />

    <markdown-editor
      required
      :label="$t('manage.updates.new.description.label')"
      :placeholder="$t('manage.updates.new.description.placeholder')"
      :max-length="PROJECT_UPDATE_DESCRIPTION_MAX_LENGTH"
      :value="description"
      :rows="4"
      @input="description = $event"
    />

    <button
      type="button"
      class="btn btn-primary btn-block mt-6"
      :class="{ 'btn-disabled': !isValidInput, loading: submitting }"
      @click="handleSubmit()"
    >
      {{ $t('general.submit-review') }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProjectConstants from '@/mixins/ProjectConstants';
import TextField from '@/components/app/manage/project/TextField';
import MarkdownEditor from '~/components/common/MarkdownEditor';

export default {
  name: 'ProjectUpdatesInput',

  components: { MarkdownEditor, TextField },

  mixins: [ProjectConstants],

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      title: '',
      description: '',
    };
  },

  computed: {
    ...mapState('posts', {
      submitting: 'submitting',
    }),
    isValidInput() {
      return this.title.length > 0 && this.description.length > 0;
    },
  },

  watch: {
    posts() {
      // Reset form if the underlying store overrides the state (e.g. by submitting a post)
      this.title = '';
      this.description = '';
    },
  },

  methods: {
    async handleSubmit() {
      await this.$store.dispatch('posts/submit', {
        project: this.$route.params.project,
        title: this.title,
        text: this.description,
      });
    },
  },
};
</script>

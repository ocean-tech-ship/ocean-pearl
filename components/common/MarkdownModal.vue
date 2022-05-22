<template>
  <app-modal :open="open" close-button large>
    <template #body>
      <div
        v-dompurify-html="renderedMarkdown"
        class="prose break-words max-w-none xl:p-4"
      />
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/common/AppModal';
import Markdown from '@/mixins/Markdown';

export default {
  name: 'ProposalModal',

  components: { AppModal },

  mixins: [Markdown],

  props: {
    open: {
      type: Boolean,
      required: true,
      default: false,
    },
    markdown: {
      type: String,
      required: true,
    },
  },

  computed: {
    renderedMarkdown() {
      return this.renderMarkdown(this.$props.markdown);
    },
  },
};
</script>

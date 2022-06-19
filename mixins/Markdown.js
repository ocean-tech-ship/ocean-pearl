import { marked } from 'marked';

export default {
  methods: {
    renderMarkdown(src) {
      return marked.parse(src, { breaks: true });
    },
  },
};

export default {
  methods: {
    beautifyProjectId(project) {
      const title = project.title
        .replace(/[^a-z0-9\s]+/gi, '')
        .replace(/\s+/g, '-')
        .toLowerCase();

      return `${project.id}-${title}`;
    },

    readBeautifiedProjectId(beautifiedId) {
      return !!beautifiedId && beautifiedId.includes('-')
        ? beautifiedId.split('-')[0]
        : beautifiedId;
    },
  },
};

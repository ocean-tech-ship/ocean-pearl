export default {
  methods: {
    beautifyProjectId(project) {
      let title = project.title
        .replace(/[^a-z0-9\s]+/gi, '')
        .replace(/\s+/g, '-')
        .toLowerCase();

      if (title.length > 48) {
        title = title.substring(0, 48);
        const lastDivider = title.lastIndexOf('-');

        // Remove half cut sections
        if (lastDivider >= 0) {
          title = title.substring(0, lastDivider);
        }
      }

      return `${project.id}-${title}`;
    },

    readBeautifiedProjectId(beautifiedId) {
      return !!beautifiedId && beautifiedId.includes('-')
        ? beautifiedId.split('-')[0]
        : beautifiedId;
    },
  },
};

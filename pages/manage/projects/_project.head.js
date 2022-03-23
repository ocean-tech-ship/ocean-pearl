export default function createHead(config, i18n, project) {
  return {
    title: i18n.t('manage.projects.meta.title-single', {
      project: project.title,
    }),
  };
}

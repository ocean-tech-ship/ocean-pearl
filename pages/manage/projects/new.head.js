export default function createHead(config, i18n) {
  return {
    title: i18n.t('creator.project.title'),
    link: [{ rel: 'canonical', href: `${config.rootURL}/manage/projects/new` }],
  };
}

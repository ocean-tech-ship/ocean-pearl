export default function createHead(config, i18n) {
  return {
    title: i18n.t('creator.proposal.title'),
    link: [
      { rel: 'canonical', href: `${config.rootURL}/manage/proposals/new` },
    ],
  };
}

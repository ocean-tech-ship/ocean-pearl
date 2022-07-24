import projectBeautifyId from '@/mixins/ProjectBeautifyId';
export default function createHead(config, _i18n, projectPost) {
  const { beautifyProjectId } = projectBeautifyId.methods;
  return {
    title: projectPost.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: projectPost.oneLiner,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: projectPost.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: projectPost.oneLiner,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${config.rootURL}/feed/${beautifyProjectId(projectPost)}`,
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `${projectPost.title} | Ocean Pearl`,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: projectPost.oneLiner,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `${config.rootURL}/feed/${beautifyProjectId(projectPost)}`,
      },
    ],
  };
}

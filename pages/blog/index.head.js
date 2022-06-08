export default function createHead(config, i18n) {
  return {
    title: i18n.t('blog.meta.title'),
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: i18n.t('blog.meta.description'),
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: i18n.t('blog.meta.title'),
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: i18n.t('blog.meta.description'),
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${config.rootURL}/blog`,
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `${i18n.t('blog.meta.title')} | Ocean Pearl`,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: i18n.t('blog.meta.description'),
      },
    ],
    link: [{ rel: 'canonical', href: `${config.rootURL}/blog` }],
  };
}

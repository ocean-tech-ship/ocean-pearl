export default function createHead(config, i18n, article) {
  return {
    title: article.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: article.oneLiner,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: article.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: article.description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${config.rootURL}/blog/${article.path}`,
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `${article.title} | Ocean Pearl`,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: article.description,
      },
    ],
    link: [
      { rel: 'canonical', href: `${config.rootURL}/blog/${article.path}` },
    ],
  };
}

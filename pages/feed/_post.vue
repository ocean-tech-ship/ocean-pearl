<template>
  <div>
    <section-container>
      <div class="flex items-center justify-between mb-4">
        <project-post-meta
          :project-post="projectPost"
          :to="`/projects/${beautifyProjectId(projectPost.project)}`"
          single-col-variant
        />
        <div class="flex gap-4 py-5">
          <app-button
            class="btn-gradient-primary border-0"
            as="link"
            to="/feed"
            btn-text="Feed"
            :icon="icons.arrowLeft"
          />
          <app-button
            class="btn-primary btn-outline"
            as="link"
            :to="`/projects/${beautifyProjectId(projectPost.project)}`"
            btn-text="Project Profile"
          />
        </div>
      </div>

      <h2 v-if="projectPost.title">{{ projectPost.title }}</h2>

      <nuxt-content
        :document="projectPost.doc"
        tag="article"
        class="prose max-w-none"
      />
    </section-container>
  </div>
</template>

<script>
import Vue from 'vue';
import arrowLeft from '@iconify/icons-la/arrow-left';
import SectionContainer from '@/components/common/SectionContainer.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId.js';
import ProjectPostMeta from '@/components/app/feed/ProjectPostMeta';
import AppButton from '@/components/common/AppButton';

export default Vue.extend({
  components: {
    AppButton,
    ProjectPostMeta,
    SectionContainer,
  },

  mixins: [ProjectBeautifyId],

  // TODO: Remove dummy data and implement fetching
  // eslint-disable-next-line require-await
  async asyncData({ $axios, params, error, i18n }) {
    try {
      /* const response = await getProjectById(
        $axios,
        ProjectBeautifyId.methods.readBeautifiedProjectId(params.project),
      ); */

      console.log(params);

      return {
        error: null,
        projectPost: {
          id: '2384094238fz0fsd9fs90dsf',
          createdAt: '2022-07-07T22:01:25.594Z',
          title: 'Post it. Fund it. Back it. Drop it. Split it. Mint it.',
          oneLiner:
            'Mirror’s robust plugin ecosystem supercharges your ideas and projects. The possibilities are endless.',
          readDuration: '5 min',
          project: {
            title: 'Indian Ocean program',
            id: '8bBA8cdA37',
            logo: {
              key: '8bBA8cdA37-Ad6F1BE5f9',
              url: 'https://d2ap5e9vgx7wei.cloudfront.net/8bBA8cdA37-Ad6F1BE5f9.png',
              fileExtension: 'png',
              id: 'fb0b4e2888',
              createdAt: '2022-07-03T13:54:07.535Z',
              updatedAt: '2022-07-03T13:54:07.535Z',
            },
          },
          doc: {
            toc: [
              {
                id: 'looking-back---latest-features',
                depth: 2,
                text: 'Looking back - Latest features',
              },
              {
                id: 'new-oceandao-funding-distribution',
                depth: 3,
                text: 'New OceanDAO funding distribution',
              },
              {
                id: 'improved-ui-components-and-dark-mode',
                depth: 3,
                text: 'Improved UI components and Dark Mode',
              },
              {
                id: 'improvements-to-the-dao-voting-leaderboard',
                depth: 3,
                text: 'Improvements to the DAO voting Leaderboard',
              },
              {
                id: 'proposal-creator---discontinued-️',
                depth: 2,
                text: 'Proposal Creator - Discontinued 🙅‍♂️',
              },
              {
                id: 'roadmap-2022',
                depth: 2,
                text: 'Roadmap 2022',
              },
              {
                id: 'ocean-pearl-blog',
                depth: 3,
                text: 'Ocean Pearl Blog',
              },
              {
                id: 'create-projects-on-ocean-pearl',
                depth: 3,
                text: 'Create Projects on Ocean Pearl',
              },
              {
                id: 'project-management-page-20',
                depth: 3,
                text: 'Project Management-Page 2.0',
              },
              {
                id: 'project-updatesnews-feed',
                depth: 3,
                text: 'Project Updates/News Feed',
              },
              {
                id: 'full-text-proposals-on-ocean-pearl',
                depth: 3,
                text: 'Full-Text Proposals on Ocean Pearl',
              },
              {
                id: 'adding-more-oceandao-related-information',
                depth: 3,
                text: 'Adding more OceanDAO related information',
              },
              {
                id: 'integration-with-the-oceandao-staging-environment',
                depth: 3,
                text: 'Integration with the OceanDAO staging environment',
              },
            ],
            body: {
              type: 'root',
              children: [
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_landing.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_landing.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h2',
                  props: {
                    id: 'looking-back---latest-features',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#looking-back---latest-features',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Looking back - Latest features',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'new-oceandao-funding-distribution',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#new-oceandao-funding-distribution',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'New OceanDAO funding distribution',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        "After months of preparations, it's finally here - the new funding distribution for the OceanDAO. Ocean Pearl devs worked closely together with the OceanDAO engineers to refine the distribution algorithm. ",
                    },
                    {
                      type: 'element',
                      tag: 'strong',
                      props: {},
                      children: [
                        {
                          type: 'text',
                          value: 'Important to know:',
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        ' The OceanDAO does the calculation only one time at the end of the voting. What you see on the leaderboard is our implementation of the algorithm which continuously calculates the outcome of the voting. There are a lot of parameters to consider: OCEAN/USD conversion, Earmark grant pools, min. funding -  just to name a few.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_deliverable1.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_deliverable1.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'improved-ui-components-and-dark-mode',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#improved-ui-components-and-dark-mode',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Improved UI components and Dark Mode',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'A lot of the Ocean Pearl UI components were rewritten to enhance the look and feel of the page. A central role of the rework takes the much-requested dark mode.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_deliverable2.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_deliverable2.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'improvements-to-the-dao-voting-leaderboard',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#improvements-to-the-dao-voting-leaderboard',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Improvements to the DAO voting Leaderboard',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'Before the Leaderboard existed you would have to use the OceanDAO notion page with simple airtable bar charts. These charts were rendered using the raw vote data (the same data we use for our leaderboard), but with a significant difference: No indication for projects if they get funding. You would have to calculate everything by yourself.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        "Ocean Pearl solved this problem and introduced with the Leaderboard a live forecast based on the voting data in the OceanDAO airtable. But the OceanDAO is a living experiment, voting rules were added, removed, or changed quite often in the past. This introduced a lot of work behind the scenes for the Ocean Pearl team. Now it seems that new features are coming a bit slower, but the system got quite complex over the last year. That's why we started to add more information to the UI of the leaderboard - with the earmark grant pools being the newest addition.",
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'We want to make it easier for newcomers to get an overview and understand what is happening while providing value through key metrics for veterans.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_deliverable3.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_deliverable3.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h2',
                  props: {
                    id: 'proposal-creator---discontinued-️',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#proposal-creator---discontinued-%EF%B8%8F',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Proposal Creator - Discontinued 🙅‍♂️',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'After consolidation with the OceanDAO engineers, it was decided to drop the work on our proposal creator. The main reason is the creation and expansion of the seed grant tool. It was meant to be a temporary solution that we would replace with a much more sophisticated proposal creator, but new requirements came into place. The portal plays now a very important role in the whole administration part of the OceanDAO.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        "This new use case requires to be flexible and fast and should be handled by in-house developers. This doesn't mean our previous work is lost. Everything we created is public (the designs, the open proposal standard). We worked on a lot of the Ocean Pearl base components in preparation for this feature. These can be used for other features in the future.",
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'strong',
                      props: {},
                      children: [
                        {
                          type: 'text',
                          value:
                            'Since this was a big part of our proposal funding we decided to ship another exciting Feature instead to deliver value to the community: Project updates on Ocean Pearl',
                        },
                        {
                          type: 'element',
                          tag: 'br',
                          props: {},
                          children: [],
                        },
                        {
                          type: 'text',
                          value: '\nMore on that in the roadmap section below.',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h2',
                  props: {
                    id: 'roadmap-2022',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#roadmap-2022',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Roadmap 2022',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'This roadmap should provide a rough idea of the direction in which our development is going. It will certainly change again. The order of the features does not indicate the timing of the release.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'ocean-pearl-blog',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#ocean-pearl-blog',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Ocean Pearl Blog',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'You are using this new feature right now. We added this new Blog to communicate updates regarding Ocean Pearl development.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_goal1.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_goal1.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'create-projects-on-ocean-pearl',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#create-projects-on-ocean-pearl',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Create Projects on Ocean Pearl',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'Not every project within the ecosystem applies for a DAO grant. We want to deliver a complete picture. We will enable the community to list their projects on Ocean Pearl without creating a DAO proposal.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_goal2.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_goal2.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'project-management-page-20',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#project-management-page-20',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Project Management-Page 2.0',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'New UI optimized for the new dark mode. New image upload service under the hood.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_goal3.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_goal3.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'project-updatesnews-feed',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#project-updatesnews-feed',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Project Updates/News Feed',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        "Projects will be able to publish updates directly on Ocean Pearl. What would this look like? Imagine a twitter-like feed where the projects share what's going on. This could be the state of a proposal deliverable or it could be an upcoming event.",
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_goal4.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_goal4.jpg',
                      },
                      children: [],
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'full-text-proposals-on-ocean-pearl',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#full-text-proposals-on-ocean-pearl',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Full-Text Proposals on Ocean Pearl',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        'We will add full proposals directly on Ocean Pearl. This will improve orientation during the voting process. Never again switch back and forth between Port and Ocean Pearl to get an overview of the proposals.',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'adding-more-oceandao-related-information',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#adding-more-oceandao-related-information',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value: 'Adding more OceanDAO related information',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        "We realized that it's hard (especially for newcomers) to gather all information about OceanDAO and its projects to participate. We want to enable more community members to make informed decisions. For this reason, we will add more information about OceanDAO and the ecosystem to our page.",
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'h3',
                  props: {
                    id: 'integration-with-the-oceandao-staging-environment',
                  },
                  children: [
                    {
                      type: 'element',
                      tag: 'a',
                      props: {
                        ariaHidden: 'true',
                        href: '#integration-with-the-oceandao-staging-environment',
                        tabIndex: -1,
                      },
                      children: [
                        {
                          type: 'element',
                          tag: 'span',
                          props: {
                            className: ['icon', 'icon-link'],
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'text',
                      value:
                        'Integration with the OceanDAO staging environment',
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'text',
                      value:
                        "We always try to improve stability. That's why we want to integrate end-to-end testing with the OceanDAO staging environment.",
                    },
                  ],
                },
                {
                  type: 'text',
                  value: '\n',
                },
                {
                  type: 'element',
                  tag: 'p',
                  props: {},
                  children: [
                    {
                      type: 'element',
                      tag: 'img',
                      props: {
                        alt: 'roadmap_CLOSING.jpg',
                        src: '/blog/2022-roadmap-update/roadmap_CLOSING.jpg',
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
            extension: '.md',
            createdAt: '2022-07-07T22:01:25.594Z',
            updatedAt: '2022-07-19T09:23:16.890Z',
          },
        },
      };
    } catch (ex) {
      if (ex?.response?.status === 404) {
        return error({
          statusCode: 404,
          message: i18n.t('feed.post.unknown'),
        });
      }

      return error({ statusCode: 500, message: i18n.t('general.error.retry') });
    }
  },

  data() {
    return {
      icons: {
        arrowLeft,
      },
    };
  },
});
</script>

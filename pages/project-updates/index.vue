<template>
  <div>
    <!--  Project updates header  -->
    <section-container>
      <project-updates-header />
    </section-container>

    <!-- Project updates feed   -->
    <section-container class="pb-4 xl:pb-16">
      <app-skeleton-card-list
        v-if="projectUpdates === null"
        custom-class="grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3
        gap-4
        mt-10"
        :quantity="3"
      >
        <app-project-updates-skeleton-card />
      </app-skeleton-card-list>

      <div v-else class="grid grid-cols-1 gap-4 mt-10">
        <div v-for="projectUpdate in projectUpdates" :key="projectUpdate.id">
          <app-project-update-card
            :project-update="projectUpdate"
            single-col-variant
          />
        </div>
      </div>
    </section-container>
  </div>
</template>

<script>
import SectionContainer from '@/components/common/SectionContainer';
import ProjectUpdatesHeader from '@/components/app/project-updates/ProjectUpdatesHeader';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList';
import AppProjectUpdateCard from '~/components/common/AppProjectUpdatesCard';
import AppProjectUpdatesSkeletonCard from '@/components/common/AppProjectUpdatesSkeletonCard';

export default {
  name: 'ProjectOverview',

  components: {
    AppProjectUpdatesSkeletonCard,
    AppProjectUpdateCard,
    AppSkeletonCardList,
    ProjectUpdatesHeader,
    SectionContainer,
  },

  // TODO: Remove dummy data and implement fetching
  data() {
    return {
      projectUpdates: [
        {
          id: '2384094238fz0fsd9fs90dsf',
          createdAt: '2022-07-07T22:01:25.594Z',
          title: 'Post it. Fund it. Back it. Drop it. Split it. Mint it.',
          oneLiner:
            'Mirror’s robust plugin ecosystem supercharges your ideas and projects. The possibilities are endless.',
          project: {
            title: 'Indian Ocean program',
            id: '66B9ee8d21',
            logo: {
              key: '8bBA8cdA37-Ad6F1BE5f9',
              url: 'https://d2ap5e9vgx7wei.cloudfront.net/8bBA8cdA37-Ad6F1BE5f9.png',
              fileExtension: 'png',
              id: 'fb0b4e2888',
              createdAt: '2022-07-03T13:54:07.535Z',
              updatedAt: '2022-07-03T13:54:07.535Z',
            },
          },
        },
        {
          id: '2384094238fz0fsd9fs90ds2',
          createdAt: '2022-07-05T23:56:15.000Z',
          title: 'A new data era is on the horizon...',
          oneLiner:
            'Today we’re excited to begin a reveal of something we’ve been considering since day one: Plugins.',
          project: {
            title: 'Algovera',
            id: '1bBb8CC8A0',
            logo: {
              key: '1bBb8CC8A0-aEE439f6B7',
              url: 'https://d2ap5e9vgx7wei.cloudfront.net/1bBb8CC8A0-aEE439f6B7.png',
              fileExtension: 'png',
              id: '9FdBADFC8e',
              createdAt: '2022-07-03T13:54:04.833Z',
              updatedAt: '2022-07-03T13:54:04.833Z',
            },
          },
        },
        {
          id: '2384094238fz0fsd9fs90ds4',
          createdAt: '2022-07-07T22:01:25.594Z',
          title: 'Create and connect your world on web3',
          oneLiner:
            'The essential web3 toolkit for sharing and funding anything. From writing about your latest idea, to building a home for the next big DAO. The essential web3 toolkit for sharing and funding anything. From writing about your latest idea, to building a home for the next big DAO.',
          project: {
            title: 'Delta DAO',
            id: 'D35A2DC596',
            logo: {
              key: 'D35A2DC596-3272882aad',
              url: 'https://d2ap5e9vgx7wei.cloudfront.net/D35A2DC596-3272882aad.jpeg',
              fileExtension: 'jpeg',
              id: 'B5575b00fC',
              createdAt: '2022-07-03T13:54:06.110Z',
              updatedAt: '2022-07-03T13:54:06.110Z',
            },
          },
        },
      ],
    };
  },

  head() {
    return {
      title: 'Project Updates',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'See all updates from projects which are currently waiting or applying for DAO funding.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'See all updates from projects which are currently waiting or applying for DAO funding.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.rootURL}/project-updates`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Project Updates | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            'See all updates from projects which are currently waiting or applying for DAO funding.',
        },
      ],
      link: [
        { rel: 'canonical', href: `${this.$config.rootURL}/project-updates` },
      ],
    };
  },
};
</script>

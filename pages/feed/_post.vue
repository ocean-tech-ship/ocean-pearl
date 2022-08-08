<template>
  <div>
    <section-container class="pb-4 xl:pb-16">
      <div
        class="flex mb-4 flex-col-reverse lg:flex-row lg:items-center lg:justify-between"
      >
        <project-post-meta
          :project-post="projectPost"
          :to="`/projects/${beautifyProjectId(projectPost.project)}`"
          single-col-variant
        />

        <div class="flex gap-4 py-5">
          <app-button
            class="btn-sm lg:btn-md btn-gradient-primary border-0"
            as="link"
            to="/feed"
            :icon="icons.arrowLeft"
            >{{ $t('feed.post.btnProject') }}</app-button
          >
          <app-button
            class="btn-sm lg:btn-md btn-primary btn-outline"
            as="link"
            :to="`/projects/${beautifyProjectId(projectPost.project)}`"
            >{{ $t('feed.post.btnProject') }}</app-button
          >
        </div>
      </div>

      <div v-dompurify-html="projectPost.content" class="prose max-w-none" />
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
import createHead from '@/pages/feed/_post.head';

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
          content:
            '<h1>\n' +
            'Post it. Fund it. Back it. Drop it. Split it. Mint it.</h1>\n' +
            '<p>Build on Ocean</p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="project-category-2" class="anchor" href="#project-category-2"></a>Project Category</h1>\n' +
            '<p>Build &amp; Integrate</p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="proposal-earmark-3" class="anchor" href="#proposal-earmark-3"></a>Proposal Earmark</h1>\n' +
            '<p>General</p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="proposal-description-4" class="anchor" href="#proposal-description-4"></a>Proposal Description</h1>\n' +
            '<p>Like the Build on Ocean cohort 1 (<a href="https://port.oceanprotocol.com/t/build-on-ocean-build-on-ocean-cohort-1-round-16/1670" class="inline-onebox">Build on Ocean | Build on Ocean Cohort 1 | Round 16</a>), which we launched on 4th June, we aim to continue onboarding more and more solidity devs onto Ocean APIs.</p>\n' +
            '<p>As part of “Build on Ocean” cohort 2, we will launch a 2nd cohort for training developers to build using ocean APIs. Fundamentals would be covered using Ocean Academy course “Ocean 101”. We will also deploy JS/ python programs for publishing data sets and consuming them using the Official documentation for ocean.js and ocean.py code examples. Ocean Code Repositories will also be deep dived.</p>\n' +
            '<p>The bootcamp will be 8 weeks long. Sessions will be held every Friday starting from 9th September and we will form Telegram Study groups. There will be office hours for solving doubts.</p>\n' +
            '<p>Details of the program: <a href="https://www.notion.so/Build-On-Ocean-21dd4f97fc094b44b269217237d48ced">https://www.notion.so/Build-On-Ocean-21dd4f97fc094b44b269217237d48ced</a></p>\n' +
            '<p>Cohort 1 Completion Details:</p>\n' +
            '<p>A total of 15 participants joined the 8 week training on each saturday and will apply for grants to build in the Ocean ecosystem for their project ideas.</p>\n' +
            '<p>Launch tweet: <a href="https://twitter.com/kratijain/status/1529768000953339904?s=20&amp;t=jhOAl4A-Fk3iVVizneynWA">https://twitter.com/kratijain/status/1529768000953339904?s=20&amp;t=jhOAl4A-Fk3iVVizneynWA</a></p>\n' +
            '<p>Telegram group of developers onboarded to Ocean: <a href="https://t.me/+-naTWr7Iak03ODY1">https://t.me/+-naTWr7Iak03ODY1</a></p>\n' +
            '<p>Session recordings: <a href="https://youtube.com/playlist?list=PLR1J-S-3gW7xFfKH4RqUrqGbaJoMj7j8f">https://youtube.com/playlist?list=PLR1J-S-3gW7xFfKH4RqUrqGbaJoMj7j8f</a></p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="grant-deliverables-5" class="anchor" href="#grant-deliverables-5"></a>Grant Deliverables</h1>\n' +
            '<p>6 Week Workshops schedule:</p>\n' +
            '<p>Week 1: Blockchain Programming Fundamentals</p>\n' +
            '<p>Week 2: Deploy your first Solidity Program</p>\n' +
            '<p>Week 3: Ocean Fundamentals using Ocean 101 Academy Course</p>\n' +
            '<p>Week 4: Using Test Ocean on Rinkeby to publish / consume data on Ocean market v4</p>\n' +
            '<p>Week 5: Deep dive into Ocean.js, <a href="http://Ocean.py">Ocean.py</a>, Provider APIs</p>\n' +
            '<p>Week 6: Publish data and consume data using <a href="http://ocean.py">ocean.py</a></p>\n' +
            '<p>2 Week Case Studies + Ideation:</p>\n' +
            '<p>Week 7: Case study of Past Projects built on Ocean</p>\n' +
            '<p>Week 8: Idea generation and Ocean Grant process</p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="project-description-6" class="anchor" href="#project-description-6"></a>Project Description</h1>\n' +
            '<p>Step 1:</p>\n' +
            '<p>As part of “Build on Ocean” we will launch a cohort for training developers for building on ocean using the Ocean Academy course “Ocean 101”. Usually the bootcamp will be 1.5 month long and will cover 3-4 chapters every session. Sessions will be held every saturday starting from 9th April.</p>\n' +
            '<p>Step 2:</p>\n' +
            '<p>We will also create cohort study groups and solve their doubts. This will accelerate their progress and boost the confidence by shorter doubt resolution times.</p>\n' +
            '<p>Step 3:</p>\n' +
            '<p>Once the bootcamp complete is complete after 5 weeks, we will take 2 weeks to perform case studies for any 2 project built on top of ocean ecosystem. This will help them visualize how to compose on top of ocean APIs.</p>\n' +
            '<p>Step 4:</p>\n' +
            '<p>In week 8 we will form groups amongst the cohort and attempt for open bounties. This will engage them to contribute to ocean ecosystem. Mentoring will be provided during the bounties are attempted.</p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="final-product-7" class="anchor" href="#final-product-7"></a>Final Product</h1>\n' +
            '<p>Final product is to increase active development on top of Ocean APIs by training more developers by the end of 1.5 months.</p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="value-add-criteria-8" class="anchor" href="#value-add-criteria-8"></a>Value Add Criteria</h1>\n' +
            '<p>Community Value:</p><p>We will onboard more developers who will then attempt for bug bounties, build projects on Ocean ecosystem</p><p><br></p>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="core-team-9" class="anchor" href="#core-team-9"></a>Core Team</h1>\n' +
            '<p>Krati Jain</p>\n' +
            '<ul>\n' +
            '<li>Role: Full Stack Web3 Developer and Strategy Consultant</li>\n' +
            '<li>Relevant Credentials :</li>\n' +
            '<li>Twitter: <a href="https://twitter.com/kratijain">https://twitter.com/kratijain</a>\n' +
            '</li>\n' +
            '<li>LinkedIn: <a href="https://www.linkedin.com/in/krati-jain-56182460/">https://www.linkedin.com/in/krati-jain-56182460/ </a><a href="https://www.linkedin.com/in/krati-jain-56182460/">4</a>\n' +
            '</li>\n' +
            '<li>GitHub: <a href="https://github.com/jainkrati">https://github.com/jainkrati </a><a href="https://github.com/jainkrati">3</a>\n' +
            '</li>\n' +
            '<li>Background/Experience:</li>\n' +
            '<li>Expert in Solidity, Rust, React, IOS, Golang, Javascript, Flutter</li>\n' +
            '<li>Previously Head of Engineering at QuestBook</li>\n' +
            '<li>Senior Software Engineer at Microsoft</li>\n' +
            '<li>Creator of The Hindustani Techie Podcast, the podcast for Indian software developers, <a href="https://open.spotify.com/show/5orXJa1dTFobUkIKpie3nR?si=b8adca27e16f4377">https://open.spotify.com/show/5orXJa1dTFobUkIKpie3nR?si=b8adca27e16f4377</a>\n' +
            '</li>\n' +
            '</ul>\n' +
            '<hr>\n' +
            '<h1>\n' +
            '<a name="advisors-10" class="anchor" href="#advisors-10"></a>Advisors</h1>\n' +
            '<p>Dr.Prakash</p>\n' +
            '<ul>\n' +
            '<li>Role: Advisor</li>\n' +
            '<li>Relevant Credentials :</li>\n' +
            '<li>Twitter: <a href="https://twitter.com/DrJohnD0e">https://twitter.com/DrJohnD0e</a>\n' +
            '</li>\n' +
            '<li>LinkedIn: <a href="https://www.linkedin.com/in/drprk/">https://www.linkedin.com/in/drprk/</a>\n' +
            '</li>\n' +
            '<li>Github: <a href="https://github.com/drprk" class="inline-onebox">drprk (Dr. Prakash) · GitHub</a> 1</li>\n' +
            '<li>Background/Experience:</li>\n' +
            '<li>Health-Tech Professional Consultant</li>\n' +
            '<li>Medical graduate, Masters in Medical engineering &amp; Health-tech industrial experience</li>\n' +
            '<li>6 years of Industry experience in Medical AI products</li>\n' +
            '<li>Active Ocean DAO participant</li>\n' +
            '<li>Member of Core-Tech WG, Project Guiding WG &amp; Parameters-roadmap WG</li>\n' +
            '</ul>\n' +
            '<hr>\n' +
            '<p><strong>Funding Requested</strong><br>\n' +
            '3000</p>\n' +
            '<hr>\n' +
            '<p><strong>Minimum Funding Requested</strong><br>\n' +
            '3000</p>\n' +
            '<hr>\n' +
            '<p><strong>Wallet Address</strong><br>\n' +
            '0x44AC194359fA44eCe6Cb2E53E8c90547BCCb95a0</p>\n' +
            '<hr>',
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

  head() {
    return createHead(this.$config, this.$i18n, this.projectPost);
  },
});
</script>

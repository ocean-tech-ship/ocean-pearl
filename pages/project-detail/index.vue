<template>
  <div>
    <project-single-header
      :title="project.title"
      :category="project.category"
      :submit="project.submit"
      :logo="project.logo"
    />

    <div class="bg-grey pt-8 pb-1">
      <project-single-details
        :title="project.title"
        :description="project.description"
        :team="project.team"
        :cover="project.cover"
        :socials="project.socials"
      />

      <project-single-dao-proposal
        :round="project.proposal.round"
        :requested="project.proposal.requested"
        :wallet="project.proposal.wallet"
        :rounds="project.proposal.rounds"
      />
    </div>

    <project-single-roi-strategy
      :description="project.roi.description"
      :bang="project.roi.bang"
      :buck="project.roi.buck"
      :chance="project.roi.chance"
      :calculation="project.roi.calculation"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EnumSocial from '@/components/enums/EnumSocial'
import ProjectSingleDaoProposal from '@/components/app/project-detail/ProjectSingleDaoProposal.vue'
import ProjectSingleDetails from '@/components/app/project-detail/ProjectSingleDetails.vue'
import ProjectSingleRoiStrategy from '@/components/app/project-detail/ProjectSingleRoiStrategy.vue'
import ProjectSingleHeader from '@/components/app/project-detail/ProjectSingleHeader.vue'

export default Vue.extend({
  name: 'ProjectDetail',

  components: {
    ProjectSingleHeader,
    ProjectSingleDetails,
    ProjectSingleDaoProposal,
    ProjectSingleRoiStrategy,
  },

  data() {
    return {
      project: {
        title: 'Parsiq',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        category: 'DeFi',
        submit: '17.03.21',
        logo: require('@/assets/images/poseidon-network.png'),
        roi: {
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          bang:
            '1.500.000 $Ocean + 15.000.000 $Ocean + 500.000 $Ocean = 17.000.000 $Ocean',
          buck: '7.500 $OCEAN',
          chance:
            '70% (yes, we are very optimistic on the future data economy in the EU & Germany)',
          calculation: '(17.000.000 / 7.500) * 0,7 = 1586,67',
        },
        proposal: {
          round: 'Round 6',
          requested: '50 000 OCEAN',
          wallet: '0x2da922CBeB06c377741a51dDc85c735429Bc2965',
          rounds: [
            {
              name: 'Round 1',
              funding: '50 000 OCEAN',
            },
            {
              name: 'Round 2',
              funding: '20 000 OCEAN',
            },
            {
              name: 'Round 4',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 5',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 6',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 7',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 8',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 9',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 10',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 11',
              funding: '5000 OCEAN',
            },
            {
              name: 'Round 12',
              funding: '5000 OCEAN',
            },
          ],
        },
        cover: require('~/assets/images/detail/poseidon-cover.png'),
        socials: [
          {
            type: EnumSocial.WEBSITE,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.GITHUB,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.TWITTER,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.LINKEDIN,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.REDDIT,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.FACEBOOK,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.TELEGRAM,
            url: 'https://127.0.0.1',
          },
          {
            type: EnumSocial.DISCORD,
            url: 'https://127.0.0.1',
          },
        ],
        team: [
          {
            name: 'Tom Murray',
            purpose: 'Blockchain Dev',
            socials: [
              {
                type: EnumSocial.LINKEDIN,
                url: 'https://127.0.0.1',
              },
              {
                type: EnumSocial.TWITTER,
                url: 'https://127.0.0.1',
              },
              {
                type: EnumSocial.GITHUB,
                url: 'https://127.0.0.1',
              },
            ],
          },
          {
            name: 'Peter Example',
            purpose: 'Frontend Dev',
            socials: [
              {
                type: EnumSocial.LINKEDIN,
                url: 'https://127.0.0.1',
              },
              {
                type: EnumSocial.TWITTER,
                url: 'https://127.0.0.1',
              },
              {
                type: EnumSocial.GITHUB,
                url: 'https://127.0.0.1',
              },
            ],
          },
          {
            name: 'Steve Müller',
            purpose: 'Backend Dev',
            socials: [
              {
                type: EnumSocial.LINKEDIN,
                url: 'https://127.0.0.1',
              },
              {
                type: EnumSocial.TWITTER,
                url: 'https://127.0.0.1',
              },
              {
                type: EnumSocial.GITHUB,
                url: 'https://127.0.0.1',
              },
            ],
          },
        ],
      },
    }
  },
})
</script>

<style></style>

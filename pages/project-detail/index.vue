<template>
  <div>
    <project-single-header
      :title="project.title"
      :category="project.category"
      :submit="project.createdAt"
      :logo="project.logo"
    />

    <div class="bg-grey pt-8 pb-1 mb-8">
      <project-single-details
        :title="project.title"
        :description="project.description"
        :team="project.team"
        :pictures="project.pictures"
        :social-media="project.socialMedia"
      />

      <project-single-dao-proposal
        :round="project.proposal.round"
        :requested="project.proposal.requested"
        :wallet="project.proposal.wallet"
        :dao-proposals="project.daoProposals"
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
import projectDetailData from '@/test-data/project-detail.json'
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
      project: projectDetailData,
    }
  },
})
</script>

<style></style>

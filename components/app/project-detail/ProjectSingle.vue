<template>
  <div>
    <div class="bg-grey py-8">
      <LandingSectionContainer>
        <div
          class="w-full pt-6 grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col gap-10"
        >
          <div class="shadow rounded-md">
            <img
              class="self-center align-center"
              :src="project.pictures[0]"
              alt="poseidon network cover"
            />
          </div>
          <div>
            <div>
              <p class="text-primary small-text">Description</p>
              <p class="small-text">
                {{ project.description }}
              </p>
            </div>

            <table>
              <project-single-link
                :icon="require('assets/images/social/website.svg')"
                title="website"
                url="https://poseidon.network/"
              />

              <project-single-link
                :icon="require('assets/images/social/discord.svg')"
                title="discord"
                url="https://poseidon.netowkr/"
              />

              <project-single-link
                :icon="require('assets/images/social/facebook.svg')"
                title="facebook"
                url="https://poseidon.network/"
              />

              <project-single-link
                :icon="require('assets/images/social/linkedin.svg')"
                title="linkedin"
                url="https://poseidon.network/"
              />

              <project-single-link
                :icon="require('assets/images/social/github.svg')"
                title="github"
                url="https://poseidon.network/"
              />
            </table>
          </div>
        </div>

        <project-single-dao-proposal
          class="mt-24"
          start="12.03.21"
          finish="18.03.21"
          round="Round 3"
        />
      </LandingSectionContainer>
    </div>

    <LandingSectionContainer>
      <!--
      <h2 class="mt-16 thin-heading">
        {{ $t('project_detail.openPositions.title') }} <span class="text-primary">{{ $t('project_detail.openPositions.titleHighlight') }}</span>
      </h2>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-12">
        <div v-for="job in jobs" :key="job.id">
          <div class="shadow p-6 md:p-12">
            <div class="block md:flex align-center justify-between">
              <div class="flex">
                <div class="mr-3">
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    :src="job.imageURL"
                    :alt="job.title"
                  />
                </div>
                <div>
                  <p class="text-primary p-line-head">{{ job.title }}</p>
                  <p class="small-text">{{ job.position }}</p>
                </div>
              </div>
              <div class="flex align-center mt-4 md:mt-1">
                <p class="small-text text-right">
                  {{ $t('project_detail.openPositions.addedOn') }} <span class="text-primary">{{ job.date }}</span>
                </p>
                <img
                  class="ml-2 h-6 w-6"
                  src="@/assets/images/detail/time.svg"
                  alt="time-date"
                />
              </div>
            </div>
            <div class="mt-5">
              <p class="small-text">
                {{ job.description }}
              </p>
            </div>
            <div class="mt-6 md:mt-8 flex align-center justify-between">
              <div>
                <p class="small-text text-primary mt-1 w-32 md:w-full">
                  {{ job.loan }} a year
                </p>
              </div>
              <div>
              <AppLink to="/">
                <AppButtonStyle
                  :icon="require('@/assets/images/detail/apply-here.svg')"
                  text="apply here"
                />
              </AppLink>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </LandingSectionContainer>
  </div>
</template>

<script>
import AppButtonStyle from '@/components/common/AppButtonStyle'
import AppLink from '@/components/common/AppLink'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import ProjectSingleHeader from '@/components/app/project-detail/ProjectSingleHeader'
import ProjectSingleLink from '@/components/app/project-detail/ProjectSingleLink'
import ProjectSingleDaoProposal from '@/components/app/project-detail/ProjectSingleDaoProposal'

export default {
  name: 'ProjectSingle',

  components: {
    LandingSectionContainer,
    ProjectSingleHeader,
    ProjectSingleLink,
    ProjectSingleDaoProposal,
    AppButtonStyle,
    AppLink,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

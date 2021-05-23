<template>
  <landing-section-container>
    <div class="grid lg:grid-cols-2 gap-12 pb-8 border-b border-primary">
      <div>
        <!-- Description -->
        <p class="text-primary small-text">
          {{ $t('project.description') }}
        </p>
        <p class="small-text">{{ description }}</p>

        <!-- Team -->
        <p class="text-primary small-text mt-6">{{ $t('project.team') }}</p>
        <project-single-details-member
          v-for="(member, index) in team"
          :key="index"
          :member="member"
        />

        <!-- Project Socials (until lg) -->
        <div class="flex justify-between mt-6 md:justify-start lg:hidden">
          <project-single-details-social
            v-for="social in socials"
            :key="social.type"
            :social="social"
          />
        </div>
      </div>

      <div class="order-first lg:order-last">
        <!-- Cover -->
        <img width="100%" :src="cover" alt="project cover" />

        <!-- Project Socials (lg only) -->
        <div class="hidden lg:flex justify-end mt-6">
          <project-single-details-social
            v-for="social in socials"
            :key="social.type"
            class="ml-4"
            :social="social"
          />
        </div>
      </div>
    </div>
  </landing-section-container>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import ProjectSingleDetailsMember from '@/components/app/project-detail/ProjectSingleDetailsMember'
import ProjectSingleDetailsSocial from '~/components/app/project-detail/ProjectSingleDetailsSocial'

export default {
  name: 'ProjectSingleDetails',

  components: {
    LandingSectionContainer,
    ProjectSingleDetailsMember,
    ProjectSingleDetailsSocial,
  },

  props: {
    description: {
      type: String,
      required: true,
    },

    cover: {
      type: String,
      required: true,
    },

    team: {
      // { name, purpose, socials: {type, url} }
      type: Array,
      required: true,
    },

    socials: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>

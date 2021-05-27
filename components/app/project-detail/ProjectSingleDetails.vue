<template>
  <landing-section-container>
    <div class="grid lg:grid-cols-2 gap-12 border-b border-primary">
      <div>
        <!-- Description -->
        <p class="text-primary small-text">
          {{ $t('project.description') }}
        </p>
        <p class="small-text">{{ description }}</p>

        <!-- Team -->
        <div class="mb-10">
          <p class="text-primary small-text mt-6">{{ $t('project.team') }}</p>
          <project-single-details-member
            v-for="(member, index) in team"
            :key="index"
            :member="member"
          />
        </div>

        <!-- Project Socials (until lg) -->
        <div class="flex justify-between my-10 md:justify-start lg:hidden">
          <project-single-details-social
            v-for="(url, type) in socialMedia"
            :key="type"
            class="h-6 w-6 md:mr-6"
            :type="type"
            :url="url"
          />
        </div>
      </div>

      <div class="order-first lg:order-last">
        <!-- Cover -->
        <img
          width="100%"
          :src="pictures.length > 0 && pictures[0]"
          :alt="title + ' ' + $t('general.logo')"
        />

        <!-- Project Socials (lg only) -->
        <div class="hidden lg:flex justify-end my-10">
          <project-single-details-social
            v-for="(url, type) in socialMedia"
            :key="type"
            class="h-6 w-6 ml-6"
            :type="type"
            :url="url"
          />
        </div>
      </div>
    </div>
  </landing-section-container>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import ProjectSingleDetailsMember from '@/components/app/project-detail/ProjectSingleDetailsMember'
import ProjectSingleDetailsSocial from '@/components/app/project-detail/ProjectSingleDetailsSocial'

export default {
  name: 'ProjectSingleDetails',

  components: {
    LandingSectionContainer,
    ProjectSingleDetailsMember,
    ProjectSingleDetailsSocial,
  },

  props: {
    title: {
      type: String,
      required: true,
      default: '/',
    },

    description: {
      type: String,
      required: true,
      default: '/',
    },

    pictures: {
      type: Array,
      required: true,
      default: () => [],
    },

    team: {
      // { name, purpose, socialMedia: {type, url} }
      type: Array,
      required: true,
      default: () => [],
    },

    socialMedia: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>

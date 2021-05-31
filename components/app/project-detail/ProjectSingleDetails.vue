<template>
  <landing-section-container>
    <div class="grid lg:grid-cols-2 gap-12 border-b border-primary">
      <div>
        <!-- Description -->
        <div v-if="!!project.description" class="mb-10">
          <p class="text-primary small-text">
            {{ $t('project.description') }}
          </p>
          <p class="small-text">{{ project.description }}</p>
        </div>

        <!-- Team -->
        <div v-if="!!project.team" class="mb-10">
          <p class="text-primary small-text mt-6">{{ $t('project.team') }}</p>

          <project-single-details-member
            v-for="(member, index) in project.team"
            :key="index"
            :member="member"
          />
        </div>

        <!-- Project Socials (until lg) -->
        <div class="flex justify-between my-10 md:justify-start lg:hidden">
          <project-single-details-social
            v-for="(url, type) in filteredProjectSocialMedia"
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
          :src="coverImage"
          :alt="`${project.title} ${$t('general.logo')}`"
        />

        <!-- Project Socials (lg only) -->
        <div class="hidden lg:flex justify-end my-10">
          <project-single-details-social
            v-for="(url, type) in filteredProjectSocialMedia"
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
import { SocialMedia } from '~/model/SocialMedia'

export default {
  name: 'ProjectSingleDetails',

  components: {
    LandingSectionContainer,
    ProjectSingleDetailsMember,
    ProjectSingleDetailsSocial,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        title: '/',
        description: '/',
        pictures: [],
        team: [],
        socialMedia: [],
      }),
    },
  },

  computed: {
    coverImage() {
      return this.$props.project.pictures.length > 0
        ? this.$props.project.pictures[0]
        : require('@/assets/images/detail/pearl-background.png')
    },

    filteredProjectSocialMedia() {
      const socials = {}

      if (!this.$props.project.socialMedia) {
        return socials
      }

      for (const [type, url] of Object.entries(
        this.$props.project.socialMedia
      )) {
        if (SocialMedia.parse(type) != null) {
          socials[type] = url
        }
      }

      return socials
    },
  },
}
</script>

<style scoped></style>

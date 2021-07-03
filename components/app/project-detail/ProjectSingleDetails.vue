<template>
  <div
    class="grid"
    :class="coverImage ? 'gap-12 lg:grid-cols-2' : 'gap-4 lg:grid-cols-1'"
  >
    <div>
      <!-- Description -->
      <div :class="{ coverImage: 'mb-10' }">
        <div v-if="!!project.description" class="mb-4">
          <p class="text-primary small-text">
            {{ $t('project.description') }}
          </p>
          <p class="small-text">{{ project.description }}</p>
        </div>

        <div v-if="!!oceanPortLink" class="mb-4">
          <app-link :to="oceanPortLink">
            <app-button-style
              class="text-center"
              :icon="require('@/assets/images/detail/read-full.svg')"
              :text="$t('project.readFull')"
            />
          </app-link>
        </div>
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
      <div
        v-if="filteredProjectSocialMedia.length > 0"
        class="flex justify-between my-10 md:justify-start lg:hidden"
      >
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
        v-if="!!coverImage"
        width="100%"
        :src="coverImage"
        :alt="`${project.title} ${$t('general.logo')}`"
      />

      <!-- Project Socials (lg only) -->
      <div
        v-if="filteredProjectSocialMedia.length > 0"
        class="hidden lg:flex justify-end my-10"
      >
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
</template>

<script>
import ProjectSingleDetailsMember from '@/components/app/project-detail/ProjectSingleDetailsMember'
import ProjectSingleDetailsSocial from '@/components/app/project-detail/ProjectSingleDetailsSocial'
import AppButtonStyle from '@/components/common/AppButtonStyle'
import AppLink from '@/components/common/AppLink.vue'
import { SocialMedia } from '~/model/SocialMedia'

export default {
  name: 'ProjectSingleDetails',

  components: {
    ProjectSingleDetailsMember,
    ProjectSingleDetailsSocial,
    AppButtonStyle,
    AppLink,
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
        : null /* require('@/assets/images/detail/pearl-background.png') */
    },

    oceanPortLink() {
      const proposals = this.$props.project.daoProposals
      return !proposals || proposals.length === 0
        ? null
        : proposals[proposals.length - 1].oceanProtocalPortUrl
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

<template>
  <div v-if="!!project.socialMedia" class="flex flex-wrap">
    <project-single-socials-item
      v-for="(url, type) in filteredSocials"
      :key="type"
      class="h-6 w-6 mr-4 xl:mr-6 my-2 xl:my-4"
      :type="type"
      :url="url"
    />
  </div>
</template>

<script>
import { SocialMedia } from '@/models/SocialMedia';
import ProjectSingleSocialsItem from '@/components/app/project-detail/ProjectSingleSocialsItem';

export default {
  name: 'ProjectSingleSocials',

  components: {
    ProjectSingleSocialsItem,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  computed: {
    filteredSocials() {
      const socials = {};

      if (!this.$props.project.socialMedia) {
        return socials;
      }

      for (const [type, url] of Object.entries(
        this.$props.project.socialMedia,
      )) {
        if (SocialMedia.parse(type) != null) {
          socials[type] = url;
        }
      }

      return socials;
    },
  },
};
</script>

<style scoped></style>

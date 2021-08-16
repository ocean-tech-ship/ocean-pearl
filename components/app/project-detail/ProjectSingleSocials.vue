<template>
  <div class="flex justify-between">
    <project-single-socials-item
      v-for="(url, type) in filteredSocials"
      :key="type"
      class="h-6 w-6 md:mr-6"
      :type="type"
      :url="url"
    />
  </div>
</template>

<script>
import { SocialMedia } from '@/model/SocialMedia';
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
        console.log(type, url)
        if (SocialMedia.parse(type) != null) {
          socials[type] = url;
        }
      }

      console.log(socials)
      return socials;
    },
  },
};
</script>

<style scoped></style>

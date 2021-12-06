<template>
  <div class="flex items-center flex-wrap">
    <div class="flex items-center">
      <img
        class="h-16px w-16px mr-2"
        src="@/assets/images/detail/member.svg"
        :alt="$t('project.team') + ' ' + $t('general.icon')"
      />

      <span class="small-text">
        {{ fullMemberTitle }}
      </span>
    </div>

    <div class="flex">
      <span
        v-for="(url, type) in filteredMemberSocialMedia"
        :key="type"
        class="small-text"
      >
        &nbsp;(<a
          class="text-primary small-text"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ getSocialTitle(type) }}</a
        >)
      </span>
    </div>
  </div>
</template>

<script>
import { SocialMedia } from '~/models/SocialMedia';

export default {
  name: 'ProjectSingleTeamMember',

  props: {
    member: {
      type: Object,
      required: true,
      default: () => ({
        firstname: '/',
        lastname: '/',
        purpose: '/',
        socialMedia: [],
      }),
    },
  },

  computed: {
    fullMemberTitle() {
      const member = this.$props.member;
      return `${member.firstname} ${member.lastname}, ${member.purpose}`;
    },

    filteredMemberSocialMedia() {
      const socials = {};

      if (!this.$props.member.socialMedia) {
        return socials;
      }

      for (const [type, url] of Object.entries(
        this.$props.member.socialMedia,
      )) {
        if (SocialMedia.parse(type) != null) {
          socials[type] = url;
        }
      }

      return socials;
    },
  },

  methods: {
    getSocialTitle(type) {
      return SocialMedia.parse(type).Title;
    },
  },
};
</script>

<style scoped></style>

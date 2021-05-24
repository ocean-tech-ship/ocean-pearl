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
        v-for="(url, type) in member.socialMedia"
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
import { SocialMedia } from '~/model/SocialMedia'

export default {
  name: 'ProjectSingleDetailsMember',

  props: {
    member: {
      type: Object,
      required: true,
    },
  },

  computed: {
    fullMemberTitle() {
      return this.$props.member.name + ', ' + this.$props.member.purpose
    },
  },

  methods: {
    getSocialTitle(type) {
      return SocialMedia.parse(type).Title
    },
  },
}
</script>

<style scoped></style>

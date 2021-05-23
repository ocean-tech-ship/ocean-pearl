<template>
  <a :href="social.url" target="_blank">
    <img
      class="h-8 w-8"
      :src="getIcon(social.type)"
      :alt="social.type + $t('general.logo')"
    />
  </a>
</template>

<script>
import EnumSocial from '@/components/enums/EnumSocial'

export default {
  name: 'ProjectSingleDetailsSocial',

  props: {
    social: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getIcon(social) {
      switch (social) {
        case EnumSocial.WEBSITE:
          return require('@/assets/images/social/website.svg')
        case EnumSocial.GITHUB:
          return require('@/assets/images/social/github.svg')
        case EnumSocial.TWITTER:
          return require('@/assets/images/social/twitter.svg')
        case EnumSocial.LINKEDIN:
          return require('@/assets/images/social/linkedin.svg')
        case EnumSocial.REDDIT:
          return require('@/assets/images/social/reddit.svg')
        case EnumSocial.FACEBOOK:
          return require('@/assets/images/social/facebook.svg')
        case EnumSocial.TELEGRAM:
          return require('@/assets/images/social/telegram.svg')
        case EnumSocial.DISCORD:
          return require('@/assets/images/social/discord.svg')
      }
    },
  },
}
</script>

<style scoped></style>

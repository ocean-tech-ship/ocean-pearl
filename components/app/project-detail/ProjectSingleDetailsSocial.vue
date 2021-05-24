<template>
  <a :href="url" target="_blank">
    <img
      class="h-8 w-8"
      :src="getIcon(type)"
      :alt="type + ' ' + $t('general.logo')"
    />
  </a>
</template>

<script>
import { SocialMedia } from '@/model/SocialMedia'

export default {
  name: 'ProjectSingleDetailsSocial',

  props: {
    type: {
      type: String,
      required: true,
      default: '',
    },

    url: {
      type: String,
      required: true,
      default: '/',
    },
  },

  methods: {
    getIcon(type) {
      return SocialMedia.parse(type).Icon
    },
  },
}
</script>

<style scoped></style>

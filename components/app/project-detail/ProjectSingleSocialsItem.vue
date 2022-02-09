<template>
  <app-link-redirect :to="url">
    <app-icon
      :size="32"
      :data="getIcon(type)"
      class="text-primary transition duration-300 ease-in-out hover:scale-125"
    />
  </app-link-redirect>
</template>

<script>
import { SocialMedia } from '@/models/SocialMedia';
import AppIcon from '@/components/common/AppIcon.vue';
import AppLinkRedirect from '@/components/common/AppLinkRedirect';

export default {
  name: 'ProjectSingleSocialsItem',

  components: { AppLinkRedirect, AppIcon },

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
      return SocialMedia.parse(type).Icon;
    },
  },
};
</script>

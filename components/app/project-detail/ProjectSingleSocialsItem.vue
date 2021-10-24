<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <app-icon
      :size="32"
      :data="getIcon(type)"
      class="
        text-primary
        transition
        duration-300
        ease-in-out
        hover:scale-125
      "
    />
  </a>
</template>

<script>
import { SocialMedia } from '@/model/SocialMedia';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'ProjectSingleSocialsItem',

  components: { AppIcon },

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

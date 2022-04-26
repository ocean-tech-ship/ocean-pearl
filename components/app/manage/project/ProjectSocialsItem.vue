<template>
  <div class="flex items-center flex-wrap">
    <app-icon class="text-primary" :size="20" :data="social.Icon" />

    <span class="mx-2 w-20">{{ social.Title }}</span>

    <div class="py-2 flex-grow flex items-center">
      <app-text-input
        class="input-sm flex-grow"
        :placeholder="$t('manage.project.socials.url')"
        :value="url"
        @change="$emit('change', $event)"
      />

      <button
        type="button"
        class="ml-3 btn btn-circle btn-xs btn-warning"
        @click="$emit('delete')"
      >
        <app-icon :data="icons.times" :size="20" />
      </button>
    </div>
  </div>
</template>

<script>
import times from '@iconify/icons-la/times';
import { SocialMedia } from '@/models/SocialMedia';
import AppIcon from '@/components/common/AppIcon';
import AppTextInput from '@/components/common/AppTextInput';

export default {
  name: 'ProjectSocialsItem',

  components: { AppTextInput, AppIcon },

  props: {
    type: {
      type: String,
      required: true,
      default: SocialMedia.WEBSITE.Id,
    },

    url: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    return {
      icons: {
        times,
      },
    };
  },

  computed: {
    social() {
      return SocialMedia.parse(this.type);
    },
  },
};
</script>

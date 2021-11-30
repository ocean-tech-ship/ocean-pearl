<template>
  <div class="flex items-center flex-wrap">
    <app-icon class="text-primary" :size="20" :data="getSocialMedia().Icon" />

    <span class="mx-2 w-20">{{ getSocialMedia().Title }}</span>

    <input
      type="text"
      class="input input-sm flex-grow"
      :placeholder="$t('manage.project.socials.url')"
      :value="url"
      @change="$emit('change', $event.target.value)"
    />

    <button class="pl-2" @click="$emit('delete')">
      <app-icon
        class="text-primary"
        :size="16"
        :data="icons.closeCircle"
        :tooltip="$t('general.remove')"
      />
    </button>
  </div>
</template>

<script>
import closeCircle from '@iconify/icons-mdi/close-circle';
import { SocialMedia } from '@/models/SocialMedia';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'ProjectSocialsItem',

  components: { AppIcon },

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
        closeCircle,
      },
    };
  },

  methods: {
    getSocialMedia() {
      return SocialMedia.parse(this.$props.type);
    },
  },
};
</script>

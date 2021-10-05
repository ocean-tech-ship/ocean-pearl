<template>
  <div class="flex items-center flex-wrap">
    <img
      class="w-4 h-4"
      :src="getSocialMedia().Icon"
      alt=""
    />

    <span class="mx-2 w-20">{{ getSocialMedia().Title }}</span>

    <input
      class="flex-grow rounded shadow p-1"
      type="text"
      :placeholder="$t('manage.project.socials.url')"
      :value="url"
      @change="$emit('change', $event.target.value)"
    />

    <button class="pl-2" @click="$emit('delete')">
      <app-icon
        class="text-primary"
        :size="16"
        :path="mdiCloseCircle"
        :toolip="$t('general.remove')"
      />
    </button>
  </div>
</template>

<script>
import { mdiCloseCircle } from '@mdi/js';
import { SocialMedia } from '@/model/SocialMedia';
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
    }
  },

  data() {
    return {
      mdiCloseCircle,
    };
  },

  methods: {
    getSocialMedia() {
      return SocialMedia.parse(this.$props.type);
    }
  }
}
</script>

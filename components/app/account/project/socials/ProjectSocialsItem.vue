<template>
  <div class="flex items-center">
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
      <span class="mdi mdi-close-circle text-primary" />
    </button>
  </div>
</template>

<script>
import { SocialMedia } from '@/model/SocialMedia';

export default {
  name: 'ProjectSocialsItem',

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

  methods: {
    getSocialMedia() {
      return SocialMedia.parse(this.$props.type);
    }
  }
}
</script>

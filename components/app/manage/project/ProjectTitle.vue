<template>
  <div>
    <h4 class="hidden xl:block">{{ project.title }}</h4>
    <nuxt-link
      class="flex text-primary small-text italic"
      target="_blank"
      :to="`/projects/${project.id}`"
    >
      {{ $t('manage.project.view') }}
      <app-icon class="pl-2" :data="icons.externalLinkAlt" />
    </nuxt-link>
  </div>
</template>

<script>
import externalLinkAlt from '@iconify/icons-la/external-link-alt';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'ProjectTitle',

  components: { AppIcon },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        externalLinkAlt,
      },
    };
  },
};
</script>

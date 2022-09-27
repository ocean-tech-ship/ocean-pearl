<template>
  <app-link-card
    :prefetch="false"
    :to="`/feed/${beautifyProjectId(projectPost)}`"
    :card-class="`card bg-base-200 shadow rounded p-8 h-275px ${
      singleColVariant ? 'md:h-[200px]' : 'md:h-[300px]'
    }`"
  >
    <div :class="{ 'md:min-h-[62px]': !singleColVariant }">
      <p
        class="text-primary leading-snug line-clamp-2"
        :class="{ 'md:line-clamp-1': singleColVariant }"
      >
        {{ projectPost.title }}
      </p>
    </div>

    <div class="mt-5 h-128px" :class="{ 'md:h-[90px]': singleColVariant }">
      <p
        class="small-text line-clamp-3"
        :class="{ 'md:line-clamp-1': singleColVariant }"
      >
        {{ projectPost.oneLiner }}
      </p>
    </div>

    <div class="mt-4">
      <project-post-meta
        :project-post="projectPost"
        :single-col-variant="singleColVariant"
      />
    </div>
  </app-link-card>
</template>

<script>
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import AppLinkCard from '@/components/common/AppLinkCard.vue';
import ProjectPostMeta from '@/components/app/feed/ProjectPostMeta';

export default {
  name: 'ProjectPostCard',

  components: {
    ProjectPostMeta,
    AppLinkCard,
  },

  mixins: [ProjectBeautifyId],

  props: {
    singleColVariant: {
      type: Boolean,
      required: false,
      default: false,
    },
    projectPost: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDistance(timestamp) {
      return this.$dateFns.formatDistanceToNowStrict(new Date(timestamp), {
        addSuffix: true,
        locale: this.$i18n.locale,
      });
    },
  },
};
</script>

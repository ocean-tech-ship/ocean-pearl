<template>
  <div class="flex">
    <project-post-meta-item :project-for-logo="post.project" />
    <div
      class="items-center small-text pl-3 text-primary"
      :class="{ 'md:flex': singleColVariant }"
    >
      <project-post-meta-item :value="post.project.title" :to="to" line-clamp />
      <span
        class="px-3 hidden text-base-content"
        :class="{ 'md:block': singleColVariant }"
        >•</span
      >
      <project-post-meta-item
        class="text-base-content"
        :value="formatDistance(post.createdAt)"
      />
    </div>
  </div>
</template>

<script>
import ProjectPostMetaItem from '@/components/app/feed/ProjectPostMetaItem';

export default {
  name: 'ProjectPostMeta',
  components: { ProjectPostMetaItem },
  props: {
    to: {
      type: [String, null],
      required: false,
      default: null,
    },
    post: {
      type: Object,
      required: true,
    },
    singleColVariant: {
      type: Boolean,
      required: false,
      default: false,
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

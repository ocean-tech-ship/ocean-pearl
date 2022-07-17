<template>
  <div class="flex">
    <project-updates-meta-item :project-for-logo="projectUpdate.project" />
    <div
      class="items-center small-text pl-3 text-primary"
      :class="{ 'md:flex': singleColVariant }"
    >
      <project-updates-meta-item
        :value="projectUpdate.project.title"
        line-clamp
      />
      <span
        class="px-3 hidden opacity-70"
        :class="{ 'md:block': singleColVariant }"
        >•</span
      >
      <project-updates-meta-item
        class="opacity-70"
        :value="formatDistance(projectUpdate.createdAt)"
      />
    </div>
  </div>
</template>

<script>
import ProjectUpdatesMetaItem from '@/components/app/project-updates/ProjectUpdatesMetaItem';

export default {
  name: 'ProjectUpdatesMeta',
  components: { ProjectUpdatesMetaItem },
  props: {
    projectUpdate: {
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

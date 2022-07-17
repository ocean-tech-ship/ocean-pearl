<template>
  <app-link-card
    :prefetch="false"
    :to="`/project-updates/${beautifyProjectId(projectUpdate)}`"
    :card-class="`card bg-base-200 shadow rounded flex p-8 h-275px ${
      !singleColVariant && 'md:h-300px'
    }`"
  >
    <div :class="{ 'md:min-h-[62px]': !singleColVariant }">
      <p class="text-primary leading-snug line-clamp-2">
        {{ projectUpdate.title }}
      </p>
    </div>

    <div class="mt-5 h-128px">
      <p class="small-text line-clamp-3">
        {{ projectUpdate.oneLiner }}
      </p>
    </div>

    <div class="mt-4 flex items-center">
      <app-logo class="mr-4" :project="projectUpdate.project" :size="34" />
      <div class="flex items-start flex-col">
        <p class="small-text text-primary line-clamp-1">
          {{ projectUpdate.project.title }}
        </p>
        <p class="small-text">
          {{ formatDistance(projectUpdate.createdAt) }}
        </p>
      </div>
    </div>
  </app-link-card>
</template>

<script>
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import AppLogo from '@/components/common/AppLogo.vue';
import AppLinkCard from '@/components/common/AppLinkCard.vue';

export default {
  name: 'AppProjectUpdatesCard',

  components: {
    AppLogo,
    AppLinkCard,
  },

  mixins: [ProjectBeautifyId],

  props: {
    singleColVariant: {
      type: Boolean,
      default: false,
    },
    projectUpdate: {
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

<template>
  <app-link-card
    :prefetch="false"
    :to="`/project-updates/${beautifyProjectId(projectUpdate)}`"
    :card-class="`card bg-base-200 shadow rounded p-8 h-275px ${
      singleColVariant ? 'md:h-[220px]' : 'md:h-[300px]'
    }`"
  >
    <div :class="{ 'md:min-h-[62px]': !singleColVariant }">
      <p
        class="text-primary leading-snug line-clamp-2"
        :class="{ 'md:line-clamp-1': singleColVariant }"
      >
        {{ projectUpdate.title }}
      </p>
    </div>

    <div class="mt-5 h-128px">
      <p
        class="small-text line-clamp-3"
        :class="{ 'md:line-clamp-2': singleColVariant }"
      >
        {{ projectUpdate.oneLiner }}
      </p>
    </div>

    <div class="mt-4">
      <project-updates-meta
        :project-update="projectUpdate"
        :single-col-variant="singleColVariant"
      />
    </div>
  </app-link-card>
</template>

<script>
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import AppLinkCard from '@/components/common/AppLinkCard.vue';
import ProjectUpdatesMeta from '~/components/app/project-updates/ProjectUpdatesMeta';

export default {
  name: 'ProjectUpdatesCard',

  components: {
    ProjectUpdatesMeta,
    AppLinkCard,
  },

  mixins: [ProjectBeautifyId],

  props: {
    singleColVariant: {
      type: Boolean,
      required: false,
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

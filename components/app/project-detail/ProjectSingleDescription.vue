<template>
  <div>
    <p class="text-primary small-text">
      {{ $t('project.description') }}
    </p>

    <p class="small-text">{{ project.description }}</p>

    <div v-if="!!oceanProtocolPortUrl" class="mt-4">
      <app-link :to="oceanProtocolPortUrl">
        <app-button-style
          class="text-center"
          :icon="icons.readme"
          :text="$t('project.readFull')"
        />
      </app-link>
    </div>
  </div>
</template>

<script>
import readme from '@iconify/icons-la/readme';
import AppLink from '@/components/common/AppLink.vue';
import AppButtonStyle from '@/components/common/AppButtonStyle.vue';

export default {
  name: 'ProjectSingleDescription',

  components: {
    AppLink,
    AppButtonStyle,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      icons: {
        readme,
      },
    };
  },

  computed: {
    oceanProtocolPortUrl() {
      const proposals = this.$props.project.daoProposals;
      return proposals && proposals.length > 0
        ? proposals[proposals.length - 1].oceanProtocolPortUrl
        : null;
    },
  },
};
</script>

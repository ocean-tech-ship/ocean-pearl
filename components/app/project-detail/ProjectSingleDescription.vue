<template>
  <div>
    <p class="text-primary small-text">
      {{ $t('project.description') }}
    </p>

    <p class="small-text">{{ project.description }}</p>

    <div v-if="!!oceanProtocolPortUrl" class="mt-4">
      <app-button
        as="link"
        :to="oceanProtocolPortUrl"
        class="btn-gradient-primary-variant border-0"
        type="label"
        :icon="icons.readme"
      >
        {{ $t('project.readFull') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import readme from '@iconify/icons-la/readme';
import AppButton from '@/components/common/AppButton';

export default {
  name: 'ProjectSingleDescription',

  components: {
    AppButton,
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

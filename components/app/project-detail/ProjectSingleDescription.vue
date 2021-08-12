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
          :icon="require('@/assets/images/detail/read-full.svg')"
          :text="$t('project.readFull')"
        />
      </app-link>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/common/AppLink';
import AppButtonStyle from '@/components/common/AppButtonStyle';

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

<style scoped></style>

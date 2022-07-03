<template>
  <div class="space-y-2 xl:space-y-4">
    <h4 class="hidden 2xl:block">{{ $t('creator.overview') }}</h4>

    <div class="p-4 2xl:border rounded border-base-content">
      <div class="2xl:hidden">
        <steps-overview-list
          :steps="getChunkedSteps(1)[0]"
          @goTo="$emit('goTo', $event)"
        />
      </div>

      <div class="hidden 2xl:grid grid-cols-3">
        <steps-overview-list
          v-for="(chunk, index) in getChunkedSteps(3)"
          :key="index"
          :steps="chunk"
          @goTo="$emit('goTo', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StepsOverviewList from '@/components/app/manage/creator/proposal/StepsOverviewList';

export default {
  name: 'StepsOverview',
  components: { StepsOverviewList },
  props: {
    steps: {
      type: Array,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },

  methods: {
    getChunkedSteps(chunks) {
      const all = this.steps.map((step, index) => ({ ...step, index }));
      const result = [];
      for (let i = chunks; i > 0; i--) {
        result.push(all.splice(0, Math.ceil(all.length / i)));
      }
      return result;
    },
  },
};
</script>

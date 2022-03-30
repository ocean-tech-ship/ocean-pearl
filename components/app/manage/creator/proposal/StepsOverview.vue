<template>
  <div class="space-y-2 xl:space-y-4">
    <h4>{{ $t('creator.overview') }}</h4>
    <div class="p-4 grid xl:grid-cols-3 border rounded border-base-content">
      <ul
        v-for="(chunks, chunkIndex) in chunkedSteps"
        :key="chunkIndex"
        class="steps steps-vertical"
      >
        <li
          v-for="(chunkedStep, stepIndex) in chunks"
          :key="stepIndex"
          :data-content="chunkedStep.index"
          class="step step-primary my-1"
        >
          <button
            type="button"
            class="btn btn-ghost items-center"
            @click="$emit('click', chunkedStep.index)"
          >
            <div
              class="flex flex-col items-start justify-end normal-case leading-none"
            >
              <span class="text-base font-bold">{{ chunkedStep.title }}</span>
              <span class="small-text font-normal">
                {{ chunkedStep.subtitle }}
              </span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepsOverview',

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

  computed: {
    /* Divides the provided steps into 3 ~equal sized~ chunks */
    chunkedSteps() {
      const all = this.steps.map((step, index) => ({ ...step, index }));
      const result = [];
      for (let i = 3; i > 0; i--) {
        result.push(all.splice(0, Math.ceil(all.length / i)));
      }
      return result;
    },
  },
};
</script>

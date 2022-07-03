<template>
  <div class="grid place-items-center">
    <ul class="steps steps-vertical">
      <li
        v-for="(stepName, index) in steps"
        :key="index"
        :class="{ 'step-primary': index === step }"
        class="step"
      >
        <button
          type="button"
          class="btn btn-ghost normal-case font-normal mx-2"
          @click="$emit('goTo', index)"
        >
          {{ stepName }}
        </button>
      </li>
    </ul>
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
};
</script>

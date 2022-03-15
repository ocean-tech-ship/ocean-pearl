<template>
  <ul class="steps steps-vertical py-8">
    <li
      v-for="(stepName, index) in steps"
      :key="index"
      :class="{ 'step-primary': index === active }"
      class="step"
    >
      <button
        type="button"
        class="btn btn-ghost normal-case font-normal mx-2"
        @click="$emit('click', index)"
      >
        {{ stepName }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StepsOverview',

  props: {
    steps: {
      type: Array,
      required: true,
    },
    active: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

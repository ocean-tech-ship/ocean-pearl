<template>
  <ul class="steps steps-vertical overflow-hidden">
    <li
      v-for="step in steps"
      :key="step.index"
      :data-content="step.index + 1"
      class="step step-primary my-1"
    >
      <button
        type="button"
        class="btn btn-ghost items-center"
        @click="$emit('click', step.index)"
      >
        <div
          class="flex flex-col items-start justify-end normal-case leading-none"
        >
          <span class="text-base font-bold">{{ step.title }}</span>
          <span class="small-text font-normal line-clamp-1 text-left">
            {{ step.subtitle }}
          </span>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StepsOverviewList',

  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

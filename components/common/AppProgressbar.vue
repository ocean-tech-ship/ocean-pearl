<template>
  <div class="relative">
    <div class="overflow-hidden h-2 text-xs flex drop-shadow-lg">
      <div
        :style="`--delayedPercent: ${delayedPercent}%`"
        :class="gradient"
        class="progress-bar flex flex-col text-center whitespace-nowrap text-white justify-center bg-darkgrey rounded"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProgressbar',

  props: {
    percent: {
      type: Number,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      delayedPercent: 0,
    };
  },

  watch: {
    percent(val) {
      this.delayedPercent = val;
    },
  },

  mounted() {
    this.delayedPercent = this.$props.percent;
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  background-color: #e4c465;
  animation: progressBar 2.5s ease-in-out;
  animation-fill-mode: forwards;

  @keyframes progressBar {
    0% {
      width: 0;
    }
    100% {
      width: var(--delayedPercent);
    }
  }
}
</style>

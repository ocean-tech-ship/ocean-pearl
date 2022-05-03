<template>
  <div class="relative">
    <div class="overflow-hidden h-2 text-xs flex drop-shadow-lg">
      <div
        :style="{ width: `${delayedPercent}%` }"
        :class="gradient"
        style="transition: width 1s; transition-delay: 0.3s"
        class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-darkgrey rounded"
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

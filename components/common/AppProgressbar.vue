<template>
  <div class="relative">
    <div class="overflow-hidden h-2 text-xs flex drop-shadow-lg">
      <div
        :style="{ width: `${delayedPercent}%` }"
        :class="{ 'background-primary': !secondary }"
        style="transition: width 1s; transition-delay: 0.3s"
        class="
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-darkgrey
          rounded
        "
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

    secondary: {
      type: Boolean,
      required: false,
      default: false,
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

<style scoped>
.background-primary {
  background: linear-gradient(to bottom right, #7b3070 5%, #d45b8d);
}
</style>

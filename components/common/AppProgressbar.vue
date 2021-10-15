<template>
  <div class="relative">
    <div class="overflow-hidden h-2 text-xs flex drop-shadow-lg">
      <div
        :style="{ width: `${delayedLevel}%` }"
        :class="{ 'background-primary': !secondary }"
        style="transition: width 1s;"
        class="
          flex
          flex-col
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
    level: {
      type: Number,
      required: true,
    },

    secondary: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

  data() {
    return {
      delayedLevel: 0,
    };
  },

  watch: {
    level(val) {
      this.delayedLevel = val;
    }
  },

  mounted() {
    this.delayedLevel = this.$props.level;
  }
};
</script>

<style scoped>
.background-primary {
  background: linear-gradient(to bottom right, #7b3070 5%, #d45b8d);
}
</style>

<template>
  <div class="flex rotate" :style="{ 'animation-duration': `${speed}ms` }">
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <g>
        <ellipse
          ry="4"
          rx="4"
          cy="5"
          cx="5"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AnimatedParticle',

  props: {
    speed: {
      type: Number,
      default: 8000,
    },
  },
};
</script>

<style scoped>
.rotate {
  animation: rotate linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>

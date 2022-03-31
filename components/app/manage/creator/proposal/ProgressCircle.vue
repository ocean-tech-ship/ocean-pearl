<template>
  <div
    class="relative w-64 h-64 rounded-full grid place-items-center bg-[#D98BB3]"
  >
    <!-- inner circle -->
    <div class="w-44 h-44 rounded-full grid place-items-center bg-[#7B3070]">
      <div
        class="w-24 h-24 rounded-full grid place-items-center bg-[#63265A] text-center text-base"
      >
        {{ $t('creator.step.title') }}
        <br />
        {{ step + 1 }}
      </div>
    </div>

    <!-- particles -->
    <div
      v-for="(particle, index) in particles"
      :key="index"
      class="absolute grid place-items-center"
    >
      <animated-particle :speed="particle.speed" :class="particle.class" />
    </div>
  </div>
</template>

<script>
import AnimatedParticle from '@/components/app/manage/creator/proposal/AnimatedParticle';

export default {
  name: 'ProgressCircle',

  components: { AnimatedParticle },

  props: {
    step: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      particles: [
        {
          // OUTER center top
          speed: 20000,
          class: 'h-[16.5rem] items-start justify-end',
        },
        {
          // MIDDLE center right
          speed: 18000,
          class: 'w-56 justify-end',
        },
        {
          // INNER right bottom
          speed: 22000,
          class: 'w-[8.4rem] h-[8.4rem] items-end justify-end',
        },
        {
          // INNER left top
          speed: 22000,
          class: 'w-[8.4rem] h-[8.4rem] items-start justify-start',
        },
        {
          // INNER left bottom
          speed: 22000,
          class: 'w-[8.4rem] h-[8.4rem] items-end justify-start',
        },
        {
          // OUTER right bottom
          speed: 20000,
          class: 'w-48 h-48 items-end justify-end text-[#7B3070]',
        },
        {
          // OUTER left bottom
          speed: 20000,
          class: 'w-48 h-48 items-end justify-start text-[#7B3070]',
        },
        {
          // OUTER left top
          speed: 20000,
          class: 'w-48 h-48 items-start justify-start text-[#7B3070]',
        },
        {
          // MIDDLE center bottom
          speed: 18000,
          class: 'h-56 items-end justify-end text-[#7B3070]',
        },
        {
          // MIDDLE right top
          speed: 18000,
          class: 'w-40 h-40 items-start justify-end text-[#7B3070]',
        },
      ],
    };
  },
};
</script>

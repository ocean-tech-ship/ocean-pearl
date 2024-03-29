<template>
  <NuxtLink
    v-if="isNuxtLink"
    :to="to"
    class="flex items-center mt-6"
    :class="linkClass"
  >
    <p :class="paragraphClass">
      <slot />
    </p>
    <app-icon class="icon" :data="icons.arrowRight" />
  </NuxtLink>
  <a
    v-else
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center mt-6"
    :class="linkClass"
  >
    <p :class="paragraphClass">
      <slot />
    </p>
    <app-icon :data="icons.arrowRight" />
  </a>
</template>

<script>
import arrowRight from '@iconify/icons-la/arrow-right';
import AppIcon from '@/components/common/AppIcon.vue';
import { CategoryMap } from '~/components/constants/CategoryMap.constant';

export default {
  name: 'AppLinkIconRight',

  components: {
    AppIcon,
  },

  props: {
    to: {
      type: String,
      required: true,
      default: () => '',
    },
    linkClass: {
      type: String,
      default: () => 'text-base-content bounce-right',
    },
    paragraphClass: {
      type: String,
      default: () => 'mr-2 text-base-content',
    },
  },

  data() {
    return {
      icons: {
        arrowRight,
      },
      categoryMap: CategoryMap,
    };
  },

  computed: {
    isNuxtLink() {
      if (this.to) {
        return this.to.substring(0, 1) === '/';
      }
      return false;
    },
  },
};
</script>

<style scoped lang="scss">
a {
  max-width: fit-content !important;
}
@keyframes bounce-right-keyframe {
  0%,
  20%,
  50%,
  80%,
  100% {
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
  60% {
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
}
.bounce-right > svg {
  transition: ease-in-out;
}
.bounce-right:hover,
.bounce-right:focus {
  svg {
    -webkit-animation: bounce-right-keyframe 1.5s infinite both;
    animation: bounce-right-keyframe 1.5s infinite both;
  }
}
</style>

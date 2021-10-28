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
    <app-icon :data="icons.arrowRight" />
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
      default: () => 'text-primary bounce-right',
    },
    paragraphClass: {
      type: String,
      default: () => 'mr-2',
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
@keyframes bounce-right {
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
.bounce-right:hover,
.bounce-right:focus {
  div {
    -webkit-animation: bounce-right 2s infinite both;
    animation: bounce-right 2s infinite both;
  }
}
</style>

<template>
  <div
    class="inline-block rounded select-none font-medium py-2 px-6 shadow items-center justify-center z-base"
    :class="[
      secondary ? 'bg-white text-primary' : 'call-to-action text-secondary',
    ]"
  >
    <img
      v-if="icon && typeof icon === 'string'"
      :src="icon"
      :alt="`${$t('general.button')} ${$t('general.icon')}`"
      class="inline-block mr-2"
      width="20"
    />

    <app-icon
      v-if="icon && typeof icon === 'object'"
      :data="icon"
      :size="20"
      :class="textClass"
      class="inline-block align-middle mr-2"
    />

    <span :class="textClass"> {{ text }} </span>
  </div>
</template>

<script>
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'AppButtonStyle',

  components: { AppIcon },

  props: {
    icon: {
      type: [String, Object],
      required: false,
      default: null,
    },

    text: {
      type: String,
      default: '',
    },

    textClass: {
      type: String,
      default: 'text-primary-content',
    },

    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.call-to-action {
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    @apply z-backdrop;
    position: absolute;
    transition: 0.3s ease-in-out;
    content: '';
    height: 100%;
    top: 0;
    bottom: 0;
  }

  &:before {
    width: 100%;
    background: linear-gradient(to right, #bb2c75 1%, #ff98cd);
    right: 0;
  }

  &:after {
    width: 0;
    background: #bb2c75;
    transform: skew(-24deg);
    left: -10%;
  }

  &:hover {
    &:after {
      width: 120%;
    }
  }
}

button:not(.call-to-action):hover {
  transition: ease-in-out 200ms;
  box-shadow: 0 0 0 1px #bb2c75;
}
</style>

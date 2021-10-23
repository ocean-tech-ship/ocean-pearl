<template>
  <div
    class="
      inline-block
      rounded
      select-none
      font-medium
      py-2
      px-6
      shadow
      items-center
      justify-center
    "
    :class="[
      secondary
        ? 'bg-white text-primary border-2 border-primary'
        : 'call-to-action text-secondary',
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
      class="inline-block align-middle mr-2"
    />

    <span> {{ text }} </span>
  </div>
</template>

<script>
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'AppButtonStyle',

  components: { AppIcon },

  props: {
    icon: {
      type: [ String, Object ],
      required: false,
      default: null,
    },

    text: {
      type: String,
      default: '',
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
  background: linear-gradient(to right, #bb2c75 1%, #ff98cd);
}
</style>

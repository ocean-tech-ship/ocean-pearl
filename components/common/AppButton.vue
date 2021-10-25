<template>
  <!-- don't use <button> if you navigate to another page (use AppButtonStyle within AppLink instead for accessibility) -->
  <!-- use this one for forms and interaction with the current page -->
  <button
    type="button"
    class="
      select-none
      rounded
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
    @click="$emit('click', $event)"
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

    <span :class="textClass"> {{ text }} </span>
  </button>
</template>

<script>
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'AppButton',
  components: { AppIcon },
  props: {
    icon: {
      type: [Object, String],
      required: false,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    textClass: {
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

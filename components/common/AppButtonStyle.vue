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
      v-if="icon"
      :src="icon"
      :alt="`${$t('general.button')} ${$t('general.icon')}`"
      class="inline-block mr-2"
      width="20"
    />
    <span :class="textClass"> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: 'AppButtonStyle',

  props: {
    icon: {
      type: String,
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

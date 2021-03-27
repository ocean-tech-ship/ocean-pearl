<template>
  <div class="inline-block select-none">
    <AppLink
      :to="target"
      class="call-to-action text-secondary font-medium py-2 px-6 shadow-md flex items-center justify-center gap-3"
    >
      <img v-if="icon" :src="icon" alt="ocean_pearl" width="20" />
      <span> {{ text }} </span>
    </AppLink>
  </div>
</template>

<script>
import AppLink from '@/components/common/AppLink.vue'

export default {
  name: 'AppButton',
  components: {
    AppLink,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.call-to-action {
  background: linear-gradient(to right, #bb2c75 1%, #ff98cd);
}
</style>

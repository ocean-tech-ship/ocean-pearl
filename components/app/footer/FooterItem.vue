<template>
  <div>
    <nuxt-link v-if="!ext" :to="to">
      <div class="flex items-center justify-center gap-4">
        <img v-if="src" src="" alt="ocean_pearl" class="w-10 h-10" />
        <p class="text-sm">
          <slot name="title" />
        </p>
      </div>
    </nuxt-link>
    <a v-else :href="to" rel="noopener noreferrer" class="table">
      <div class="flex items-center justify-center gap-1">
        <img v-if="src" :src="src" alt="ocean_pearl" class="w-6 h-6" />
        <p class="text-sm">
          <slot name="title" />
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      default: null,
    },
    ext: {
      type: Boolean,
    },
  },
}
</script>

<style></style>

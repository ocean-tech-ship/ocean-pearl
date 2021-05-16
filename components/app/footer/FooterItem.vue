<template>
  <div>
    <nuxt-link v-if="!item.ext" :to="item.route">
      <div class="flex items-center justify-center gap-4">
        <img
          v-if="item.icon"
          :src="item.icon"
          :alt="`${item.name} logo`"
          class="w-10 h-10"
        />
        <p class="text-sm">
          <slot name="title" />
        </p>
      </div>
    </nuxt-link>
    <a v-else :href="item.route" rel="noopener noreferrer" class="table">
      <div class="flex items-center justify-center gap-1">
        <img
          v-if="item.icon"
          :src="item.icon"
          :alt="`${item.name} logo`"
          class="w-6 h-6"
        />
        <p class="text-sm">
          <slot name="title" />
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style></style>

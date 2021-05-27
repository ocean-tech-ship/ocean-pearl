<template>
  <div class="lg:flex lg:gap-10">
    <a class="table mx-auto">
      <div class="lg:flex lg:items-center lg:justify-center lg:gap-2">
        <img
          :src="items[0].icon"
          :alt="items[0].name + ' logo'"
          class="lg:w-6 lg:h-6 w-10 h-10 block mx-auto"
        />
        <p :class="`mt-0 lg:mt-0 font-semibold ${theme} lg:text-sm`">
          {{ items[0].name }}
        </p>
      </div>
    </a>

    <div class="table mx-auto md:mt-0 mt-4">
      <div class="grid md:grid-cols-2 gap-2 md:gap-10">
        <a
          :href="items[1].route"
          rel="noopener noreferrer"
          target="_blank"
          class="table mx-auto"
        >
          <div class="flex items-center justify-center gap-2">
            <img
              :src="items[1].icon"
              :alt="items[1].name + ' logo'"
              class="w-6 h-6"
            />
            <p class="text-sm">{{ items[1].name }}</p>
          </div>
        </a>
        <a
          :href="items[2].route"
          rel="noopener noreferrer"
          target="_blank"
          class="table mx-auto"
        >
          <div class="flex items-center justify-center gap-2">
            <img
              :src="items[2].icon"
              :alt="items[2].name + ' logo'"
              class="w-6 h-6"
            />
            <p class="text-sm">{{ items[2].name }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      default: () => 'text-third',
    },
  },
})
</script>

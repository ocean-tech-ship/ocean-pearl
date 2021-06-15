<template>
  <div class="mx-4 xl:flex">
    <AppLink class="table mx-auto" :to="item.route">
      <div class="lg:flex lg:items-center lg:justify-center lg:mr-10">
        <img
          :src="item.icon"
          :alt="item.name + ' logo'"
          class="lg:w-6 lg:h-6 w-10 h-10 block lg:mr-2 mx-auto"
        />
        <p :class="`mt-0 lg:mt-0 font-semibold ${theme} lg:text-sm`">
          {{ item.name }}
        </p>
      </div>
    </AppLink>

    <div v-if="item.hasSubItem" class="table mx-auto md:mt-0 mt-4">
      <div :class="`grid sm:grid-cols-${item.subItems.length} gap-2 sm:gap-10`">
        <AppLink
          v-for="subItem in item.subItems"
          :key="subItem.id"
          :to="subItem.route"
          class="table mx-auto"
        >
          <div class="flex items-center justify-center">
            <img
              :src="subItem.icon"
              :alt="subItem.name + ' logo'"
              class="w-6 h-6 mr-2"
            />
            <p class="text-sm">{{ subItem.name }}</p>
          </div>
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import AppLink from '~/components/common/AppLink.vue'

export default Vue.extend({
  components: { AppLink },
  props: {
    item: {
      type: Object,
      required: true,
    },
    theme: {
      type: String,
      default: () => 'text-third',
    },
  },
})
</script>

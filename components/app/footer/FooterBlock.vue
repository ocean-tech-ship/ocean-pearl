<template>
  <div class="mx-4 lg:mx-16">
    <AppLink class="table mx-auto" :to="item.route">
      <div class="">
        <img
          :src="item.icon"
          :alt="item.name + ' logo'"
          class="w-10 h-10 block mx-auto"
        />
        <p :class="`font-semibold ${theme}`">
          {{ item.name }}
        </p>
      </div>
    </AppLink>

    <div v-if="item.hasSubItem">
      <div class="sm:flex sm:flex-wrap sm:justify-center">
        <AppLink
          v-for="subItem in item.subItems"
          :key="subItem.id"
          :to="subItem.route"
        >
          <div class="flex items-center justify-center m-2">
            <img
              :src="subItem.icon"
              :alt="subItem.name + ' logo'"
              class="w-6 h-6 mr-1"
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

<template>
  <div class="mx-4 lg:mx-16">
    <app-link class="table mx-auto" :to="item.route">
      <div class="">
        <img
          :src="item.img"
          :alt="`${item.title} ${$t('general.logo')}`"
          class="w-10 h-10 block mx-auto"
        />
        <p :class="`font-semibold ${theme}`">
          {{ item.name }}
        </p>
      </div>
    </app-link>

    <div v-if="item.hasSubItem">
      <div class="sm:flex sm:flex-wrap sm:justify-center">
        <app-link
          v-for="subItem in item.subItems"
          :key="subItem.id"
          :to="subItem.route"
        >
          <div class="flex items-center justify-center m-2">
            <app-icon
              class="text-primary mr-1"
              :data="subItem.icon"
            />
            <p class="text-sm">{{ subItem.name }}</p>
          </div>
        </app-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import AppLink from '@/components/common/AppLink.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default Vue.extend({
  components: { AppIcon, AppLink },

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
});
</script>

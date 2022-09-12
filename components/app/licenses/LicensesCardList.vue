<template>
  <div
    class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
  >
    <div v-for="(license, i) in licenses" :key="i">
      <app-link-card
        :to="license.repository || license.source"
        card-class="shadow bg-base-200 rounded p-8 h-full"
      >
        <div class="flex">
          {{ license.author }}
        </div>
      </app-link-card>
    </div>
  </div>
</template>

<script>
import AppLinkCard from '@/components/common/AppLinkCard.vue';

export default {
  name: 'LicensesCardList',
  components: {
    AppLinkCard,
  },

  props: {
    licenses: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

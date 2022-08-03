<template>
  <section-container>
    <h2>
      Admin
      <span class="text-primary">panel</span>
    </h2>

    <div class="btn-group pt-4">
      <button
        v-for="type in reviewStatusTypes"
        :key="type"
        :class="currentTab === type ? 'btn-primary' : 'btn-secondary'"
        class="btn"
        @click="currentTab = type"
      >
        {{ reviewStatusMap[type] }}
      </button>
    </div>

    <main class="py-8">
      <!-- loading indication -->
      <app-loading-spinner v-if="loading" class="text-primary w-32 h-32" />

      <!-- review items -->
      <div class="space-y-4">
        <review-item v-for="item in items" :key="item" :item="item" expand />
      </div>

      <!-- empty hint -->
      <span v-if="items.length === 0">
        No items in this status category :/
      </span>
    </main>
  </section-container>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import SectionContainer from '@/components/common/SectionContainer';
import createHead from '@/pages/admin/index.head';
import ReviewStatusEnum from '@/enums/ReviewStatus.enum';
import { ReviewStatusMap } from '@/mapper/ReviewStatus.mapper';
import AppLoadingSpinner from '~/components/common/AppLoadingSpinner';
import ReviewItem from '~/components/app/admin/ReviewItem';

export default Vue.extend({
  components: { ReviewItem, AppLoadingSpinner, SectionContainer },

  middleware: 'session',

  data() {
    return {
      reviewStatusTypes: Object.values(ReviewStatusEnum),
      reviewStatusMap: ReviewStatusMap,

      // TODO: see store
      currentTab: ReviewStatusEnum.Pending,
    };
  },

  head() {
    return createHead(this.$config, this.$i18n);
  },

  computed: {
    ...mapState('admin', {
      loading: 'loading',
      items: 'items',
    }),
  },
});
</script>

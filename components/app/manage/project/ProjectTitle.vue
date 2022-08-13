<template>
  <div>
    <div class="flex gap-2">
      <div
        v-for="badge in badges"
        :key="badge.text"
        class="flex items-center rounded px-2 py-1 space-x-1"
        :class="badge.class"
      >
        <app-icon :data="badge.icon" :size="20" />
        <span>{{ badge.text }}</span>
      </div>
    </div>

    <h4 class="hidden xl:block">{{ project.title }}</h4>

    <nuxt-link
      class="flex text-primary small-text italic"
      target="_blank"
      :to="`/projects/${project.id}`"
    >
      {{ $t('manage.project.view') }}
      <app-icon class="pl-2" :data="icons.externalLinkAlt" />
    </nuxt-link>
  </div>
</template>

<script>
import redo from '@iconify/icons-la/redo';
import userShield from '@iconify/icons-la/user-shield';
import externalLinkAlt from '@iconify/icons-la/external-link-alt';
import AppIcon from '@/components/common/AppIcon';
import { OriginTypeMap } from '@/mapper/OriginType.mapper';
import { ReviewStatusMap } from '@/mapper/ReviewStatus.mapper';
import ReviewStatusEnum from '~/enums/ReviewStatus.enum';

export default {
  name: 'ProjectTitle',

  components: { AppIcon },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      originTypeMap: OriginTypeMap,
      reviewStatusMap: ReviewStatusMap,
      icons: {
        redo,
        userShield,
        externalLinkAlt,
      },
    };
  },

  computed: {
    badges() {
      return [
        {
          icon: this.icons.redo,
          class: 'bg-info',
          text: OriginTypeMap[this.project.origin],
        },
        {
          icon: this.icons.userShield,
          class: this.getReviewStatusColor(this.project.reviewStatus),
          text: ReviewStatusMap[this.project.reviewStatus],
        },
      ];
    },
  },

  methods: {
    getReviewStatusColor(status) {
      switch (status) {
        case ReviewStatusEnum.Accepted:
          return 'bg-success';
        case ReviewStatusEnum.Declined:
          return 'bg-error';
        default:
          return 'bg-info';
      }
    },
  },
};
</script>

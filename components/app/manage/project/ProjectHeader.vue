<template>
  <div>
    <div class="flex gap-2 pb-2">
      <span
        v-for="badge in badges"
        :key="badge.text"
        :class="badge.class"
        class="badge badge-lg gap-2"
      >
        <app-icon :data="badge.icon" :size="20" />
        {{ badge.text }}
      </span>
    </div>

    <div class="rounded shadow bg-base-200 p-4 flex">
      <div class="flex-1 block">
        <h4 class="line-clamp-1">{{ project.title }}</h4>

        <nuxt-link
          class="flex text-primary small-text italic"
          target="_blank"
          :to="`/projects/${project.id}`"
        >
          {{ $t('manage.project.view') }}
          <app-icon class="pl-2" :data="icons.externalLinkAlt" />
        </nuxt-link>
      </div>

      <!-- child view navigation -->
      <div class="flex-none self-center px-4 space-x-2">
        <nuxt-link
          v-for="view in views"
          :key="view.path"
          :to="`/manage/projects/${project.id}${view.path}`"
          class="btn"
          exact-active-class="btn-primary"
        >
          {{ view.title }}
        </nuxt-link>
      </div>
    </div>
  </div>

  <!--
  <div class="flex justify-between">
    <div>
      <div class="flex gap-2">
        <div
          v-for="badge in badges"
          :key="badge.text"
          class="flex items-center rounded shadow px-2 py-1 space-x-1"
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

    <div class="tabs">
      <nuxt-link
        v-for="view in views"
        :key="view.path"
        class="tab tab-lifted"
        exact-active-class="tab-active"
        :to="`/manage/projects/${project.id}${view.path}`"
      >
        {{ view.title }}
      </nuxt-link>
    </div>
  </div>
  -->
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
  name: 'ProjectHeader',
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
      views: [
        {
          title: 'General',
          path: '',
        },
        {
          title: 'Admins',
          path: '/admins',
        },
        {
          title: 'Updates',
          path: '/updates',
        },
      ],
    };
  },

  computed: {
    badges() {
      return [
        {
          icon: this.icons.redo,
          class: 'badge-info',
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
          return 'badge-success';
        case ReviewStatusEnum.Declined:
          return 'badge-error';
        default:
          return 'badge-info';
      }
    },
  },
};
</script>


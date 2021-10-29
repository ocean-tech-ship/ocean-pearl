<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.latest_projects.title') }}
      <span class="text-primary">{{
        $t('landing.latest_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.latest_projects.text') }}</p>

    <app-skeleton-card-list
      v-if="projects === null"
      custom-class="grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-5
        gap-4
        mt-10"
      :quantity="5"
    >
      <landing-latest-projects-skeleton-card />
    </app-skeleton-card-list>

    <div
      v-else
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-5
        gap-4
        mt-10
      "
    >
      <div v-for="project in projects" :key="project._id">
        <NuxtLink
          :prefetch="false"
          :to="`/projects/${beautifyProjectId(project)}`"
        >
          <div class="shadow rounded p-4 pb-12 h-275px text-center">
            <app-logo
              class="inline-block mt-3"
              :src="project.logo && project.logo.url"
              :alt="project.title"
              :size="64"
            />
            <div class="mt-4 h-62px">
              <p class="text-primary leading-snug line-clamp-1 break-all">
                {{ project.title }}
              </p>
              <p class="small-text">{{ categoryMap[project.category] }}</p>
            </div>
            <div class="mt-4 flex place-content-center">
              <p class="border rounded small-text text-primary w-32">
                {{ formatDistance(project.createdAt) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <NuxtLink :prefetch="false" to="/projects">
      <div class="flex items-center mt-6 mb-32 text-primary">
        <p class="mr-2">
          {{ $t('landing.latest_projects.link_text') }}
        </p>

        <app-icon :data="icons.arrowRight" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import LandingLatestProjectsSkeletonCard from '@/components/app/landing/LandingLatestProjectsSkeletonCard.vue';
import AppSkeletonCardList from '@/components/common/AppSkeletonCardList.vue';
import ProjectBeautifyId from '~/mixins/ProjectBeautifyId';
import arrowRight from '@iconify/icons-la/arrow-right';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'LandingLatestProjects',

  components: {
    AppIcon,
    AppLogo,
    LandingSectionContainer,
    LandingLatestProjectsSkeletonCard,
    AppSkeletonCardList,
  },

  mixins: [ProjectBeautifyId],

  props: {
    projects: {
      type: [Array, null],
      default: null,
    },
  },

  data() {
    return {
      icons: {
        arrowRight,
      },
      categoryMap: CategoryMap,
    };
  },

  methods: {
    formatDistance(timestamp) {
      return this.$dateFns.formatDistanceToNowStrict(new Date(timestamp), {
        addSuffix: true,
        locale: this.$i18n.locale,
      });
    },
  },
};
</script>

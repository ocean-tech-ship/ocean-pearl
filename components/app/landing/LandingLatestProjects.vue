<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.latest_projects.title') }}
      <span class="text-primary">{{
        $t('landing.latest_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.latest_projects.text') }}</p>

    <div v-if="projects === null" class="mt-10 h-275px">
      {{ $t('general.fetchingLoading') }}
    </div>

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
        <app-link-card
          :prefetch="false"
          :to="`/projects/${beautifyProjectId(project)}`"
          card-class="card shadow rounded p-4 pb-12 h-275px text-center"
        >
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
        </app-link-card>
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
import arrowRight from '@iconify/icons-la/arrow-right';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import AppLogo from '@/components/common/AppLogo.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import AppLinkCard from '~/components/common/AppLinkCard.vue';

export default {
  name: 'LandingDaoProposal',

  components: {
    AppIcon,
    AppLogo,
    AppLinkCard,
    LandingSectionContainer,
  },

  mixins: [ProjectBeautifyId],

  props: {
    projects: {
      type: Array,
      required: true,
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

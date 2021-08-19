<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.featured_dao_projects.title') }}
      <span class="text-primary">{{
        $t('landing.featured_dao_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.featured_dao_projects.text') }}</p>
    <div
      class="w-full pt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        class="
          flex
          items-center
          flex-col
          rounded
          lg:flex-row
          xl:flex-col
          shadow
          rounded-md
          pb-12
          pt-16
          px-4
          col-span-1
          lg:col-span-2
          xl:col-span-1
          row-span-1
          xl:row-span-2
          listed-project-container
        "
      >
        <img
          class="h-225px hidden sm:block"
          src="@/assets/images/landing/yacht.svg"
          alt="kraken"
        />
        <h3 class="content-center text-center sm:my-6 sm:pt-8">
          {{ $t('landing.featured_dao_projects.secondTitle') }}
          <span class="text-primary">
            {{ $t('landing.featured_dao_projects.secondTitleHighlight') }}
          </span>
        </h3>
      </div>

      <div
        v-for="project in projects"
        :key="project.title"
        class="col-span-1 lg:col-span-2"
      >
        <div class="shadow rounded p-8 grid pb-10 overflow-hidden">
          <div class="flex justify-between">
            <NuxtLink
              :prefetch="false"
              :to="`/projects/${beautifyProjectId(project)}`"
            >
              <div class="flex">
                <div class="mr-3">
                  <app-logo
                    class="inline-block h-10 w-10 rounded-full"
                    :src="project.logo"
                    :alt="project.title"
                  />
                </div>
                <div>
                  <p class="text-primary leading-snug line-clamp-1">
                    {{ project.title }}
                  </p>

                  <p class="small-text text-primary">
                    {{ categoryMap[project.category] }}
                  </p>
                </div>
              </div>
            </NuxtLink>
            <div class="space-x-3 flex hidden md:flex">
              <project-single-socials :project="project" />
            </div>
          </div>
          <div>
            <p class="small-text mt-4 line-clamp-3">
              {{ project.description }}
            </p>
          </div>
          <div class="flex justify-between items-center mt-8 flex-wrap">
            <div>
              <div class="flex items-center flex-wrap">
                <img
                  class="mr-2"
                  src="@/assets/images/icons/transaction.svg"
                  alt="funding-finish"
                />
                <p class="small-text text-primary mr-4">
                  {{ $t('landing.featured_dao_projects.requestedAmount') }}
                </p>
              </div>

              <p class="small-text">
                {{
                  $t('general.ocean', {
                    ocean: project.featuredDaoProposal[0].requestedGrantToken,
                  })
                }}
              </p>
            </div>

            <NuxtLink :prefetch="false" :to="`/projects/${project._id}`">
              <div class="flex items-center mt-12 sm:m-0">
                <p class="small-text mr-2 text-primary">
                  {{ $t('landing.featured_dao_projects.checkOut') }}
                </p>
                <img
                  src="@/assets/images/landing/check-out.svg"
                  :alt="`${$t('general.button')} ${$t('general.logo')}`"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/dao-projects">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">
          {{ $t('landing.featured_dao_projects.link_text') }}
        </p>
        <img
          src="@/assets/images/landing/check-out.svg"
          :alt="`${$t('general.button')} ${$t('general.logo')}`"
        />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import ProjectSingleSocials from '@/components/app/project-detail/ProjectSingleSocials';
import LandingSectionContainer from './LandingSectionContainer';
import AppLogo from '@/components/common/AppLogo';
import ProjectBeautifyId from '~/mixins/ProjectBeautifyId';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';

export default {
  name: 'LandingFeaturedProjectSection',

  components: {
    AppLogo,
    LandingSectionContainer,
    ProjectSingleSocials,
  },

  mixins: [ProjectBeautifyId],

  props: {
    projects: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      categoryMap: CategoryMap,
    };
  },
};
</script>

<style scoped>
.listed-project-container {
  background: linear-gradient(
    180deg,
    #e183b3 0%,
    rgba(255, 255, 255, 0.77) 100%
  );
}
</style>

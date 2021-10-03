<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      2xl:grid-cols-4
      gap-4
      mt-12
    "
  >
    <div v-for="project in projects" :key="project.id">
      <NuxtLink
        :prefetch="false"
        :to="`/projects/${beautifyProjectId(project)}`"
      >
        <div class="card shadow rounded p-2 pb-8 text-center">
          <div class="mt-3">
            <app-logo
              class="inline-block"
              :src="project.logo && project.logo.url"
              :alt="project.title"
              :size="64"
            />
          </div>
          <div class="mt-4">
            <p class="text-primary leading-snug line-clamp-1 break-all">
              {{ project.title }}
            </p>
            <p class="small-text text-quad">
              {{ categoryMap[project.category] }}
            </p>
          </div>
          <div class="my-3 h-78px px-3 flex place-content-center">
            <p class="small-text line-clamp-3">
              {{ project.description }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/common/AppLogo.vue';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';

export default {
  name: 'ProjectsList',
  components: {
    AppLogo,
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

<style scoped lang="scss">
@media screen and (min-width: 760px) {
  .card:hover {
    transition: 100ms ease-in;
    transform: translateY(-6px);
  }
}
</style>

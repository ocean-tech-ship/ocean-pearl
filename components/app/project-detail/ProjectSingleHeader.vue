<template>
  <div class="relative grid gap-8 grid-cols-1 md:grid-cols-2">
    <div class="flex items-center">
      <app-logo
        class="mr-4 md:mx-4 md:ml-0 inline-block"
        :project="project"
        :size="64"
      />

      <div class="">
        <h3 class="text-primary leading-tight">{{ project.title }}</h3>
        <app-link :to="targetCategoryLink(project.category)">
          <p class="leading-tight">{{ categoryMap[project.category] }}</p>
        </app-link>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <app-icon class="text-primary mr-4" :size="40" :data="icons.rocket" />

        <div>
          <p class="small-text">{{ $t('project.added') }}</p>
          <p class="text-primary small-text">
            {{ formatDate(project.createdAt) }}
          </p>
        </div>
      </div>

      <app-settings-dropdown
        :icon-size="40"
        :project-title="project.title"
        :project-link="`/projects/${beautifyProjectId(project)}`"
      />
    </div>
  </div>
</template>

<script>
import rocket from '@iconify/icons-la/rocket';
import copy from '@iconify/icons-la/copy';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppLogo from '@/components/common/AppLogo.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import AppSettingsDropdown from '@/components/common/AppSettingsDropdown.vue';
import AppLink from '@/components/common/AppLink';
import ProjectBeautifyId from '@/mixins/ProjectBeautifyId';

export default {
  name: 'ProjectSingleHeader',

  components: {
    AppLink,
    AppIcon,
    AppLogo,
    AppSettingsDropdown,
  },

  mixins: [ProjectBeautifyId],

  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        logo: '',
        title: '/',
        category: '/',
        createdAt: -1,
      }),
    },
  },

  data() {
    return {
      icons: {
        rocket,
        copy,
      },
      copyButtonTitle: 'project.copy',
      categoryMap: CategoryMap,
    };
  },

  methods: {
    targetCategoryLink(category) {
      return `/projects?category=${category}`;
    },

    formatDate(timestamp) {
      return this.$dateFns.format(new Date(timestamp), 'PPP', {
        locale: this.$i18n.locale,
      });
    },

    copyProjectLink() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.copyButtonTitle = 'project.copied';
        setTimeout(() => (this.copyButtonTitle = 'project.copy'), 1500);
      });
    },
  },
};
</script>

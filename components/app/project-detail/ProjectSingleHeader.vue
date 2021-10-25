<template>
  <div class="flex flex-wrap items-center justify-center md:justify-between">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-center">
      <app-logo
        class="mx-4 md:ml-0 inline-block"
        :src="project.logo && project.logo.url"
        :alt="project.title"
        :size="64"
      />

      <div class="text-center md:text-left">
        <h3 class="text-primary leading-tight">{{ project.title }}</h3>
        <p class="leading-tight">{{ categoryMap[project.category] }}</p>
      </div>
    </div>

    <div class="flex items-center my-8 mx-8 md:my-4">
      <app-icon class="text-primary mr-4" :size="40" :data="icons.rocket" />

      <div>
        <p class="small-text">{{ $t('project.added') }}</p>
        <p class="text-primary small-text">
          {{ formatDate(project.createdAt) }}
        </p>
      </div>
    </div>

    <app-button
      class="hidden xl:block w-225px"
      :icon="icons.copy"
      :text="$t(copyButtonTitle)"
      secondary
      @click="copyProjectLink()"
    />
  </div>
</template>

<script>
import rocket from '@iconify/icons-la/rocket';
import copy from '@iconify/icons-la/copy';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';
import AppButton from '@/components/common/AppButton.vue';
import AppLogo from '@/components/common/AppLogo.vue';
import AppIcon from '@/components/common/AppIcon.vue'

export default {
  name: 'ProjectSingleHeader',

  components: {
    AppIcon,
    AppLogo,
    AppButton,
  },

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

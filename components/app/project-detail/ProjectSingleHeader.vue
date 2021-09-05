<template>
  <div class="flex flex-wrap items-center justify-center md:justify-between">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-center">
      <app-logo
        class="mx-4 md:ml-0 inline-block"
        :src="project.logo?.url"
        :alt="project.title"
        :size="64"
      />

      <div class="text-center md:text-left">
        <h3 class="text-primary leading-tight">{{ project.title }}</h3>
        <p class="leading-tight">{{ categoryMap[project.category] }}</p>
      </div>
    </div>

    <div class="flex items-center my-8 mx-8 md:my-4">
      <img
        class="h-10 w-10 mr-4"
        :src="require('@/assets/images/icons/rocket.svg')"
        :alt="`${$t('project.added')} ${$t('general.icon')}`"
      />

      <div>
        <p class="small-text">{{ $t('project.added') }}</p>
        <p class="text-primary small-text">
          {{ formatDate(project.createdAt) }}
        </p>
      </div>
    </div>

    <app-button
      class="hidden xl:block w-225px"
      :icon="require('@/assets/images/detail/copy-primary.svg')"
      :text="$t(copyButtonTitle)"
      secondary
      @click="copyProjectLink()"
    />
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton';
import AppLogo from '@/components/common/AppLogo';
import { CategoryMap } from '@/components/constants/CategoryMap.constant';

export default {
  name: 'ProjectSingleHeader',

  components: {
    AppLogo,
    AppButton,
  },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        logo: require('@/assets/images/detail/pearl-background.png'),
        title: '/',
        category: '/',
        createdAt: -1,
      }),
    },
  },

  data() {
    return {
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

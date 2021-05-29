<template>
  <LandingSectionContainer>
    <div class="flex justify-between content-center">
      <div class="flex">
        <div class="mr-4 w-12 h-12">
          <img
            class="inline-block rounded-full ring-2 ring-white"
            :src="project.logo"
            :alt="project.title + ' ' + $t('general.logo')"
          />
        </div>

        <div class="mt-2">
          <h1 class="text-primary thin-heading">{{ project.title }}</h1>
          <p class="mt-2">{{ project.category }}</p>
        </div>
      </div>
      <div class="flex">
        <div class="mr-4">
          <img
            class="inline-block h-14 w-14 rounded-full ring-2 ring-white"
            src="@/assets/images/icons/rocket.svg"
            :alt="$t('project.added') + ' ' + $t('general.icon')"
          />
        </div>
        <div>
          <p class="text-primary small-text p-line-head">
            {{ $t('project.added') }}
          </p>
          <p class="small-text">
            {{ formatDate(project.createdAt) }}
          </p>
        </div>
      </div>
      <div class="hidden md:block">
        <AppButton
          :icon="require('@/assets/images/detail/copy-link.svg')"
          :text="$t('project.copy')"
        />
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import AppButton from '@/components/common/AppButton'
import LandingSectionContainer from '../landing/LandingSectionContainer'

export default {
  name: 'ProjectSingleHeader',
  components: {
    AppButton,
    LandingSectionContainer,
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

  methods: {
    formatDate(timestamp) {
      return this.$dateFns.format(new Date(timestamp), 'PPP', {
        locale: this.$i18n.locale,
      })
    },
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

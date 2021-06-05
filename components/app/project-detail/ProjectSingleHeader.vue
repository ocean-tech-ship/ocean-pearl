<template>
  <LandingSectionContainer>
    <div class="flex flex-wrap items-center justify-between xl:flex-no-wrap">
      <div class="flex flex-wrap md:flex-no-wrap items-center justify-center">
        <app-logo
          class="w-16 h-16 mx-4 inline-block rounded-full ring-2 ring-white"
          :src="project.logo"
          :alt="project.title"
        />

        <div class="text-center md:text-left">
          <h3 class="text-primary">{{ project.title }}</h3>
          <p class="leading-none">{{ project.category }}</p>
        </div>
      </div>

      <div class="flex my-4">
        <img
          class="h-14 w-14 mr-4"
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
        :icon="require('@/assets/images/detail/copy-link.svg')"
        :text="$t(copyButtonTitle)"
        @click="copyProjectLink()"
      />
    </div>
  </LandingSectionContainer>
</template>

<script>
import AppButton from '@/components/common/AppButton'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import AppLogo from '@/components/common/AppLogo'

export default {
  name: 'ProjectSingleHeader',
  components: {
    AppLogo,
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

  data() {
    return {
      copyButtonTitle: 'project.copy',
    }
  },

  methods: {
    formatDate(timestamp) {
      return this.$dateFns.format(new Date(timestamp), 'PPP', {
        locale: this.$i18n.locale,
      })
    },

    copyProjectLink() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.copyButtonTitle = 'project.copied'
        setTimeout(() => (this.copyButtonTitle = 'project.copy'), 1500)
      })
    },
  },
}
</script>

<style scoped></style>

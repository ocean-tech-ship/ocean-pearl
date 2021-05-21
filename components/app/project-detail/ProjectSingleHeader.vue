<template>
  <LandingSectionContainer>
    <div class="flex justify-between content-center">
      <div class="flex items">
        <div class="mr-4 w-12 h-12">
          <img
            class="inline-block rounded-full ring-2 ring-white"
            :src="logo"
            :alt="$t('general.logo') + ' ' + title"
          />
        </div>

        <div class="mt-2">
          <h1 class="text-primary thin-heading" v-text="title" />
          <p class="mt-2" v-text="category" />
        </div>
      </div>
      <div class="flex">
        <div class="mr-4">
          <img
            class="inline-block h-14 w-14 rounded-full ring-2 ring-white"
            src="@/assets/images/icons/rocket.svg"
            :alt="$t('general.icon') + ' rocket'"
          />
        </div>
        <div>
          <p
            class="text-primary small-text p-line-head"
            v-text="$t('project.added')"
          />
          <p class="small-text" v-text="submit" />
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
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    submit: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

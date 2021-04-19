<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.featured_projects.title') }}
      <span class="text-primary">{{
        $t('landing.featured_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.featured_projects.text') }}</p>
    <div
      class="w-full pt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        class="flex items-center flex-col lg:flex-row xl:flex-col shadow rounded-md pb-12 pt-16 px-4 col-span-1 lg:col-span-2 xl:col-span-1 row-span-1 xl:row-span-2 listed-project-container"
      >
        <img
          class="max-h-260px lg:max-h-none hidden sm:block"
          src="@/assets/images/illustrations/listed-illustration.svg"
          alt="kraken"
        />
        <h3 class="content-center text-center sm:my-12 sm:pt-8">
          {{ $t('landing.featured_projects.secondTitle') }}
          <span class="text-primary">{{
            $t('landing.featured_projects.secondTitleHighlight')
          }}</span>
        </h3>
      </div>

      <div v-for="project in projects" :key="project.title">
        <NuxtLink to="/project-overview">
          <div class="shadow p-8 grid h-full overflow-hidden">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="project.imageURL"
                  :alt="project.title"
                />
              </div>
              <div>
                <p class="text-primary thin-heading">{{ project.title }}</p>
                <p class="small-text mt-2">{{ project.category }}</p>
              </div>
            </div>
            <div>
              <p class="small-text mt-4">
                {{ project.description }}
              </p>
            </div>
            <div class="justify-self-end flex items-center mt-8">
              <p class="small-text mr-2 text-primary">
                {{ $t('landing.featured_projects.checkOut') }}
              </p>
              <img src="@/assets/images/icons/check-out.png" alt="" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/project-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">
          {{ $t('landing.featured_projects.link_text') }}
        </p>
        <img src="@/assets/images/icons/check-out.png" alt="" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue'
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingFeaturedProjectSection',

  components: {
    AppButton,
    LandingSectionContainer,
  },
  data() {
    return {
      projects: [
        {
          title: 'Parsiq',
          category: 'LoFi',
          description:
            'This is a nice project. It does so nice things. And this so leave some love and like this description.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon-network.png'),
        },
        {
          title: 'Parsiq',
          category: 'LoFi',
          description:
            'This is a nice project. It does so nice things. And this so leave some love and like this description.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon-network.png'),
        },
        {
          title: 'Parsiq',
          category: 'LoFi',
          description:
            'This is a nice project. It does so nice things. And this so leave some love and like this description.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon-network.png'),
        },
        {
          title: 'Parsiq',
          category: 'LoFi',
          description:
            'This is a nice project. It does so nice things. And this so leave some love and like this description.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon-network.png'),
        },
      ],
    }
  },
}
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

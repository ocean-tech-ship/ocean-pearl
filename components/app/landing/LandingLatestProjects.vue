<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.latest_projects.title') }}
      <span class="text-primary">{{
        $t('landing.latest_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.latest_projects.text') }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mt-10"
    >
      <div v-for="project in projects" :key="project.title">
        <NuxtLink :prefetch="false" to="/project-overview">
          <div class="shadow rounded p-4 pb-12 h-275px text-center">
            <div class="mt-3">
              <img
                class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                :src="project.imageURL"
                :alt="project.title"
              />
            </div>
            <div class="mt-4">
              <p class="text-primary p-line-head">
                {{ project.title | truncate(14) }}
              </p>
              <p class="small-text">{{ project.category }}</p>
            </div>
            <div class="mt-4 flex place-content-center">
              <p class="border small-text text-primary w-32">
                {{ formatDistance(project.createdAt) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink :prefetch="false" to="/project-overview">
      <div class="flex items-center mt-6 mb-32">
        <p class="mr-2 text-primary">
          {{ $t('landing.latest_projects.link_text') }}
        </p>
        <img src="@/assets/images/landing/check-out.svg" alt="arrow" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingDaoProposal',

  components: {
    LandingSectionContainer,
  },
  data() {
    return {
      projects: [
        {
          title: 'GreenSquareExample',
          category: 'LoFi',
          createdAt: '2021-05-08T21:39:46.378Z',
          projectTarget: '',
          imageURL: require('@/assets/images/poseidon-network.png'),
        },
        {
          title: 'Poseidon',
          category: 'LoFi',
          createdAt: Date.now(),
          projectTarget: '',
          imageURL: require('@/assets/images/poseidon.png'),
        },
        {
          title: 'Jellyfish',
          category: 'LoFi',
          createdAt: '2021-05-27T21:39:46.378Z',
          projectTarget: '',
          imageURL: require('@/assets/images/jellyfish.png'),
        },
        {
          title: 'Pearl',
          category: 'LoFi',
          createdAt: '2021-04-08T21:39:46.378Z',
          projectTarget: '',
          imageURL: require('@/assets/images/logo/pearl-logo.svg'),
        },
        {
          title: 'Poseidon',
          category: 'LoFi',
          createdAt: '2021-05-20T21:39:46.378Z',
          projectTarget: '',
          imageURL: require('@/assets/images/poseidon.png'),
        },
      ],
    }
  },

  methods: {
    formatDistance(timestamp) {
      return this.$dateFns.formatDistanceToNowStrict(new Date(timestamp), {
        addSuffix: true,
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

<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.featured_dao_projects.title') }}
      <span class="text-primary">{{
        $t('landing.featured_dao_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.featured_dao_projects.text') }}</p>
    <div class="w-full pt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <div
        class="flex items-center flex-col rounded lg:flex-row xl:flex-col shadow rounded-md pb-12 pt-16 px-4 col-span-1 lg:col-span-2 xl:col-span-1 row-span-1 xl:row-span-2 listed-project-container">
        <img class="h-225px hidden sm:block" src="@/assets/images/landing/yacht.svg" alt="kraken" />
        <h3 class="content-center text-center sm:my-12 sm:pt-8">
          {{ $t('landing.featured_dao_projects.secondTitle') }}
          <span class="text-primary">
           {{ $t('landing.featured_dao_projects.secondTitleHighlight') }}
          </span>
        </h3>
      </div>

      <div v-for="project in projects" :key="project.title" class="col-span-2">
        <div class="shadow rounded p-8 grid pb-10 overflow-hidden">
          <div class="flex justify-between">
            <NuxtLink :prefetch="false" to="/project-detail">
            <div class="flex">
              <div class="mr-3">
                <img 
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white" 
                  :src="project.imageURL"
                  :alt="project.title" 
                  />
              </div>
              <div>
                <p class="text-primary p-line-head truncate">{{ project.title | truncate(18) }}</p>
              </div>
            </div>
           </NuxtLink>
            <div class="space-x-3 flex hidden md:flex">
              <project-single-details-social 
                v-for="(url, type) in project.socialMedia" 
                :key="type" 
                class="h-5 w-5 "
                :type="type" 
                :url="url" />
            </div>
          </div>
          <p class="small-text text-primary">{{ project.category }}</p>
          <div>
            <p class="small-text mt-4">
              {{ project.description | truncate(180)}}
            </p>
          </div>
          <div class="flex justify-between items-center mt-8 flex-wrap">
            <div class="flex items-center flex-wrap">
              <img class="mr-2" src="@/assets/images/icons/transaction.svg" alt="funding-finish">
              <p class="small-text text-primary mr-4">
                {{ $t('landing.featured_dao_projects.requestedAmount') }}
              </p>
              <p class="small-text">
                {{ project.fundAmount }}
                {{ $t('landing.featured_dao_projects.ocean') }}
              </p>
            </div>

            <NuxtLink :prefetch="false" to="/project-detail">
              <div class="flex items-center mt-12 sm:m-0 ">
                <p class="small-text mr-2 text-primary">
                  {{ $t('landing.featured_dao_projects.checkOut') }}
                </p>
                <img src="@/assets/images/landing/check-out.svg" alt="" />
              </div>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
    <NuxtLink to="/dao-project-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">
          {{ $t('landing.featured_dao_projects.link_text') }}
        </p>
        <img src="@/assets/images/landing/check-out.svg" alt="" />
      </div>
    </NuxtLink>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from './LandingSectionContainer'
  import ProjectSingleDetailsSocial from '@/components/app/project-detail/ProjectSingleDetailsSocial'

  export default {
    name: 'LandingFeaturedProjectSection',

    components: {
      LandingSectionContainer,
      ProjectSingleDetailsSocial
    },
    data() {
      return {
        props: {
          socialMedia: {
            type: Object,
            required: true,
            default: () => {},
          },
        },
        projects: [{
            title: 'Poseidon Network',
            category: 'DeFi',
            description: 'This is a nice project and this so leave some love and like this description. so leave some love and like this description. It does so nice things. And this so leave some love and like this description.',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon.png'),
            fundAmount: '20000',
            socialMedia: {
              website: "https://oceanpearl.io/",
              facebook: "https://www.facebook.com/",
              discord: "https://discord.gg/eswPj8QZRH",
              telegram: "https://poseidon.network/",
              twitter: "https://twitter.com/oceanpearlio"
            }
          },
          {
            title: 'Jellyfish',
            category: 'LoFi',
            description: 'This is a nice project and this so leave some love and like this description. so leave some love and like this description. It does so nice things. And this so leave some love and like this description.',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            fundAmount: '10000',
            socialMedia: {
              website: "https://oceanpearl.io/",
              facebook: "https://www.facebook.com/",
              discord: "https://discord.gg/eswPj8QZRH",
              telegram: "https://poseidon.network/",
              twitter: "https://twitter.com/oceanpearlio"
            }
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .listed-project-container {
    background: linear-gradient(180deg,
        #e183b3 0%,
        rgba(255, 255, 255, 0.77) 100%);
  }
</style>

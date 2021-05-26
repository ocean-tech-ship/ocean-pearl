<template>
  <LandingSectionContainer class="my-32">
    <h2>
      {{ $t('landing.featured_dao_projects.title') }}
      <span class="text-primary">{{
        $t('landing.featured_dao_projects.titleHighlight')
      }}</span>
    </h2>
    <p>{{ $t('landing.featured_dao_projects.text') }}</p>
    <div
      class="w-full pt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        class="flex items-center flex-col rounded lg:flex-row xl:flex-col shadow rounded-md pb-12 pt-16 px-4 col-span-1 lg:col-span-2 xl:col-span-1 row-span-1 xl:row-span-2 listed-project-container"
      >
        <img
          class="h-275px hidden sm:block"
          src="@/assets/images/landing/yacht.svg"
          alt="kraken"
        />
        <h3 class="content-center text-center sm:my-12 sm:pt-8">
          Funding
          <span class="text-primary"> 
            Round 6
          </span>
        </h3>
      </div>

      <div v-for="project in projects" :key="project.title" class="col-span-2">

          <div class="shadow rounded p-8 grid h-275px overflow-hidden">
            <div class="flex justify-between">
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
            
           <table class="flex">
              <project-single-link
                :icon="require('assets/images/social/linkedIn.svg')"
                :alt="project.title"
                :url="project.social.website"
              />
              <project-single-link
                :icon="require('assets/images/social/twitter.svg')"
                :alt="project.title" 
                :url="project.social.twitter"
              />
              <project-single-link
                :icon="require('assets/images/social/discord.svg')"
                :alt="project.title"
                :url="project.social.discord"
              />
              <project-single-link
                :icon="require('assets/images/social/telegram.svg')"
                :alt="project.title"
                :url="project.social.telegram"
              />  
              <project-single-link
                :icon="require('assets/images/social/website.svg')"
                :alt="project.title"
                :url="project.social.website"
              />                                          
          </table>

            </div>
            <p class="small-text text-primary">{{ project.category }}</p>
            <div>
              <p class="small-text mt-4">
                {{ project.description | truncate(180)}}
              </p>
            </div>
            <div class="flex justify-between items-center mt-8">
            <div class="flex items-center">
              <img class="mr-2" src="@/assets/images/icons/transaction.svg" alt="funding-finish">
              <p class="small-text text-primary">
                {{ $t('landing.featured_dao_projects.requestedAmount') }}
              </p>
              <p class="ml-4 small-text">
                {{ project.fundAmount }} 
                {{ $t('landing.featured_dao_projects.ocean') }}
              </p>
            </div>
            
          <NuxtLink :prefetch="false" to="/project-overview">
            <div class="flex items-center">
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
import ProjectSingleLink from '@/components/app/project-detail/ProjectSingleLink'

export default {
  name: 'LandingFeaturedProjectSection', 

  components: {
    LandingSectionContainer,
    ProjectSingleLink
  },
  data() {
    return {
      projects: [
        {
          title: 'Poseidon Network',
          category: 'DeFi',
          description: 'This is a nice project and this so leave some love and like this description. so leave some love and like this description. It does so nice things. And this so leave some love and like this description.',
          projectTarget: '',
          imageURL: require('@/assets/images/poseidon.png'),
          fundAmount: '20000',
          social: [
            { website: "https://poseidon.network/" },
            { facebook: "https://poseidon.network/" },
            { discord: "https://poseidon.network/" },
            { telegram: "https://poseidon.network/" },
            { twitter: "https://poseidon.network/" }
          ]
        },
        {
          title: 'Jellyfish',
          category: 'LoFi',
          description: 'This is a nice project and this so leave some love and like this description. so leave some love and like this description. It does so nice things. And this so leave some love and like this description.',
          projectTarget: '',
          imageURL: require('@/assets/images/jellyfish.png'),
          fundAmount: '10000',
          social: [
            { website: "https://poseidon.network/" },
            { facebook: "https://poseidon.network/" },
            { discord: "https://poseidon.network/" },
            { telegram: "https://poseidon.network/" },
            { twitter: "https://poseidon.network/" }
          ]

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

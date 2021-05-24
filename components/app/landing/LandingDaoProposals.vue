<template>
  <LandingSectionContainer class="my-32">
    <h2>{{ $t('landing.dao_proposals.title') }} <span class="text-primary"> {{ $t('landing.dao_proposals.titleHighlight') }}</span></h2>
    <p>{{ $t('landing.dao_proposals.text') }}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10">
      <div v-for="project in projects" :key="project.title">
        <NuxtLink :prefetch="false" to="/project-overview">
          <div class="shadow rounded h-275px p-8">
            <div class="flex">
              <div class="mr-3">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                     :src="project.imageURL"
                     :alt="project.title"
                     />
              </div>
              <div>
                <p class="text-primary p-line-head">{{project.title | truncate(14)}}</p>
                <p class="small-text">{{project.category}}</p>
              </div>
            </div>
            <div class="mt-5">
              <p class="small-text">{{project.description | truncate(90)}}</p>
            </div>
            <div class="mt-5">
              <div class="flex">
                <img class="mr-2" src="@/assets/images/icons/transaction.svg" alt="funding-finish">
                <p class="small-text text-primary">{{ $t('landing.dao_proposals.requestedAmount') }}</p>
              </div>
              <p class="small-text">{{project.fundAmount}} {{ $t('landing.dao_proposals.ocean') }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/project-overview">
      <!-- will update link when active dao proposal page gets implemented -->
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">{{ $t('landing.dao_proposals.link_text') }}</p>
        <img src="@/assets/images/landing/check-out.svg" alt="">
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
            title: 'Pearl',
            category: 'DeFi',
            projectTarget: '',
            imageURL: require('@/assets/images/logo/pearl-logo.svg'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '8000',
          },
          {
            title: 'Jellyfish',
            category: 'HiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '12000',
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '5000',
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '30000',
          },

        ],
      }
    },
  }
</script>

<style scoped>
  .p-line-head {
    line-height: 20px;
  }
</style>

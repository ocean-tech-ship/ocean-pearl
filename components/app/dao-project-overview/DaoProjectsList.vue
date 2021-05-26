<template>
  <LandingSectionContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-10">
      <div v-for="project in daoProjects" :key="project.title">
        <NuxtLink :prefetch="false" to="/project-detail">
        <div class="shadow rounded pb-10 p-8">
          <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" :src="project.imageURL"
                :alt="project.title" />
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
              <p class="small-text text-primary">{{ $t('dao-projects.projects.requestedAmount') }}</p>
            </div>
            <p class="small-text">{{project.fundAmount}} {{ $t('dao-projects.projects.ocean') }}</p>
          </div>
          <div class="mt-5">
            <div class="flex">
              <img class="mr-2" src="@/assets/images/icons/yes-vote.svg" alt="funding-finish">
              <p class="small-text text-primary">{{ $t('dao-projects.projects.yesVotes') }}</p>
            </div>
            <p class="small-text">{{project.yesVotes}} {{ $t('dao-projects.projects.ocean') }}</p>
          </div>
          <div class="mt-5">
            <div class="flex">
              <img class="mr-2" src="@/assets/images/icons/no-vote.svg" alt="funding-finish">
              <p class="small-text text-primary">{{ $t('dao-projects.projects.noVotes') }}</p>
            </div>
            <p class="small-text">{{project.noVotes}} {{ $t('dao-projects.projects.ocean') }}</p>
          </div>
        </div>
        </NuxtLink>
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'

  export default {
    name: 'DaoProjectsList',
    components: {
      LandingSectionContainer
    },

    data() {
      return {
        daoProjects: [{
            title: 'Pearl',
            category: 'DeFi',
            projectTarget: '',
            imageURL: require('@/assets/images/logo/pearl-logo.svg'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '69420',
            yesVotes: '1000000',
            noVotes: '0'
          },
          {
            title: 'Jellyfish',
            category: 'HiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '12000',
            yesVotes: '3828384',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '30000',
            yesVotes: '248288',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '20000',
            yesVotes: '199942',
            noVotes: '5000'
          },
          {
            title: 'Pearl',
            category: 'DeFi',
            projectTarget: '',
            imageURL: require('@/assets/images/logo/pearl-logo.svg'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '8000',
            yesVotes: '100003',
            noVotes: '1000'
          },
          {
            title: 'Jellyfish',
            category: 'HiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '12000',
            yesVotes: '2882949',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '5000',
            yesVotes: '2882949',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '30000',
            yesVotes: '2882949',
            noVotes: '0'
          },
          {
            title: 'Pearl',
            category: 'DeFi',
            projectTarget: '',
            imageURL: require('@/assets/images/logo/pearl-logo.svg'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '69420',
            yesVotes: '1000000',
            noVotes: '0'
          },
          {
            title: 'Jellyfish',
            category: 'HiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '12000',
            yesVotes: '3828384',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '30000',
            yesVotes: '248288',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '20000',
            yesVotes: '199942',
            noVotes: '5000'
          },
          {
            title: 'Pearl',
            category: 'DeFi',
            projectTarget: '',
            imageURL: require('@/assets/images/logo/pearl-logo.svg'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '8000',
            yesVotes: '100003',
            noVotes: '1000'
          },
          {
            title: 'Jellyfish',
            category: 'HiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '12000',
            yesVotes: '2882949',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '5000',
            yesVotes: '2882949',
            noVotes: '0'
          },
          {
            title: 'Poseidon',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            description: 'This is a nice project. It does so nice things. And this so leave some love and like this description.',
            fundAmount: '30000',
            yesVotes: '2882949',
            noVotes: '0'
          }
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

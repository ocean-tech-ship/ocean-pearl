<template>
  <LandingSectionContainer class="my-32">
    <h2>DAO <span class="text-primary">proposals</span></h2>
    <p>These projects are currently waiting or applying for a DAO funding.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10">
      <div v-for="project in projects" :key="project.title">
        <NuxtLink to="/project-overview">
          <div class="shadow p-8">
            <div class="flex">
              <div class="mr-3">
                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" 
                     :src="project.imageURL"
                     :alt="project.title" 
                     />
              </div>
              <div>
                <p class="text-primary p-line-head">{{project.title}}</p>
                <p class="small-text">{{project.category}}</p>
              </div>
            </div>
            <div class="mt-5">
              <div class="flex">
                <img class="mr-2" src="@/assets/images/icons/start-fund.png" alt="funding-start">
                <p class="small-text text-primary">Start</p>
              </div>
              <p class="small-text">{{project.startDate}}</p>
            </div>
            <div class="mt-3">
              <div class="flex">
                <img class="mr-2" src="@/assets/images/icons/finish-fund.png" alt="funding-finish">
                <p class="small-text text-primary">Finish</p>
              </div>
              <p class="small-text">{{project.endDate}}</p>
            </div>
            <div class="mt-3">
              <div class="flex">
                <img class="mr-2" src="@/assets/images/icons/fund-round.png" alt="funding-round">
                <p class="small-text text-primary">Fund round</p>
              </div>
              <p class="small-text">Round {{project.fundRound}}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/project-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">See all listed projects</p>
        <img src="@/assets/images/icons/check-out.png" alt="">
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
            title: 'Jellyfish',
            category: 'DeFi',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            startDate: '12. Nov 2021 12PM',
            endDate: '12. Nov 2021 12PM',
            fundRound: '2'
          },
          {
            title: 'Jellyfish',
            category: 'HiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            startDate: '12. Nov 2021 12PM',
            endDate: '12. Nov 2021 12PM',
            fundRound: '2'
          },
          {
            title: 'Jellyfish',
            category: 'SciFi',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            startDate: '12. Nov 2021 12PM',
            endDate: '12. Nov 2021 12PM',
            fundRound: '2'
          },
          {
            title: 'Jellyfish',
            category: 'MiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            startDate: '12. Nov 2021 12PM',
            endDate: '12. Nov 2021 12PM',
            fundRound: '2'
          },
          {
            title: 'Jellyfish',
            category: 'WiFi',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            startDate: '12. Nov 2021 12PM',
            endDate: '12. Nov 2021 12PM',
            fundRound: '2'
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

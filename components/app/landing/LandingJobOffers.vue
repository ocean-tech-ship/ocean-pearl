<template>
  <LandingSectionContainer class="my-32">
    <h2>{{ $t('landing.job_offers.title') }} <span class="text-primary">{{ $t('landing.job_offers.titleHighlight') }} </span></h2>
    <p>{{ $t('landing.job_offers.text') }}</p>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10">
  <div v-for="project in projects" :key="project.title">
  <NuxtLink to="/job-overview"> 
  <div class="shadow p-12">
      <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                :src="project.imageURL" :alt="project.title" />
            </div>
            <div>
              <p class="text-primary p-line-head">{{project.title}}</p>
              <p class="small-text">{{project.job}}</p>
            </div>
       </div>
     <div class="mt-5">
        <p class="small-text">
            {{project.description}}
        </p>
     </div>
     <div class="mt-8">
        <p class="small-text text-primary">
            {{project.loan}} a year
        </p>
     </div>
  </div>
  </NuxtLink>
</div>
</div>
<NuxtLink to="/job-overview">
      <div class="flex items-center mt-6">
        <p class="mr-2 text-primary">{{ $t('landing.job_offers.link_text') }}</p>
        <img src="@/assets/images/landing/check-out.svg" alt="">
      </div>
</NuxtLink>
</LandingSectionContainer>
</template>

<script>
import LandingSectionContainer from './LandingSectionContainer'

export default {
  name: 'LandingJobOffers',

  components: {
    LandingSectionContainer,
  },
  data() {
      return {
        projects: [
          {
            title: 'pearl',
            job: 'Data analyst',
            description: 'Data analyst which is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/logo/pearl-logo.svg'),
            loan: "50000€ - 60000€"
          },
          {
            title: 'poseidon',
            job: 'Data scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon.png'),
            loan: "20000€ - 30000€"
          },
          {
            title: 'jellyfish',
            job: 'Content creator',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/jellyfish.png'),
            loan: "10000€ - 90000€"
          },
          {
            title: 'network',
            job: 'Rocket Scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/poseidon-network.png'),
            loan: "50000€ - 60000€"
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

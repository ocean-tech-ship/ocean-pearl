<template>
  <div>
    <LandingSectionContainer>
      <ProjectSingleHeader />
    </LandingSectionContainer>

    <div class="body-single py-8">
      <LandingSectionContainer>
        <div class="w-full pt-6 grid grid-cols-2 md:grid-flow-col gap-10">
          <div class="shadow rounded-md">
            <img
              class="self-center align-center"
              src="@/assets/images/poseidon-cover.png"
              alt="poseidon network cover"
            />
          </div>
          <!-- social ------------------------------------------------------------------>
          <div>
            <div>
              <p class="text-primary small-text">Description</p>
              <p class="small-text">
                Next-Generation Content Acceleration Layer (CDN + DSN),
                incentivized by Token Economy, it’s cheaper yet faster. Utilized
                unused bandwidth.
              </p>
            </div>

            <!-- links ------------------------------------------------------------------>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img
                  class="w-4 h-4 mt-1 mr-2"
                  src="@/assets/images/icons/website.png"
                  alt="website"
                />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/"
                  >https://poseidon.network/</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="flex content-center">
                <img
                  class="w-4 h-4 mt-1 mr-2"
                  src="@/assets/images/icons/discord.png"
                  alt="website"
                />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/"
                  >https://poseidon.network/</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="flex content-center">
                <img
                  class="w-4 h-4 mt-1 mr-2"
                  src="@/assets/images/icons/facebook.png"
                  alt="website"
                />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/"
                  >https://poseidon.network/</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="flex content-center">
                <img
                  class="w-4 h-4 mt-1 mr-2"
                  src="@/assets/images/icons/linkedIn.png"
                  alt="website"
                />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/"
                  >https://poseidon.network/</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="flex content-center">
                <img
                  class="w-4 h-4 mt-1 mr-2"
                  src="@/assets/images/icons/github.png"
                  alt="website"
                />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/"
                  >https://poseidon.network/</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="flex content-center">
                <img
                  class="w-4 h-4 mt-1 mr-2"
                  src="@/assets/images/icons/website.png"
                  alt="website"
                />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/"
                  >https://poseidon.network/</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- DAO ------------------------------------------------------------------>
        <h4 class="mt-24">DAO <span class="text-primary">proposal</span></h4>
        <div class="flex content-center space-x-40 mt-8">
          <div>
            <div class="flex">
              <img
                class="mr-1 py-2"
                src="@/assets/images/icons/start-fund.png"
                alt="funding-start"
              />
              <p class="text-primary">Start</p>
            </div>
            <p class="small-text">12.03.21</p>
          </div>
          <div>
            <div class="flex">
              <img
                class="mr-1 py-2"
                src="@/assets/images/icons/finish-fund.png"
                alt="funding-finish"
              />
              <p class="text-primary">Finish</p>
            </div>
            <p class="small-text">18.03.21</p>
          </div>
          <div>
            <div class="flex">
              <img
                class="mr-1 py-2"
                src="@/assets/images/icons/fund-round.png"
                alt="funding-round"
              />
              <p class="text-primary">Fund round</p>
            </div>
            <p class="small-text">Round 3</p>
          </div>

          <div class="pl-16 mt-4">
            <AppButton />
          </div>
        </div>
      </LandingSectionContainer>
    </div>

    <LandingSectionContainer>
      <h4 class="mt-16">Open <span class="text-primary">positions</span></h4>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-12">
        <div v-for="job in jobs" :key="job.id">
          <div class="shadow p-6 md:p-12">
            <div class="block md:flex align-center justify-between">
            <div class="flex">
              <div class="mr-3">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  :src="job.imageURL"
                  :alt="job.title"
                />
              </div>
              <div>
                <p class="text-primary p-line-head">{{ job.title }}</p>
                <p class="small-text">{{ job.job }}</p>
              </div>
            </div>
            <div class="flex align-center mt-4 md:mt-1">
              <p class="small-text text-right">added on <span class="text-primary">{{job.date}}</span></p>
              <img
                  class="ml-2 h-6 w-6"
                  src="@/assets/images/icons/time.png"
                  alt="time-date"
                />
            </div>
            </div>
            <div class="mt-5">
              <p class="small-text">
                {{ job.description }}
              </p>
            </div>
            <div class="mt-6 md:mt-8 flex align-center justify-between">
              <div>
                <p class="small-text text-primary mt-1 w-32 md:w-full">{{ job.loan }} a year</p>
              </div>
              <div>
                <AppButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingSectionContainer>
  </div>
</template>

<script>
import LandingSectionContainer from '../landing/LandingSectionContainer'
import ProjectSingleHeader from './ProjectSingleHeader'
import AppButton from '@/components/common/AppButton'

export default {
  name: 'ProjectSingle',

  components: {
    LandingSectionContainer,
    ProjectSingleHeader,
    AppButton,
  },
  data() {
    return {
      jobs: [
        {
          id: 0,
          title: 'poseidon',
          job: 'Data analyst',
          description:
            'Data analyst which is on track with registring new data assets and maintaining them aswell.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon.png'),
          date: '11.03.21',
          loan: '50000€ - 60000€',
        },
        {
          id: 1,
          title: 'poseidon',
          job: 'Data scientist',
          description:
            'Data analyst who is on track with registring new data assets and maintaining them aswell.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon.png'),
          date: '18.03.21',
          loan: '20000€ - 30000€',
        },
        {
          id: 1,
          title: 'poseidon',
          job: 'Data scientist',
          description:
            'Data analyst who is on track with all new data assets and maintaining them aswell.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon.png'),
          date: '18.03.21',
          loan: '20000€ - 30000€',
        },
        {
          id: 1,
          title: 'poseidon',
          job: 'Data scientist',
          description:
            'Data analyst who is on track with registring new data assets and maintaining them aswell.',
          projectTarget: '',
          imageURL: require('@/assets/images/project-logos/poseidon.png'),
          date: '18.03.21',
          loan: '20000€ - 30000€',
        },
      ],
    }
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px !important;
}

.body-single {
  background: #fafafa;
}
</style>

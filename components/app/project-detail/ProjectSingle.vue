<template>
  <div>
    <div class="body-single py-8">
      <LandingSectionContainer>
        <div class="w-full pt-6 grid grid-cols-2 md:grid-flow-col gap-10">
          <div class="shadow rounded-md">
            <img class="self-center align-center" src="@/assets/images/poseidon-cover.png"
              alt="poseidon network cover" />
          </div>
          <div>
            <div>
              <p class="text-primary small-text">Description</p>
              <p class="small-text">Next-Generation Content Acceleration Layer (CDN + DSN), incentivized by Token
                Economy, it’s cheaper yet faster. Utilized unused bandwidth.</p>
            </div>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img class="w-4 h-4 mt-1 mr-2" src="@/assets/images/icons/website.png" alt="website" />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/">https://poseidon.network/</a>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img class="w-4 h-4 mt-1 mr-2" src="@/assets/images/icons/discord.png" alt="website" />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/">https://poseidon.network/</a>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img class="w-4 h-4 mt-1 mr-2" src="@/assets/images/icons/facebook.png" alt="website" />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/">https://poseidon.network/</a>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img class="w-4 h-4 mt-1 mr-2" src="@/assets/images/icons/linkedIn.png" alt="website" />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/">https://poseidon.network/</a>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img class="w-4 h-4 mt-1 mr-2" src="@/assets/images/icons/github.png" alt="website" />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/">https://poseidon.network/</a>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="flex content-center">
                <img class="w-4 h-4 mt-1 mr-2" src="@/assets/images/icons/website.png" alt="website" />
                <p class="small-text">website</p>
              </div>
              <div class="ml-12">
                <a class="text-primary small-text" href="/">https://poseidon.network/</a>
              </div>
            </div>
          </div>
        </div>
        <h4 class="mt-24">DAO <span class="text-primary">proposal</span></h4>
        <div class="flex content-center space-x-40 mt-8">
          <div>
            <div class="flex">
              <img class="mr-1 py-2" src="@/assets/images/icons/start-fund.png" alt="funding-start">
              <p class="text-primary">Start</p>
            </div>
            <p class="small-text">12.03.21</p>
          </div>
          <div>
            <div class="flex">
              <img class="mr-1 py-2" src="@/assets/images/icons/finish-fund.png" alt="funding-finish">
              <p class="text-primary">Finish</p>
            </div>
            <p class="small-text">18.03.21</p>
          </div>
          <div>
            <div class="flex">
              <img class="mr-1 py-2" src="@/assets/images/icons/fund-round.png" alt="funding-round">
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
    </LandingSectionContainer>
  </div>
</template>

<script>
  import LandingSectionContainer from '../landing/LandingSectionContainer'
  import AppButton from '@/components/common/AppButton'

  export default {
    name: 'ProjectSingle',

    components: {
      LandingSectionContainer,
      AppButton
    },
  }

</script>

<style scoped>
  .p-line-head {
    line-height: 20px !important;
  }

  .body-single {
    background: #FAFAFA;
  }

</style>

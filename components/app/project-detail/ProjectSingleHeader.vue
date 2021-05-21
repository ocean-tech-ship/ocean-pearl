<template>
  <LandingSectionContainer>
    <div class="flex justify-between content-center">
      <div class="flex">
        <div class="mr-4">
          <img
            class="inline-block h-14 w-14 rounded-full ring-2 ring-white"
            src="@/assets/images/poseidon-network.png"
            alt="Logo parsiq"
          />
        </div>
        <div class="mt-2">
          <h1 class="text-primary thin-heading">Parsiq</h1>
          <p class="mt-2">DeFi</p>
        </div>
      </div>
      <div class="flex">
        <div class="mr-4">
          <img
            class="inline-block h-14 w-14 rounded-full ring-2 ring-white"
            src="@/assets/images/icons/rocket.svg"
            alt="Icon rocket"
          />
        </div>
        <div>
          <p
            class="text-primary small-text p-line-head"
            v-text="$t('project.added')"
          />
          <p class="small-text">17.03.21</p>
        </div>
      </div>
      <div class="hidden md:block">
        <AppButton
          :icon="require('@/assets/images/detail/copy-link.svg')"
          :text="$t('project.copy')"
        />
      </div>
    </div>
  </LandingSectionContainer>
</template>

<script>
import AppButton from '@/components/common/AppButton'
import LandingSectionContainer from '../landing/LandingSectionContainer'

export default {
  name: 'ProjectSingleHeader',
  components: {
    AppButton,
    LandingSectionContainer,
  },
}
</script>

<style scoped>
.p-line-head {
  line-height: 20px;
}
</style>

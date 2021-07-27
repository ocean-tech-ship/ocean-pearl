<template>
  <landing-section-container>
    <div class="grid justify-center">
      <h1>Login to manage your project or proposal</h1>
      <app-button
        text="Login via Wallet"
        @click="$store.dispatch('wallet/connect')"
      />
    </div>
  </landing-section-container>
</template>

<script>
import Vue from 'vue'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import AppButton from '@/components/common/AppButton'

export default Vue.extend({
  components: {
    LandingSectionContainer,
    AppButton,
  },
})
</script>

<style scoped></style>

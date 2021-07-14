<template>
  <landing-section-container>
    <div class="grid justify-center">
      <h1>Management panel</h1>
      <p>{{ $store.state.wallet.account }}</p>
      <AppButton text="Logout" @click="$store.dispatch('wallet/disconnect')" />

      <!-- TODO: load project and show form -->

      <AppButton text="Update" @click="sign()" />
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

  middleware: ['wallet'],

  methods: {
    async sign() {
      try {
        const sign = await this.$store.dispatch('wallet/signData', 'payload')
        console.log('sign', sign)
      } catch (e) {
        console.log('error on sign', e)
      }
    },
  },
})
</script>

<style scoped></style>

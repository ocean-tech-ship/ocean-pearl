<template>
  <landing-section-container>
    <div class="grid justify-center">
      <h1>Login to manage your project or proposal</h1>

      <p v-if="!!$store.state.auth.message">
        {{ $store.state.auth.message }}
      </p>

      <app-button
        text="Login via Wallet"
        @click="$store.dispatch('auth/login')"
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

  middleware: ['session'],
})
</script>

<style scoped></style>

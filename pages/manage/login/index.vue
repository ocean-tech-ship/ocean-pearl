<template>
  <landing-section-container>
    <div class="flex justify-center pb-8">
      <h2>Login here to manage your projects</h2>
    </div>

    <h4>
      {{ $t('manage.auth.login.subtitle[0]')
      }}<span class="text-primary">{{
        $t('manage.auth.login.subtitle[1]')
      }}</span>
    </h4>

    <div v-if="!!$store.state.auth.message" class="shadow rounded p-4 my-4">
      {{ $store.state.auth.message }}
    </div>

    <div class="grid gap-8 lg:grid-cols-3 py-4">
      <!-- choose your wallet provider -->
      <div class="shadow rounded border-primary border-2">
        <div class="flex justify-center">
          <img
            src="@/assets/images/account/login/step-1.svg"
            alt=""
            class="h-64 w-64 object-contain"
          />
        </div>

        <p class="p-4 font-bold">
          <span class="text-primary">1.</span>
          Choose your wallet provider
        </p>
      </div>

      <!-- select account to connect -->
      <div class="shadow rounded border-primary border-2">
        <div class="flex justify-center">
          <img
            src="@/assets/images/account/login/step-2.svg"
            alt=""
            class="h-64 w-64 object-contain"
          />
        </div>

        <p class="p-4 font-bold">
          <span class="text-primary">2.</span>
          Select account to connect
        </p>
      </div>

      <!-- sign login request -->
      <div class="shadow rounded border-primary border-2">
        <div class="flex justify-center">
          <img
            src="@/assets/images/account/login/step-3.svg"
            alt=""
            class="h-64 w-64 object-contain"
          />
        </div>

        <p class="p-4 font-bold">
          <span class="text-primary">3.</span>
          Sign login request
        </p>
      </div>
    </div>

    <div class="flex justify-center">
      <app-button
        :text="$t('manage.auth.login.action')"
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

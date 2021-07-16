<template>
  <landing-section-container>
    <section>
      <h2>
        Management
        <span class="text-primary">panel</span>
      </h2>

      <div class="flex justify-between py-2">
        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Wallet Address</p>
          <span class="small-text">{{ $store.state.wallet.account }}</span>
        </div>

        <div>
          <AppButton
            text="Disconnect wallet"
            @click="$store.dispatch('wallet/disconnect')"
          />
        </div>
      </div>
    </section>

    <hr class="text-primary my-8" />

    <section>
      <h2>
        Update your
        <span class="text-primary">Project</span>
      </h2>

      <div class="flex py-2">
        <div class="shadow rounded p-4 mr-4">
          <p class="text-primary small-text">Title</p>
          <span class="small-text">{{ project.title }}</span>
        </div>

        <div class="shadow rounded p-4 mr-4">
          <p class="text-primary small-text">Category</p>
          <span class="small-text">{{ project.category }}</span>
        </div>
      </div>

      <div class="flex py-2">
        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Description</p>
          <span class="small-text">{{ project.description }}</span>
        </div>
      </div>

      <div class="flex py-2">
        <div class="shadow rounded p-4 mr-4">
          <p class="text-primary small-text">Logo</p>
          <app-logo
            class="w-16 h-16 mx-4 inline-block rounded-full"
            :src="project.logo"
            :alt="project.title"
          />
        </div>

        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Images</p>
        </div>
      </div>

      <AppButton class="mt-4" text="Sign and save changes" @click="sign()" />
    </section>
  </landing-section-container>
</template>

<script>
import Vue from 'vue'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import AppButton from '@/components/common/AppButton'
import AppButtonStyle from '@/components/common/AppButtonStyle'
import AppLogo from '@/components/common/AppLogo'

export default Vue.extend({
  components: {
    LandingSectionContainer,
    AppButton,
    AppButtonStyle,
    AppLogo,
  },

  middleware: ['wallet'],

  data() {
    return {
      project: {
        title: 'Example Project',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        category: 'buildAndIntegrate',
        pictures: [],
        logo: '',
      }
    }
  },

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

<template>
  <landing-section-container>
    <section>
      <h2>
        Management
        <span class="text-primary">panel</span>
      </h2>

      <div class="flex flex-wrap justify-between py-2">
        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Wallet Address</p>
          <span class="small-text break-all">{{
            $store.state.wallet.account
          }}</span>
        </div>

        <div class="py-4">
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

      <div class="flex flex-wrap py-2">
        <div class="shadow rounded p-4 mr-4 mb-2">
          <p class="text-primary small-text">Title</p>
          <span class="small-text">{{ project.title }}</span>
        </div>

        <div class="shadow rounded p-4 mr-4 mb-2">
          <p class="text-primary small-text">Category</p>
          <span class="small-text">{{ project.category }}</span>
        </div>
      </div>

      <div class="flex pb-2">
        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Description</p>
          <span class="small-text">{{ project.description }}</span>
        </div>
      </div>

      <div class="flex py-2">
        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Logo</p>

          <div class="flex flex-wrap items-center">
            <app-logo
              class="w-16 h-16 mx-4 inline-block rounded-full"
              :src="project.logo"
              :alt="project.title"
            />

            <div class="flex">
              <div class="px-2">
                <app-upload text="upload" @change="setLogo($event)" />
              </div>

              <div class="px-2">
                <app-button text="delete" @click="project.logo = ''" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-2">
        <div class="shadow rounded p-4">
          <p class="text-primary small-text">Images</p>

          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div
              v-for="picture in project.pictures"
              :key="picture"
              class="relative"
            >
              <div class="absolute w-full flex justify-end items-center">
                <app-button text="X" @click="deleteImage(picture)" />
              </div>

              <img class="w-full h-64 rounded object-cover" :src="picture" />
            </div>

            <div
              class="w-full h-64 border rounded border-primary flex justify-center items-center"
            >
              <app-upload text="add image" @change="addImages($event)" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <AppButton class="mt-2" text="Sign and save changes" @click="sign()" />
      </div>
    </section>
  </landing-section-container>
</template>

<script>
import Vue from 'vue'
import LandingSectionContainer from '@/components/app/landing/LandingSectionContainer'
import AppButton from '@/components/common/AppButton'
import AppLogo from '@/components/common/AppLogo'
import AppUpload from '@/components/common/AppUpload'

export default Vue.extend({
  components: {
    LandingSectionContainer,
    AppButton,
    AppLogo,
    AppUpload,
  },

  middleware: ['wallet'],

  data() {
    return {
      project: {
        title: 'Example Project',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        category: 'buildAndIntegrate',
        pictures: [
          'https://dataunion.app/wp-content/uploads/2020/11/skateboard.jpg',
          'https://dataunion.app/wp-content/uploads/2020/11/winsome-girl-with-straight-hair-standing-on-bridge-with-camera.jpg',
        ],
        logo: '',
      },
    }
  },

  methods: {
    deleteImage(image) {
      const index = this.project.pictures.indexOf(image)
      if (index > -1) {
        this.project.pictures.splice(index, 1)
      }
    },

    setLogo(event) {
      if (event.target.files.length > 0) {
        this.project.logo = URL.createObjectURL(event.target.files[0])
      }
    },

    addImages(event) {
      for (const file of event.target.files) {
        this.project.pictures.push(URL.createObjectURL(file))
      }
    },

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

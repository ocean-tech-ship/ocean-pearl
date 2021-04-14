<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-12">
    <div v-for="project in projects" :key="project.title">
      <NuxtLink to="/project-detail">
        <div class="shadow p-12">
          <div class="flex">
            <div class="mr-3">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" :src="project.imageURL"
                :alt="project.title" />
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
</template>

<script>
  export default {
    name: 'JobOfferList',

    data() {
      return {
        projects: [{
            title: 'poseidon',
            job: 'Data analyst',
            description: 'Data analyst which is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "50000€ - 60000€"
          },
          {
            title: 'poseidon',
            job: 'Data scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "20000€ - 30000€"
          },
          {
            title: 'poseidon',
            job: 'Content creator',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "10000€ - 90000€"
          },
          {
            title: 'poseidon',
            job: 'Rocket Scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "50000€ - 60000€"
          },
          {
            title: 'poseidon',
            job: 'Data analyst',
            description: 'Data analyst which is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "50000€ - 60000€"
          },
          {
            title: 'poseidon',
            job: 'Data scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "20000€ - 30000€"
          },
          {
            title: 'poseidon',
            job: 'Content creator',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "10000€ - 90000€"
          },
          {
            title: 'poseidon',
            job: 'Rocket Scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "50000€ - 60000€"
          },
          {
            title: 'poseidon',
            job: 'Data analyst',
            description: 'Data analyst which is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "50000€ - 60000€"
          },
          {
            title: 'poseidon',
            job: 'Data scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "20000€ - 30000€"
          },
          {
            title: 'poseidon',
            job: 'Content creator',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "10000€ - 90000€"
          },
          {
            title: 'poseidon',
            job: 'Rocket Scientist',
            description: 'Data analyst who is on track with registring new data assets and maintaining them aswell.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/poseidon.png'),
            loan: "50000€ - 60000€"
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
</style>

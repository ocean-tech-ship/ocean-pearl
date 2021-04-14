<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-12">
    <div v-for="project in projects" :key="project.title">
      <div class="shadow p-2 pb-12 text-center relative">
        <div class="absolute top-0 right-0 mr-3 flex space-x-2">
          <img v-if="project.badgeJob" src="@/assets/images/icons/hiring-badge.png" alt="hiring job">
          <img v-if="project.badgeFund" src="@/assets/images/icons/bitcoin-badge.png" alt="looking for funding">
          <img v-if="project.badgeFeatured" src="@/assets/images/icons/featured-badge.png" alt="featured project">
        </div>
        <div class="mt-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white" :src="project.imageURL"
            :alt="project.title" />
        </div>
        <div class="mt-4">
          <p class="text-primary p-line-head">{{project.title}}</p>
          <p class="small-text">{{project.category}}</p>
        </div>
        <div class="mt-6 px-3 flex place-content-center">
          <p class="small-text">
            {{project.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectsList',
    data() {
      return {
        projects: [{
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: true,
            badgeFund: true,
            badgeFeatured: true,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: true,
            badgeFund: false,
            badgeFeatured: true,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: true,
            badgeFund: false,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: false,
            badgeFund: true,
            badgeFeatured: false,
          },
          {
            title: 'Jelly',
            category: 'LoFi',
            description: 'This text describes the project in one pretty cool sentence.',
            projectTarget: '',
            imageURL: require('@/assets/images/project-logos/jellyfish.png'),
            badgeJob: true,
            badgeFund: true,
            badgeFeatured: false,
          },
        ],
      }
    },

  }
</script>

<style scoped>

</style>
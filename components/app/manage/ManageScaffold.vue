<template>
  <div class="flex">
    <!-- navigation drawer -->
    <div class="w-80 h-screen p-2">
      <div
        class="h-full rounded shadow gradient-background flex flex-col items-center text-primary-content"
      >
        <!-- corporate -->
        <nuxt-link class="btn btn-ghost normal-case text-lg" to="/">
          <img
            class="pr-2"
            src="@/assets/images/pearl-logo.svg"
            :alt="$t('general.logo')"
          />
          {{ $t('navbar.logoText') }}
        </nuxt-link>

        <!-- navigation slot -->
        <slot name="navigation" />
      </div>
    </div>

    <!-- content -->
    <div class="flex-grow">
      <!-- navigation -->
      <div class="flex py-6">
        <div class="flex-grow flex justify-center">
          <ul class="menu menu-horizontal p-0 xl:space-x-8">
            <li v-for="page in pages" :key="page.to">
              <nuxt-link :to="page.to" active-class="text-primary">
                {{ page.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex">
          <management-options />
          <theme-switcher class="pl-4" />
        </div>
      </div>

      <!-- default slot -->
      <slot />
    </div>
  </div>
</template>

<script>
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';

export default {
  name: 'ManageScaffold',

  components: { ThemeSwitcher, ManagementOptions },

  data() {
    return {
      pages: [
        {
          title: this.$t('navbar.navbarProjects'),
          to: '/projects',
        },
        {
          title: this.$t('navbar.navbarProposals'),
          to: '/dao-proposals',
        },
        {
          title: this.$t('navbar.navbarVoting'),
          to: '/dao-voting',
        },
        {
          title: this.$t('navbar.navbarManage'),
          to: '/manage',
        },
      ],
    };
  },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(125.9deg, #7b3070e6 15.74%, #d45b8de6 112.01%);
}
</style>

<template>
  <div class="flex">
    <!-- navigation drawer -->
    <div class="hidden xl:block w-80 min-h-screen p-2">
      <div
        class="h-full p-4 rounded shadow gradient-background flex flex-col items-center text-primary-content"
      >
        <!-- corporate -->
        <logo-branding class="text-primary-content" />

        <!-- navigation slot -->
        <slot name="navigation" />
      </div>
    </div>

    <!-- content -->
    <div class="flex-grow flex flex-col min-h-screen">
      <!-- navigation -->
      <div class="navbar px-4 md:px-8">
        <!-- corporate (only if nav drawer is hidden < xl) -->
        <div class="navbar-start xl:hidden">
          <logo-branding class="text-primary" />
        </div>

        <div class="hidden xl:flex flex-grow justify-center w-full">
          <ul class="menu menu-horizontal p-0 2xl:space-x-8">
            <li v-for="page in pages" :key="page.to">
              <nuxt-link :to="page.to" active-class="text-primary">
                {{ page.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="hidden xl:flex navbar-end">
          <management-options />
          <theme-switcher class="pl-4" />
        </div>

        <!-- mobile variant (until xl) -->
        <div class="xl:hidden navbar-end">
          <mobile-nav-dropdown :pages="pages" />
        </div>
      </div>

      <!-- nav support (until xl) -->
      <div class="xl:hidden w-full px-4 md:px-8 bg-primary bg-opacity-10">
        <slot name="mobile-nav-support" />
      </div>

      <!-- content (default slot) -->
      <div class="flex-grow">
        <slot />
      </div>

      <!-- mobile footer / navigation (until xl) -->
      <creator-mobile-footer
        class="xl:hidden sticky bottom-0"
        @back="$emit('back')"
        @continue="$emit('continue')"
      />
    </div>
  </div>
</template>

<script>
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';
import LogoBranding from '@/components/app/header/LogoBranding';
import MobileNavDropdown from '@/components/app/header/MobileNavDropdown';
import CreatorMobileFooter from '@/components/app/manage/creator/CreatorMobileFooter';

export default {
  name: 'CreatorScaffold',

  components: {
    CreatorMobileFooter,
    MobileNavDropdown,
    LogoBranding,
    ThemeSwitcher,
    ManagementOptions,
  },

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

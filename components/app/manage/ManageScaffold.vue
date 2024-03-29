<template>
  <div class="flex">
    <!-- navigation drawer -->
    <div class="hidden xl:block sticky top-0 w-80 h-screen p-2 flex-none">
      <div
        class="h-full w-full p-4 rounded shadow gradient-background flex flex-col items-center text-primary-content"
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
            <li v-for="page in navbarPages" :key="page.to">
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
          <mobile-nav-dropdown :pages="navbarPages" />
        </div>
      </div>

      <!-- nav support (until xl) -->
      <div class="xl:hidden w-full bg-primary bg-opacity-10">
        <slot name="mobile-nav-support" />
      </div>

      <!-- content (default slot) -->
      <div class="flex-grow">
        <slot />
      </div>

      <!-- mobile footer / navigation (until xl) -->
      <div class="xl:hidden sticky bottom-0">
        <slot name="mobile-footer" />
      </div>
    </div>
  </div>
</template>

<script>
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';
import LogoBranding from '@/components/app/header/LogoBranding';
import MobileNavDropdown from '@/components/app/header/MobileNavDropdown';
import NavbarPages from '@/mixins/NavbarPages';

export default {
  name: 'ManageScaffold',

  components: {
    MobileNavDropdown,
    LogoBranding,
    ThemeSwitcher,
    ManagementOptions,
  },

  mixins: [NavbarPages],
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(125.9deg, #7b3070e6 15.74%, #d45b8de6 112.01%);
}
</style>

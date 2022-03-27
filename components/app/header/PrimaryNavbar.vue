<template>
  <nav
    class="sticky top-0 w-full z-nav shadow bg-base-100 xl:relative xl:shadow-none"
  >
    <section-container class="navbar px-0 py-4 xl:py-16">
      <!-- corporate (always) -->
      <div class="navbar-start">
        <logo-branding class="text-primary" />
      </div>

      <!-- main pages (>= xl) -->
      <div class="navbar-center hidden xl:flex">
        <ul class="menu menu-horizontal p-0 2xl:space-x-8">
          <li v-for="page in navbarPages" :key="page.to">
            <nuxt-link :to="page.to" active-class="text-primary">
              {{ page.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <!-- management / options (>= xl) -->
      <div class="hidden xl:flex navbar-end">
        <management-options />
        <theme-switcher />
      </div>

      <!-- mobile navbar (until xl) -->
      <div class="xl:hidden navbar-end">
        <mobile-nav-dropdown :pages="navbarPages" />
      </div>
    </section-container>
  </nav>
</template>

<script>
import SectionContainer from '@/components/common/SectionContainer';
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';
import LogoBranding from '@/components/app/header/LogoBranding';
import MobileNavDropdown from '@/components/app/header/MobileNavDropdown';
import NavbarPages from '@/mixins/NavbarPages';

export default {
  name: 'PrimaryNavbar',

  components: {
    MobileNavDropdown,
    LogoBranding,
    SectionContainer,
    ManagementOptions,
    ThemeSwitcher,
  },

  mixins: [NavbarPages],
};
</script>

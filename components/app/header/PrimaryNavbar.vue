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
            <app-link :to="page.to" active-class="text-primary">
              {{ page.title }}
            </app-link>
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
import NavbarPages from '@/mixins/NavbarPages';
import SectionContainer from '@/components/common/SectionContainer';
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';
import LogoBranding from '@/components/app/header/LogoBranding';
import AppLink from '@/components/common/AppLink';
import MobileNavDropdown from '@/components/app/header/MobileNavDropdown';

export default {
  name: 'PrimaryNavbar',

  components: {
    MobileNavDropdown,
    LogoBranding,
    AppLink,
    SectionContainer,
    ManagementOptions,
    ThemeSwitcher,
  },

  mixins: [NavbarPages],
};
</script>
